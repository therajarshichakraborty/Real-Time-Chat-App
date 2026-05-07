# Real-Time Chat Application

A scalable, production-grade real-time chat backend built with modern technologies and enterprise architecture patterns.

Designed for high-performance realtime communication, secure authentication, modular scalability, and maintainable code organization.

---

# Tech Stack

* Bun Runtime
* TypeScript
* Express.js
* Socket.IO
* MongoDB
* Mongoose
* Winston Logger
* Zod Validation
* ESLint
* Prettier

---

# Features

* Real-time messaging
* JWT authentication
* Access & refresh tokens
* Modular feature-based architecture
* Socket.IO event handling
* MongoDB integration
* Centralized error handling
* Structured API responses
* Request logging
* Environment validation
* Production-grade middleware setup
* ESLint + Prettier configuration
* Type-safe backend architecture
* Scalable service layer
* Secure configuration management

---

# Project Structure

```text
src/
├── common/
│   ├── config/
│   ├── errors/
│   ├── middleware/
│   ├── utils/
│   ├── constants/
│   └── types/
│
├── modules/
│   ├── auth/
│   ├── user/
│   ├── chat/
│   ├── message/
│   └── notification/
│
├── socket/
│
├── app.ts
└── server.ts
```

---

# Environment Variables

Create a `.env` file in the root directory.

```env
PORT=4000

NODE_ENV=development

MONGODB_URI=mongodb://localhost:27017/chat-app

JWT_ACCESS_SECRET=your_access_secret

JWT_ACCESS_EXPIRES_IN=15m

JWT_REFRESH_SECRET=your_refresh_secret

JWT_REFRESH_EXPIRES_IN=7d

CLIENT_URL=http://localhost:3000
```

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project directory:

```bash
cd server
```

Install dependencies:

```bash
bun install
```

---

# Development

Run the development server:

```bash
bun run dev
```

---

# Build

```bash
bun run build
```

---

# Production

```bash
bun run start
```

---

# Linting

Run ESLint:

```bash
bun run lint
```

Fix lint issues:

```bash
bun run lint:fix
```

---

# Formatting

Format code:

```bash
bun run format
```

Check formatting:

```bash
bun run format:check
```

---

# API Architecture

The backend follows a layered architecture:

* Controllers → handle requests/responses
* Services → business logic
* Models → database operations
* Middleware → reusable request handlers
* Validators → schema validation
* Utils → reusable helpers
* Socket Handlers → realtime communication

---

# Logging

The application uses Winston for structured logging.

Features:

* Colored console logs
* Error logging
* Request logging
* File transports
* Production-ready log formatting

---

# Environment Validation

Environment variables are validated using Zod before the application starts.

Invalid configuration immediately stops the server to prevent unsafe deployments.

---

# Error Handling

Centralized error handling using custom `ApiError` and global error middleware.

Standardized error responses:

```json
{
  "success": false,
  "message": "Unauthorized"
}
```

---

# API Response Structure

All successful responses follow a consistent structure:

```json
{
  "success": true,
  "message": "Data fetched successfully",
  "data": {}
}
```

---

# Security

Recommended production middleware:

* Helmet
* CORS
* Compression
* Rate limiting

---

# Realtime Features

* Instant messaging
* Socket rooms
* Typing indicators
* Presence tracking
* Online/offline status
* Message broadcasting
* Event-based architecture

---

# Recommended Future Improvements

* Redis adapter for Socket.IO
* Docker support
* CI/CD pipeline
* Kubernetes deployment
* Swagger/OpenAPI documentation
* Unit and integration testing
* Message queue integration
* Media upload support
* End-to-end encryption

---

# Code Quality

This project follows:

* strict TypeScript practices
* modular architecture
* centralized configuration
* reusable utilities
* consistent formatting
* production-ready conventions

---

# License

This project is licensed under the MIT License.
