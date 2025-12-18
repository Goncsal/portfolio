# SecureShare

Project Summary: SecureShare is a single-tenant secure file transfer web application demonstrating enterprise-level security practices, including E2EE, TLS 1.3, and Multi-Level Security (MLS).

## Overview

SecureShare is designed to demonstrate enterprise-level security practices. It was developed as part of an "Segurança de Informação nas Organizações" (Organizational Information Security) course.

## Key Features

### 🔐 Security Architecture
- **End-to-End Encryption (E2EE)**: Files are encrypted before transfer and can only be decrypted by authorized recipients.
- **TLS 1.3**: All communications use the latest TLS protocol for transport security.
- **Multi-Level Security (MLS)**: Implements the Bell-LaPadula security model with classification levels: TOP_SECRET, SECRET, CONFIDENTIAL, and UNCLASSIFIED.

### 👥 Access Control
- **Role-Based Access Control (RBAC)**: Multiple roles including Administrator, Security Officer, Trusted Officer, Auditor, and Standard User.
- **Compartmentalization**: Users belong to departments and can only access files within their clearance level and department.

### 📁 File Transfer Capabilities
- **Private Transfers**: Send encrypted files to specific recipients with MLS clearance enforcement.
- **Public Transfers**: Generate shareable links with encryption keys in URL fragments.
- **Access Control**: Only users with appropriate clearance and department can download files.

### 🔍 Audit & Compliance
- **Audit Logging**: Comprehensive logging of all system operations.
- **Auditor Role**: Review and validate log entries to ensure accountability and traceability.

## Technical Stack

- **Backend**: FastAPI (Python)
- **Database**: SQLite
- **Authentication**: Custom JWT-based system with RSA key signing
- **Password Security**: Bcrypt hashing with pepper
- **Deployment**: Docker & Docker Compose
- **CLI**: Command-line interface for all operations
