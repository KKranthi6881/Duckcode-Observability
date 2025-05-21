import os
from typing import List
from pydantic import BaseSettings, AnyHttpUrl
from dotenv import load_dotenv

load_dotenv()

class Settings(BaseSettings):
    PROJECT_NAME: str = "Duckcode Observability"
    API_V1_STR: str = "/api/v1"
    
    # CORS configuration
    CORS_ORIGINS: List[AnyHttpUrl] = [
        "http://localhost:3000",  # React frontend
        "http://localhost:5173",  # Vite dev server
    ]
    
    # Supabase configuration
    SUPABASE_URL: str = os.getenv("SUPABASE_URL", "")
    SUPABASE_KEY: str = os.getenv("SUPABASE_KEY", "")
    SUPABASE_JWT_SECRET: str = os.getenv("SUPABASE_JWT_SECRET", "")
    
    # Database configuration
    DATABASE_URL: str = os.getenv("DATABASE_URL", "")
    
    # Security settings
    JWT_ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7  # 7 days

    class Config:
        case_sensitive = True

settings = Settings()
