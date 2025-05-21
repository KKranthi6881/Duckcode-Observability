from fastapi import APIRouter, Depends, HTTPException, Query
from typing import List, Optional

from app.models.catalog import Dataset, DatasetDetails, DatasetSearchParams
from app.services.catalog_service import CatalogService
from app.api.deps import get_current_user
from app.models.user import User

router = APIRouter()
catalog_service = CatalogService()

@router.get("/datasets", response_model=List[Dataset])
async def search_datasets(
    params: DatasetSearchParams = Depends(),
    current_user: User = Depends(get_current_user)
):
    """Search for datasets in the catalog"""
    try:
        return await catalog_service.search_datasets(
            query=params.query,
            source=params.source,
            owner=params.owner,
            tags=params.tags,
            limit=params.limit,
            offset=params.offset
        )
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.get("/datasets/{dataset_id}", response_model=DatasetDetails)
async def get_dataset_details(
    dataset_id: str,
    current_user: User = Depends(get_current_user)
):
    """Get detailed information about a dataset"""
    try:
        return await catalog_service.get_dataset_details(dataset_id)
    except Exception as e:
        raise HTTPException(status_code=404, detail=f"Dataset not found: {str(e)}")

@router.post("/datasets")
async def create_dataset(
    dataset: DatasetDetails,
    current_user: User = Depends(get_current_user)
):
    """Create or update a dataset in the catalog"""
    try:
        return await catalog_service.create_or_update_dataset(dataset)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
