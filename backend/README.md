# Shopping List Backend


1. Copy `.env.example` to `.env` and fill values.
2. `npm install`
3. `npm run dev` (requires nodemon) or `npm start`


API endpoints:
- POST `/api/auth/signup` {name,email,password}
- POST `/api/auth/login` {email,password} -> returns token
- GET `/api/items` (Authorization: Bearer <token>)
- POST `/api/items` {name,quantity,notes}
- PUT `/api/items/:id` {name,quantity,notes,purchased}
- DELETE `/api/items/:id`

