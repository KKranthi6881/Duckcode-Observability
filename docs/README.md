# Duckcode Observability Documentation

## Overview

Duckcode Observability is a commercial-grade data observability platform that leverages OpenLineage for comprehensive data lineage, observability, and data catalog features.

## Architecture

### Components

1. **Frontend** - React application for data visualization and user interaction
2. **Backend** - FastAPI service exposing REST endpoints for data lineage and catalog operations
3. **OpenLineage Client** - Library for collecting and processing lineage events from various data sources
4. **Supabase Integration** - Authentication, storage, and user management

### Data Flow

1. Data sources (Snowflake, Azure SQL, MySQL, dbt) emit lineage events using the OpenLineage client
2. The backend API receives and processes these events
3. The events are stored in the database with proper relationship modeling
4. The frontend visualizes this data for users

## Getting Started

See the main [README.md](../README.md) for setup instructions.

## API Reference

When running locally, the API documentation is available at http://localhost:8080.

## Integrations

### Supported Data Sources

- Snowflake
- Azure SQL
- MySQL
- dbt
- Additional sources via the OpenLineage specification

## Deployment

Deployment instructions are available in the [infrastructure](../infrastructure/README.md) directory.
