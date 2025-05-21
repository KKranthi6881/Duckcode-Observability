from pydantic import BaseModel, Field
from typing import List, Dict, Optional, Any, Literal
from datetime import datetime
from enum import Enum

class NodeType(str, Enum):
    DATASET = "dataset"
    JOB = "job"

class EdgeType(str, Enum):
    INPUT = "input"
    OUTPUT = "output"

class LineageQueryParams(BaseModel):
    node_id: str
    depth: int = Field(1, ge=1, le=10, description="Depth of lineage graph to retrieve")
    include_datasets: bool = True
    include_jobs: bool = True

class LineageNodeInfo(BaseModel):
    id: str
    name: str
    description: Optional[str] = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    source: Optional[str] = None
    metadata: Optional[Dict[str, Any]] = None

class LineageNode(BaseModel):
    id: str
    name: str
    type: NodeType
    info: LineageNodeInfo

class LineageEdge(BaseModel):
    source: str
    target: str
    type: EdgeType
    run_id: Optional[str] = None
    metadata: Optional[Dict[str, Any]] = None

class LineageGraph(BaseModel):
    nodes: List[LineageNode]
    edges: List[LineageEdge]

class OpenLineageRunEvent(BaseModel):
    eventType: str
    eventTime: datetime
    producer: str
    run: Dict[str, Any]
    job: Dict[str, Any]
    inputs: Optional[List[Dict[str, Any]]] = []
    outputs: Optional[List[Dict[str, Any]]] = []
    schemaURL: Optional[str] = None
