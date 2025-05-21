# Duckcode Observability OpenLineage Client

This module contains the OpenLineage client integration for the Duckcode Observability platform. It provides:

1. A client library to emit OpenLineage events from various data sources
2. Adapters for specific systems (Snowflake, MySQL, Azure SQL, dbt)
3. Utilities for processing and transforming lineage metadata

## Installation

```bash
pip install -e .
```

## Usage

```python
from duckcode_openlineage import DuckCodeLineageClient

# Initialize the client
client = DuckCodeLineageClient(api_url="http://localhost:8000/api/v1/lineage/events")

# Create and emit a simple event
client.emit_start_event(
    job_name="my_etl_job",
    job_namespace="my_namespace",
    inputs=[{"namespace": "my_source", "name": "input_table"}],
    outputs=[{"namespace": "my_target", "name": "output_table"}]
)
```
