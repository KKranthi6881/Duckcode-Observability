# Duckcode Observability Backend

Python FastAPI backend for the Duckcode Observability platform.

## Tech Stack

- Python 3.9+
- FastAPI for API endpoints
- SQLAlchemy for database ORM
- Supabase for authentication
- Pydantic for data validation
- OpenLineage for lineage integration

## Development

```bash
# Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run development server
uvicorn app.main:app --reload
```

## Environment Variables

Create a `.env` file with the following variables:

```
SUPABASE_URL=your-supabase-url
SUPABASE_KEY=your-supabase-key
SUPABASE_JWT_SECRET=your-jwt-secret
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/duckcode
```
