import uuid
import logging
from datetime import datetime
from typing import Dict, List, Optional, Any, Union

from openlineage.client import OpenLineageClient, RunEvent, RunState, Run
from openlineage.client.run import RunId, Job
from openlineage.client.serde import Serde

class DuckCodeLineageClient:
    """Client for emitting OpenLineage events to Duckcode Observability"""
    
    def __init__(self, api_url: str, api_key: Optional[str] = None):
        """Initialize the client
        
        Args:
            api_url: URL of the Duckcode Observability API
            api_key: Optional API key for authentication
        """
        self.api_url = api_url
        self.api_key = api_key
        self.logger = logging.getLogger(__name__)
        
        # Initialize the OpenLineage client
        self.client = OpenLineageClient(url=api_url)
        if api_key:
            self.client.session.headers.update({"Authorization": f"Bearer {api_key}"})
    
    def emit_start_event(self, 
                        job_name: str,
                        job_namespace: str,
                        inputs: Optional[List[Dict[str, str]]] = None,
                        outputs: Optional[List[Dict[str, str]]] = None,
                        run_id: Optional[str] = None,
                        job_facets: Optional[Dict[str, Any]] = None,
                        run_facets: Optional[Dict[str, Any]] = None) -> str:
        """Emit a START event for a job run
        
        Args:
            job_name: Name of the job
            job_namespace: Namespace of the job
            inputs: List of input datasets [{"namespace": "ns", "name": "name"}]
            outputs: List of output datasets [{"namespace": "ns", "name": "name"}]
            run_id: Optional run ID (will be generated if not provided)
            job_facets: Optional job facets
            run_facets: Optional run facets
            
        Returns:
            Run ID
        """
        # Generate a run ID if not provided
        if not run_id:
            run_id = str(uuid.uuid4())
        
        # Create the job and run objects
        job = Job(namespace=job_namespace, name=job_name, facets=job_facets or {})
        run = Run(runId=RunId(run_id), facets=run_facets or {})
        
        # Parse inputs and outputs
        input_datasets = []
        if inputs:
            for input_dataset in inputs:
                input_datasets.append(self._create_dataset_ref(
                    input_dataset["namespace"],
                    input_dataset["name"],
                    input_dataset.get("facets", {})
                ))
        
        output_datasets = []
        if outputs:
            for output_dataset in outputs:
                output_datasets.append(self._create_dataset_ref(
                    output_dataset["namespace"],
                    output_dataset["name"],
                    output_dataset.get("facets", {})
                ))
        
        # Create and emit the event
        event = RunEvent(
            eventType=RunState.START,
            eventTime=datetime.now().isoformat(),
            run=run,
            job=job,
            producer="duckcode-openlineage",
            inputs=input_datasets,
            outputs=output_datasets
        )
        
        self.client.emit(event)
        self.logger.info(f"Emitted START event for job {job_namespace}.{job_name} with run ID {run_id}")
        
        return run_id
    
    def emit_complete_event(self,
                           job_name: str,
                           job_namespace: str,
                           run_id: str,
                           inputs: Optional[List[Dict[str, str]]] = None,
                           outputs: Optional[List[Dict[str, str]]] = None,
                           job_facets: Optional[Dict[str, Any]] = None,
                           run_facets: Optional[Dict[str, Any]] = None) -> None:
        """Emit a COMPLETE event for a job run
        
        Args:
            job_name: Name of the job
            job_namespace: Namespace of the job
            run_id: Run ID
            inputs: List of input datasets [{"namespace": "ns", "name": "name"}]
            outputs: List of output datasets [{"namespace": "ns", "name": "name"}]
            job_facets: Optional job facets
            run_facets: Optional run facets
        """
        # Create the job and run objects
        job = Job(namespace=job_namespace, name=job_name, facets=job_facets or {})
        run = Run(runId=RunId(run_id), facets=run_facets or {})
        
        # Parse inputs and outputs
        input_datasets = []
        if inputs:
            for input_dataset in inputs:
                input_datasets.append(self._create_dataset_ref(
                    input_dataset["namespace"],
                    input_dataset["name"],
                    input_dataset.get("facets", {})
                ))
        
        output_datasets = []
        if outputs:
            for output_dataset in outputs:
                output_datasets.append(self._create_dataset_ref(
                    output_dataset["namespace"],
                    output_dataset["name"],
                    output_dataset.get("facets", {})
                ))
        
        # Create and emit the event
        event = RunEvent(
            eventType=RunState.COMPLETE,
            eventTime=datetime.now().isoformat(),
            run=run,
            job=job,
            producer="duckcode-openlineage",
            inputs=input_datasets,
            outputs=output_datasets
        )
        
        self.client.emit(event)
        self.logger.info(f"Emitted COMPLETE event for job {job_namespace}.{job_name} with run ID {run_id}")
    
    def emit_fail_event(self,
                       job_name: str,
                       job_namespace: str,
                       run_id: str,
                       error_message: Optional[str] = None,
                       inputs: Optional[List[Dict[str, str]]] = None,
                       job_facets: Optional[Dict[str, Any]] = None,
                       run_facets: Optional[Dict[str, Any]] = None) -> None:
        """Emit a FAIL event for a job run
        
        Args:
            job_name: Name of the job
            job_namespace: Namespace of the job
            run_id: Run ID
            error_message: Error message
            inputs: List of input datasets [{"namespace": "ns", "name": "name"}]
            job_facets: Optional job facets
            run_facets: Optional run facets
        """
        # Create the job and run objects
        job = Job(namespace=job_namespace, name=job_name, facets=job_facets or {})
        
        # Add error facet if error message provided
        if error_message and not run_facets:
            run_facets = {}
        
        if error_message and "errorMessage" not in run_facets:
            run_facets["errorMessage"] = {"message": error_message}
        
        run = Run(runId=RunId(run_id), facets=run_facets or {})
        
        # Parse inputs
        input_datasets = []
        if inputs:
            for input_dataset in inputs:
                input_datasets.append(self._create_dataset_ref(
                    input_dataset["namespace"],
                    input_dataset["name"],
                    input_dataset.get("facets", {})
                ))
        
        # Create and emit the event
        event = RunEvent(
            eventType=RunState.FAIL,
            eventTime=datetime.now().isoformat(),
            run=run,
            job=job,
            producer="duckcode-openlineage",
            inputs=input_datasets,
            outputs=[]
        )
        
        self.client.emit(event)
        self.logger.info(f"Emitted FAIL event for job {job_namespace}.{job_name} with run ID {run_id}")
    
    def _create_dataset_ref(self, namespace: str, name: str, facets: Dict[str, Any] = None):
        """Helper method to create a dataset reference"""
        from openlineage.client.facet import SchemaDatasetFacet, DataSourceDatasetFacet
        from openlineage.client.dataset import Dataset, Field
        
        dataset_facets = {}
        
        # Add schema facet if provided
        if facets and "schema" in facets:
            fields = []
            for field in facets["schema"].get("fields", []):
                fields.append(Field(name=field["name"], type=field.get("type")))
            
            dataset_facets["schema"] = SchemaDatasetFacet(fields=fields)
        
        # Add datasource facet
        dataset_facets["dataSource"] = DataSourceDatasetFacet(
            name=namespace,
            uri=f"{namespace}://{name}"
        )
        
        # Add any additional facets
        if facets:
            for key, value in facets.items():
                if key != "schema":
                    dataset_facets[key] = value
        
        return Dataset(namespace=namespace, name=name, facets=dataset_facets)
