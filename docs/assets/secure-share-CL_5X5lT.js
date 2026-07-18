const e=`# SecureShare\r
\r
Project Summary: SecureShare is a single-tenant secure file transfer web application demonstrating enterprise-level security practices, including E2EE, TLS 1.3, and Multi-Level Security (MLS).\r
Year: 2025\r
Tech: FastAPI, Cryptography, JWT, RSA, Docker\r
\r
## Overview\r
\r
SecureShare is designed to demonstrate enterprise-level security practices. It was developed as part of an "Segurança de Informação nas Organizações" (Organizational Information Security) course.\r
\r
## Key Features\r
\r
### Security Architecture\r
- **End-to-End Encryption (E2EE)**: Files are encrypted before transfer and can only be decrypted by authorized recipients.\r
- **TLS 1.3**: All communications use the latest TLS protocol for transport security.\r
- **Multi-Level Security (MLS)**: Implements the Bell-LaPadula security model with classification levels: TOP_SECRET, SECRET, CONFIDENTIAL, and UNCLASSIFIED.\r
\r
### Access Control\r
- **Role-Based Access Control (RBAC)**: Multiple roles including Administrator, Security Officer, Trusted Officer, Auditor, and Standard User.\r
- **Compartmentalization**: Users belong to departments and can only access files within their clearance level and department.\r
\r
### File Transfer Capabilities\r
- **Private Transfers**: Send encrypted files to specific recipients with MLS clearance enforcement.\r
- **Public Transfers**: Generate shareable links with encryption keys in URL fragments.\r
- **Access Control**: Only users with appropriate clearance and department can download files.\r
\r
### Audit & Compliance\r
- **Audit Logging**: Comprehensive logging of all system operations.\r
- **Auditor Role**: Review and validate log entries to ensure accountability and traceability.\r
\r
## Technical Stack\r
\r
- **Backend**: FastAPI (Python)\r
- **Database**: SQLite\r
- **Authentication**: Custom JWT-based system with RSA key signing\r
- **Password Security**: Bcrypt hashing with pepper\r
- **Deployment**: Docker & Docker Compose\r
- **CLI**: Command-line interface for all operations\r
`;export{e as default};
