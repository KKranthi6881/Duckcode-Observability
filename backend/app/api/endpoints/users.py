from fastapi import APIRouter, Depends, HTTPException
from typing import List

from app.models.user import User, UserCreate, UserUpdate
from app.api.deps import get_current_user

router = APIRouter()

@router.get("/me", response_model=User)
async def get_current_user_info(
    current_user: User = Depends(get_current_user)
):
    """Get information about the current authenticated user"""
    return current_user

@router.put("/me", response_model=User)
async def update_user_info(
    user_update: UserUpdate,
    current_user: User = Depends(get_current_user)
):
    """Update current user information"""
    # This would typically update the user in your database
    # For this example, we're just returning a mock update
    updated_user = User(
        id=current_user.id,
        email=current_user.email,
        full_name=user_update.full_name or current_user.full_name,
        is_active=current_user.is_active
    )
    return updated_user
