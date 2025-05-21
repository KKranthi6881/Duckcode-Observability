from pydantic import BaseModel, Field
from typing import List, Dict, Optional, Any
from datetime import datetime
from enum import Enum

class SourceType(str, Enum):
    SNOWFLAKE = "snowflake"
    MYSQL = "mysql"
    AZURE_SQL = "azure_sql"
    POSTGRESQL = "postgresql"
    DBT = "dbt"
    SPARK = "spark"
    AIRFLOW = "airflow"
    CUSTOM = "custom"

class DatasetField(BaseModel):
    name: str
    type: str
    description: Optional[str] = None
    tags: Optional[List[str]] = None
    metadata: Optional[Dict[str, Any]] = None

class Dataset(BaseModel):
    id: str
    name: str
    namespace: Optional[str] = None
    source: SourceType
    description: Optional[str] = None
    created_at: datetime
    updated_at: datetime
    tags: Optional[List[str]] = None

class DatasetDetails(Dataset):
    physical_name: Optional[str] = None
    schema: Optional[Dict[str, Any]] = None
    fields: Optional[List[DatasetField]] = None
    owner: Optional[str] = None
    facets: Optional[Dict[str, Any]] = None

class DatasetSearchParams(BaseModel):
    query: Optional[str] = None
    source: Optional[SourceType] = None
    owner: Optional[str] = None
    tags: Optional[List[str]] = None
    limit: int = Field(10, ge=1, le=100)
    offset: int = Field(0, ge=0)
