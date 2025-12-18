# ClassManager

Project Summary: ClassManager is a production-ready application template demonstrating best practices for scalable fullstack web applications with React 19, FastAPI, and Docker.

[Live Website](https://classmanager.aettua.pt/)

## Overview

ClassManager is an educational template designed to demonstrate production-grade fullstack application architecture. It provides a starting point for building scalable web applications with a clear separation between frontend, backend, and deployment layers.

## Architecture

The application follows a robust three-tier architecture:

- **Frontend (`/web`)**: React 19 application with TypeScript.
- **Backend (`/api`)**: FastAPI-based REST API with Python.
- **Database**: PostgreSQL for reliable data persistence.
- **Deployment**: Docker Compose with Nginx as a reverse proxy.

## Key Features

- **Type Safety**: End-to-end type safety with TypeScript and Python type hints.
- **Fast Development**: Hot Module Replacement (HMR) for a smooth developer experience.
- **API Documentation**: Automatic documentation with Swagger UI.
- **Security**: Nginx reverse proxy with security headers and CORS configuration.
- **Production Ready**: Comprehensive Docker setup, rate limiting, and request buffering.
- **Modern UI**: Styled with Tailwind CSS v4 and Radix UI components.

## Tech Stack

### Backend
- **FastAPI**: Modern Python web framework.
- **Django/DRF**: RESTful API toolkit.
- **SQLModel**: Type-safe SQL database interactions.
- **PostgreSQL**: Relational database.
- **UV**: Fast Python package manager.

### Frontend
- **React 19**: Latest version with modern hooks.
- **Vite**: Next-generation build tool.
- **TanStack Query & Table**: Data synchronization and headless table components.
- **Tailwind CSS v4**: Utility-first styling.
- **Radix UI**: Accessible, unstyled components.

### Infrastructure
- **Docker & Docker Compose**: Containerization and orchestration.
- **Nginx**: Reverse proxy and static file server.

## Purpose

This project serves as a comprehensive guide for:
- Implementing production-grade fullstack architecture.
- Following best practices for API development and frontend design.
- Learning modern development workflows with Docker and hot reload.
