# EventX - College Event Management System

## Tech Stack
- **Frontend**: React (Vite), Material UI, Tailwind CSS
- **Backend**: Node.js, Express, Prisma (MongoDB)
- **Auth**: JWT + Email OTP

## Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB Database URL (Cloud or Local)
- Cloudinary Account (Optional, for image uploads)

### Backend Setup
1. Navigate to `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure `.env`:
   - Rename `.env.example` to `.env` (or create one).
   - Update `DATABASE_URL` with your MongoDB connection string.
   - Update `EMAIL_USER` and `EMAIL_PASS` for OTP emails.
   - Update `CLOUDINARY_*` vars for image uploads.
4. Generate Prisma Client:
   ```bash
   npx prisma generate
   ```
5. Run Seed (Optional):
   ```bash
   npx prisma db seed
   ```
6. Start Server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start Dev Server:
   ```bash
   npm run dev
   ```

## Features Implemented
- **Authentication**: Login with Email OTP. Auto-creates user if not exists.
- **Role Management**: Student, Organizer, Admin.
- **Event Management**: Create events (Organizer), View events (All), Register (Student).
- **Team Management**: Create teams, Join teams via code.
- **Analytics**: Dashboard with charts for Organizers (Registrations, Feedback) and Students (Attendance).
- **Clash Detection**: Warns if venue/time conflicts.
- **Responsive UI**: Built with MUI and Tailwind.

## Notes
- The email service mocks sending emails by logging to the console if `EMAIL_USER` is `test@example.com`. Check the backend terminal for OTPs.
- Image upload mocks Cloudinary if credentials are missing.
