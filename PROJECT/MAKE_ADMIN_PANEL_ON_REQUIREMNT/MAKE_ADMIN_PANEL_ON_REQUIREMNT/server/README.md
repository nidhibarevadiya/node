# Server (Express + MongoDB)

Copy .env.example to .env and set MONGODB_URI and JWT_SECRET.
Then:
npm install
npm start

Endpoints:
POST /api/auth/register  { name, email, password, role } // create user
POST /api/auth/login     { email, password } -> { token, role }
GET  /api/admin/users    (requires Authorization: Bearer <token>, role=admin)
