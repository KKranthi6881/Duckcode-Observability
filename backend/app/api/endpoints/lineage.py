from fastapi import APIRouter, Depends, HTTPException
from typing import List, Optional

from app.models.lineage import LineageNode, LineageGraph, LineageQueryParams
from app.services.lineage_service import LineageService
from app.api.deps import get_current_user
from app.models.user import User

router = APIRouter()
lineage_service = LineageService()

@router.get("/graph", response_model=LineageGraph)
async def get_lineage_graph(
    params: LineageQueryParams = Depends(),
    current_user: User = Depends(get_current_user)
):
    """Get a lineage graph for a dataset or job"""
    try:
        return await lineage_service.get_lineage_graph(
            node_id=params.node_id,
            depth=params.depth,
            include_datasets=params.include_datasets,
            include_jobs=params.include_jobs
        )
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.get("/node/{node_id}", response_model=LineageNode)
async def get_lineage_node(
    node_id: str,
    current_user: User = Depends(get_current_user)
):
    """Get details for a specific lineage node"""
    try:
        return await lineage_service.get_node_details(node_id)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/events")
async def receive_lineage_event(
    event: dict,
    current_user: User = Depends(get_current_user)
):
    """Receive and process an OpenLineage event"""
    try:
        await lineage_service.process_event(event)
        return {"status": "success", "message": "Event processed successfully"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
