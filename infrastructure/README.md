# Duckcode Observability Infrastructure

This directory contains the infrastructure code for deploying the Duckcode Observability platform.

## Local Development with Docker Compose

The `docker-compose.yml` file provides a local development environment with all required services:

- Frontend (React)
- Backend (FastAPI)
- PostgreSQL database
- API Documentation

### Prerequisites

- Docker and Docker Compose
- Supabase account (for auth and storage)

### Environment Variables

Create a `.env` file in the `infrastructure` directory with the following variables:

```
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_KEY=your-supabase-service-key
SUPABASE_JWT_SECRET=your-supabase-jwt-secret
DATABASE_URL=postgresql://postgres:postgres@postgres:5432/duckcode
```

### Running Locally

```bash
cd infrastructure
docker-compose up -d
```

Access the services at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000/api/v1
- API Documentation: http://localhost:8080
