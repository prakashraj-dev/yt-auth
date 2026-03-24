# yt-auth

A complete backend authentication system built with Node.js, Express, and MongoDB.

## Features
- User Registration with Email OTP Verification
- JWT Authentication (Access Token + Refresh Token)
- Session Management (single & all devices logout)
- Google OAuth2 Email Service (Nodemailer)
- Secure password & token hashing (SHA-256)
- Rate limiting & protected routes

## Tech Stack
- Node.js + Express
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- Nodemailer + Google OAuth2
- Cookie-based refresh tokens

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register new user |
| GET | /api/auth/verify-email | Verify email with OTP |
| POST | /api/auth/login | Login user |
| GET | /api/auth/get-me | Get current user |
| GET | /api/auth/refresh-token | Refresh access token |
| GET | /api/auth/logout | Logout current device |
| GET | /api/auth/logout-all | Logout all devices |

## Setup

1. Clone the repo
```bash
   git clone https://github.com/YOUR_USERNAME/yt-auth.git
   cd yt-auth
```

2. Install dependencies
```bash
   npm install
```

3. Create `.env` file
```env
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   GOOGLE_REFRESH_TOKEN=your_refresh_token
   GOOGLE_USER=your_gmail@gmail.com
```

4. Run the project
```bash
   npm run dev
```
