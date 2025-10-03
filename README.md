# Kawser Ferdous Safi - Personal Portfolio (Backend)

### Live Deployment Link

[https://devsafix-server.vercel.app](https://devsafix-server.vercel.app)  

---

## Project Overview & Features

This repository contains the **backend** for my personal portfolio, a **secure and robust RESTful API** built with **Node.js, Express, and Prisma**.

It powers the **Next.js frontend**, providing dynamic content and handling all **content management functionalities**, including **secure authentication for the portfolio owner**.

---

### Key Features Implemented

- **Secure JWT Authentication**  
  JSON Web Token-based authentication with `httpOnly` cookies for maximum security. Passwords are securely hashed with `bcrypt`.

- **Protected Routes**  
  All administrative endpoints (create, update, delete) are protected and require authentication.

- **Full CRUD API**  
  Endpoints for managing **Projects** and **Blogs**.

- **Singleton "About Me" Endpoint**  
  Special `POST /api/v1/about` upsert endpoint for managing a single "About Me" entry.

- **Data Normalization & Slug Generation**  
  Automatic normalization of tags (lowercase-hyphenated) and unique slug generation for blog posts.

- **Secure CORS Configuration**  
  Server accepts requests only from the specified frontend domain, preventing unauthorized access.

---

## Technology Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **ORM:** Prisma
- **Database:** PostgreSQL
- **Authentication:** JWT (`jsonwebtoken`), `bcrypt`
- **Deployment:** Vercel

---

## Local Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/devsafix/portfolio-backend.git
   cd portfolio-backend

   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Database**

   - Create a PostgreSQL database (using Supabase, Neon, or local instance).
   - Obtain the connection string.

4. **Create Environment File**
   Create a `.env` file in the root of the project and add:

   ```env
   DATABASE_URL="your_postgresql_connection_string"
   JWT_SECRET="your_super_secret_key_for_jwt"
   BCRYPT_SALT_ROUNDS=12
   FRONTEND_URL="http://localhost:3000"
   NODE_ENV=development
   ```

5. **Run Prisma Migrations**

   ```bash
   npx prisma migrate dev
   ```

6. **Run the Development Server**

   ```bash
   npm run dev
   ```

   The API will be available at:
   [http://localhost:5000](http://localhost:5000)

---

## Author

**Md Kawser Ferdous Safi**

Backend Developer | MERN Stack | API Security | Database Design
