from fastapi import APIRouter
from datetime import datetime

router = APIRouter()

@router.get("/")
async def health_check():
    """Basic health check endpoint"""
    return {
        "status": "healthy",
        "timestamp": datetime.utcnow().isoformat(),
        "version": "0.1.0"
    }

@router.get("/openlineage")
async def openlineage_status():
    """Check OpenLineage client status"""
    # This would typically check the connection to OpenLineage
    # For this example, we're just returning a mock status
    return {
        "status": "connected",
        "version": "1.8.0",
        "timestamp": datetime.utcnow().isoformat()
    }
