# Integrations

Duckcode Observability supports integrations with various data sources through the OpenLineage client library. This document describes how to set up these integrations.

## Snowflake Integration

### Setup

```python
from duckcode_openlineage import DuckCodeLineageClient
from duckcode_openlineage.adapters import SnowflakeAdapter

# Initialize the client
client = DuckCodeLineageClient(
    api_url="http://localhost:8000/api/v1/lineage/events",
    api_key="your-api-key"
)

# Create Snowflake adapter
snowflake_adapter = SnowflakeAdapter(client)

# Capture lineage from a query
run_id = snowflake_adapter.capture_query(
    query="SELECT * FROM sales.transactions",
    job_namespace="snowflake_etl",
    job_name="daily_sales_summary",
    connection_params={
        "account": "your-account",
        "warehouse": "compute_wh",
        "database": "analytics",
        "schema": "sales"
    }
)

# Mark as complete
snowflake_adapter.complete_query(
    run_id=run_id,
    job_namespace="snowflake_etl",
    job_name="daily_sales_summary",
    metrics={
        "rows_processed": 1000,
        "execution_time": 5.2
    }
)
```

## Azure SQL Integration

### Setup

```python
from duckcode_openlineage import DuckCodeLineageClient
from duckcode_openlineage.adapters import AzureSqlAdapter

# Initialize the client
client = DuckCodeLineageClient(
    api_url="http://localhost:8000/api/v1/lineage/events",
    api_key="your-api-key"
)

# Create Azure SQL adapter
azure_sql_adapter = AzureSqlAdapter(client)

# Capture lineage from a query
run_id = azure_sql_adapter.capture_query(
    query="SELECT * FROM dbo.customers",
    job_namespace="azure_etl",
    job_name="customer_summary",
    connection_params={
        "server": "your-server.database.windows.net",
        "database": "customers_db"
    }
)

# Mark as complete
azure_sql_adapter.complete_query(
    run_id=run_id,
    job_namespace="azure_etl",
    job_name="customer_summary"
)
```

## MySQL Integration

### Setup

```python
from duckcode_openlineage import DuckCodeLineageClient
from duckcode_openlineage.adapters import MySqlAdapter

# Initialize the client
client = DuckCodeLineageClient(
    api_url="http://localhost:8000/api/v1/lineage/events",
    api_key="your-api-key"
)

# Create MySQL adapter
mysql_adapter = MySqlAdapter(client)

# Capture lineage from a query
run_id = mysql_adapter.capture_query(
    query="SELECT * FROM app.orders",
    job_namespace="mysql_etl",
    job_name="order_summary",
    connection_params={
        "host": "mysql.example.com",
        "database": "app"
    }
)

# Mark as complete
mysql_adapter.complete_query(
    run_id=run_id,
    job_namespace="mysql_etl",
    job_name="order_summary"
)
```

## dbt Integration

### Setup

```python
from duckcode_openlineage import DuckCodeLineageClient
from duckcode_openlineage.adapters import DbtAdapter

# Initialize the client
client = DuckCodeLineageClient(
    api_url="http://localhost:8000/api/v1/lineage/events",
    api_key="your-api-key"
)

# Create dbt adapter
dbt_adapter = DbtAdapter(client)

# Extract lineage from manifest
run_ids = dbt_adapter.extract_lineage_from_manifest(
    manifest_path="/path/to/manifest.json",
    job_namespace="dbt_models"
)

# Mark models as complete
dbt_adapter.complete_dbt_run(
    run_ids=run_ids,
    job_namespace="dbt_models",
    model_metrics={
        "customers": {
            "execution_time": 3.2,
            "rows_affected": 500
        }
    }
)
```
