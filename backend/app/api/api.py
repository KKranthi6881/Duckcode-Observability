from fastapi import APIRouter

from app.api.endpoints import lineage, catalog, users, health

api_router = APIRouter()

# Add all endpoints
api_router.include_router(lineage.router, prefix="/lineage", tags=["lineage"])
api_router.include_router(catalog.router, prefix="/catalog", tags=["catalog"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(health.router, prefix="/health", tags=["health"])
