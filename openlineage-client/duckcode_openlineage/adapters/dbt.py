from typing import Dict, List, Optional, Any, Union
import os
import json
import logging
from pathlib import Path

from ..client import DuckCodeLineageClient

class DbtAdapter:
    """Adapter for emitting OpenLineage events from dbt"""
    
    def __init__(self, lineage_client: DuckCodeLineageClient):
        """Initialize the adapter
        
        Args:
            lineage_client: DuckCodeLineageClient instance
        """
        self.lineage_client = lineage_client
        self.logger = logging.getLogger(__name__)
    
    def extract_lineage_from_manifest(self,
                                     manifest_path: str,
                                     job_namespace: str,
                                     run_id: Optional[str] = None) -> Dict[str, str]:
        """Extract lineage from a dbt manifest.json file
        
        Args:
            manifest_path: Path to the dbt manifest.json file
            job_namespace: Namespace for dbt jobs
            run_id: Optional run ID prefix (will be combined with model name)
            
        Returns:
            Dictionary mapping model names to run IDs
        """
        # In a real implementation, we would parse the manifest.json file
        # For this example, we use mock data
        
        # Mock manifest structure
        mock_manifest = {
            "nodes": {
                "model.my_project.customers": {
                    "name": "customers",
                    "schema": "analytics",
                    "database": "dbt",
                    "depends_on": {"nodes": ["source.my_project.raw_customers"]},
                    "columns": {
                        "customer_id": {"name": "customer_id", "description": "Primary key"},
                        "name": {"name": "name", "description": "Customer name"}
                    },
                    "raw_sql": "SELECT * FROM {{ source('raw_customers') }}"
                }
            },
            "sources": {
                "source.my_project.raw_customers": {
                    "name": "raw_customers",
                    "schema": "raw",
                    "database": "dbt",
                    "columns": {
                        "id": {"name": "id", "description": "Primary key"},
                        "name": {"name": "name", "description": "Customer name"}
                    }
                }
            }
        }
        
        # Store run IDs for each model
        run_ids = {}
        
        # Process each model
        for node_id, node in mock_manifest["nodes"].items():
            if node_id.startswith("model."):
                # Extract model information
                model_name = node["name"]
                schema = node["schema"]
                database = node["database"]
                depends_on = node.get("depends_on", {}).get("nodes", [])
                
                # Create job name from model name
                job_name = f"dbt_model_{model_name}"
                
                # Create inputs list from dependencies
                inputs = []
                for dep in depends_on:
                    if dep.startswith("source."):
                        source = mock_manifest["sources"].get(dep, {})
                        inputs.append({
                            "namespace": "dbt",
                            "name": f"{source.get('database', '')}.{source.get('schema', '')}.{source.get('name', '')}",
                            "facets": {
                                "schema": {
                                    "fields": [
                                        {"name": col_name, "type": "VARCHAR"} 
                                        for col_name in source.get("columns", {}).keys()
                                    ]
                                }
                            }
                        })
                
                # Create output dataset
                outputs = [
                    {
                        "namespace": "dbt",
                        "name": f"{database}.{schema}.{model_name}",
                        "facets": {
                            "schema": {
                                "fields": [
                                    {"name": col_name, "type": "VARCHAR"} 
                                    for col_name in node.get("columns", {}).keys()
                                ]
                            }
                        }
                    }
                ]
                
                # Add job facets
                job_facets = {
                    "dbt": {
                        "model": model_name,
                        "project": "my_project"
                    },
                    "sql": {
                        "query": node.get("raw_sql", "")
                    }
                }
                
                # Emit start event
                model_run_id = self.lineage_client.emit_start_event(
                    job_name=job_name,
                    job_namespace=job_namespace,
                    inputs=inputs,
                    outputs=outputs,
                    run_id=run_id,
                    job_facets=job_facets
                )
                
                # Store run ID for this model
                run_ids[model_name] = model_run_id
        
        return run_ids
    
    def complete_dbt_run(self,
                        run_ids: Dict[str, str],
                        job_namespace: str,
                        model_metrics: Optional[Dict[str, Dict[str, Any]]] = None) -> None:
        """Mark dbt models as completed
        
        Args:
            run_ids: Dictionary mapping model names to run IDs (from extract_lineage_from_manifest)
            job_namespace: Namespace for dbt jobs
            model_metrics: Optional dictionary mapping model names to metrics
        """
        # Mark each model as complete
        for model_name, run_id in run_ids.items():
            job_name = f"dbt_model_{model_name}"
            
            # Add metrics if available
            run_facets = {}
            if model_metrics and model_name in model_metrics:
                run_facets["dbtMetrics"] = model_metrics[model_name]
            
            # Emit complete event
            self.lineage_client.emit_complete_event(
                job_name=job_name,
                job_namespace=job_namespace,
                run_id=run_id,
                run_facets=run_facets
            )
