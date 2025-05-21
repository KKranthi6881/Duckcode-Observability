from datetime import datetime, timedelta
from typing import Any, Optional

from jose import jwt
from app.core.config import settings

def create_access_token(subject: Any, expires_delta: Optional[timedelta] = None) -> str:
    """Create a JWT access token for a user"""
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    
    to_encode = {"exp": expire, "sub": str(subject)}
    encoded_jwt = jwt.encode(to_encode, settings.SUPABASE_JWT_SECRET, algorithm=settings.JWT_ALGORITHM)
    return encoded_jwt

def verify_token(token: str) -> dict:
    """Verify a JWT token and return its payload"""
    return jwt.decode(token, settings.SUPABASE_JWT_SECRET, algorithms=[settings.JWT_ALGORITHM])
