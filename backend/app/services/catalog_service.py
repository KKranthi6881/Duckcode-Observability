from typing import List, Optional, Dict, Any
from datetime import datetime

from app.models.catalog import Dataset, DatasetDetails, SourceType, DatasetField

class CatalogService:
    """Service for managing the data catalog"""
    
    async def search_datasets(self,
                             query: Optional[str] = None,
                             source: Optional[SourceType] = None,
                             owner: Optional[str] = None,
                             tags: Optional[List[str]] = None,
                             limit: int = 10,
                             offset: int = 0) -> List[Dataset]:
        """Search for datasets in the catalog"""
        # In a real implementation, this would query your database
        # This is a simplified example that returns mock data
        
        # Mock datasets
        datasets = [
            Dataset(
                id="dataset-123",
                name="sales_data",
                namespace="analytics",
                source=SourceType.SNOWFLAKE,
                description="Daily sales data",
                created_at=datetime.utcnow(),
                updated_at=datetime.utcnow(),
                tags=["sales", "daily"]
            ),
            Dataset(
                id="dataset-456",
                name="customer_info",
                namespace="customers",
                source=SourceType.MYSQL,
                description="Customer information",
                created_at=datetime.utcnow(),
                updated_at=datetime.utcnow(),
                tags=["customers", "pii"]
            ),
            Dataset(
                id="dataset-789",
                name="product_inventory",
                namespace="products",
                source=SourceType.AZURE_SQL,
                description="Product inventory data",
                created_at=datetime.utcnow(),
                updated_at=datetime.utcnow(),
                tags=["products", "inventory"]
            )
        ]
        
        # Apply filters
        filtered_datasets = datasets
        
        if query:
            filtered_datasets = [d for d in filtered_datasets if 
                               query.lower() in d.name.lower() or 
                               (d.description and query.lower() in d.description.lower())]
        
        if source:
            filtered_datasets = [d for d in filtered_datasets if d.source == source]
        
        if owner:
            # In this mock, we don't have owners in the Dataset model, so this filter is a no-op
            pass
        
        if tags:
            filtered_datasets = [d for d in filtered_datasets if 
                               any(tag in (d.tags or []) for tag in tags)]
        
        # Apply pagination
        return filtered_datasets[offset:offset+limit]
    
    async def get_dataset_details(self, dataset_id: str) -> DatasetDetails:
        """Get detailed information about a dataset"""
        # In a real implementation, this would query your database
        # This is a simplified example that returns mock data
        
        # Mock data for a Snowflake dataset
        if dataset_id == "dataset-123":
            return DatasetDetails(
                id="dataset-123",
                name="sales_data",
                namespace="analytics",
                source=SourceType.SNOWFLAKE,
                description="Daily sales data",
                created_at=datetime.utcnow(),
                updated_at=datetime.utcnow(),
                tags=["sales", "daily"],
                physical_name="ANALYTICS.PUBLIC.SALES_DATA",
                schema={
                    "type": "struct",
                    "fields": [
                        {"name": "sale_id", "type": "string"},
                        {"name": "product_id", "type": "string"},
                        {"name": "quantity", "type": "integer"},
                        {"name": "price", "type": "decimal(10,2)"},
                        {"name": "sale_date", "type": "timestamp"}
                    ]
                },
                fields=[
                    DatasetField(
                        name="sale_id",
                        type="string",
                        description="Unique identifier for the sale"
                    ),
                    DatasetField(
                        name="product_id",
                        type="string",
                        description="Identifier for the product sold"
                    ),
                    DatasetField(
                        name="quantity",
                        type="integer",
                        description="Quantity of the product sold"
                    ),
                    DatasetField(
                        name="price",
                        type="decimal(10,2)",
                        description="Price of the product"
                    ),
                    DatasetField(
                        name="sale_date",
                        type="timestamp",
                        description="Date and time of the sale"
                    )
                ],
                owner="data_team",
                facets={
                    "documentation": {
                        "description": "This dataset contains the daily sales data for all products."
                    },
                    "dataQuality": {
                        "tests": ["not_null", "unique"],
                        "score": 0.95
                    }
                }
            )
        # Mock data for a MySQL dataset
        elif dataset_id == "dataset-456":
            return DatasetDetails(
                id="dataset-456",
                name="customer_info",
                namespace="customers",
                source=SourceType.MYSQL,
                description="Customer information",
                created_at=datetime.utcnow(),
                updated_at=datetime.utcnow(),
                tags=["customers", "pii"],
                physical_name="customers.customer_info",
                schema={
                    "type": "struct",
                    "fields": [
                        {"name": "customer_id", "type": "string"},
                        {"name": "name", "type": "string"},
                        {"name": "email", "type": "string"},
                        {"name": "signup_date", "type": "timestamp"}
                    ]
                },
                fields=[
                    DatasetField(
                        name="customer_id",
                        type="string",
                        description="Unique identifier for the customer"
                    ),
                    DatasetField(
                        name="name",
                        type="string",
                        description="Customer's full name",
                        tags=["pii"]
                    ),
                    DatasetField(
                        name="email",
                        type="string",
                        description="Customer's email address",
                        tags=["pii"]
                    ),
                    DatasetField(
                        name="signup_date",
                        type="timestamp",
                        description="Date when the customer signed up"
                    )
                ],
                owner="customer_team",
                facets={
                    "documentation": {
                        "description": "This dataset contains customer information including PII data."
                    },
                    "dataQuality": {
                        "tests": ["not_null", "unique", "email_format"],
                        "score": 0.98
                    }
                }
            )
        # Mock data for an Azure SQL dataset
        elif dataset_id == "dataset-789":
            return DatasetDetails(
                id="dataset-789",
                name="product_inventory",
                namespace="products",
                source=SourceType.AZURE_SQL,
                description="Product inventory data",
                created_at=datetime.utcnow(),
                updated_at=datetime.utcnow(),
                tags=["products", "inventory"],
                physical_name="dbo.product_inventory",
                schema={
                    "type": "struct",
                    "fields": [
                        {"name": "product_id", "type": "string"},
                        {"name": "name", "type": "string"},
                        {"name": "category", "type": "string"},
                        {"name": "stock_quantity", "type": "integer"},
                        {"name": "last_updated", "type": "timestamp"}
                    ]
                },
                fields=[
                    DatasetField(
                        name="product_id",
                        type="string",
                        description="Unique identifier for the product"
                    ),
                    DatasetField(
                        name="name",
                        type="string",
                        description="Product name"
                    ),
                    DatasetField(
                        name="category",
                        type="string",
                        description="Product category"
                    ),
                    DatasetField(
                        name="stock_quantity",
                        type="integer",
                        description="Current stock quantity"
                    ),
                    DatasetField(
                        name="last_updated",
                        type="timestamp",
                        description="Last time the inventory was updated"
                    )
                ],
                owner="product_team",
                facets={
                    "documentation": {
                        "description": "This dataset contains the current inventory for all products."
                    },
                    "dataQuality": {
                        "tests": ["not_null", "positive_values"],
                        "score": 0.92
                    }
                }
            )
        else:
            raise Exception(f"Dataset not found with ID: {dataset_id}")
    
    async def create_or_update_dataset(self, dataset: DatasetDetails) -> DatasetDetails:
        """Create or update a dataset in the catalog"""
        # In a real implementation, this would save to your database
        # This is a simplified example that just returns the input
        
        # Pretend we saved it and return with an ID
        if not dataset.id:
            dataset.id = f"dataset-{datetime.utcnow().timestamp()}"
        
        # Update timestamps
        dataset.updated_at = datetime.utcnow()
        if not dataset.created_at:
            dataset.created_at = dataset.updated_at
        
        return dataset
