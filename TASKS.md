# 🚴‍♂️ 2Ride Project Tasks

Epic adventures on 2 wheels 🚴‍♀️

---

## 🧩 Task 1: Landing Page (UI/UX Polish)

### 🎨 Frontend
- Improve hero section (background image, overlay, CTA buttons)
- Make navbar sticky + responsive
- Add smooth scrolling between sections
- Improve spacing, typography, and responsiveness
- Add animations (hover effects, transitions)

### ⚙️ Backend
- No backend work required

---

## 🧩 Task 2: Events Listing

### 🎨 Frontend
- Fetch events from API
- Display events in cards (title, date, image)
- Add loading and empty states
- Add responsive grid layout

### ⚙️ Backend
- Create `GET /api/events`
- Return list of events
- Structure event data (id, title, date, image)

---

## 🧩 Task 3: Event Details Page

### 🎨 Frontend
- Create dynamic route `/events/[id]`
- Display full event details
- Show images, description, price, location
- Add “Book Now” button

### ⚙️ Backend
- Create `GET /api/events/:id`
- Return single event details

---

## 🧩 Task 4: Booking System

### 🎨 Frontend
- Create booking form (name, phone, email)
- Connect form to backend
- Add success/error states
- Validate inputs

### ⚙️ Backend
- Create `POST /api/bookings`
- Save booking data
- Validate request data

---

## 🧩 Task 5: Newsletter Subscription

### 🎨 Frontend
- Add email input field
- Submit email to backend
- Show success message

### ⚙️ Backend
- Create `POST /api/newsletter`
- Save email to database

---

## 🧩 Task 6: Admin Dashboard (Events Management)

### 🎨 Frontend
- Create admin dashboard UI
- Add form to create/edit events
- Display list of events
- Add edit + delete actions

### ⚙️ Backend
- Create:
  - `POST /api/events`
  - `PUT /api/events/:id`
  - `DELETE /api/events/:id`
- Add validation
- Connect to database

---

## 🧩 Task 7: Payments Integration (M-Pesa / Stripe)

### 🎨 Frontend
- Add payment button to booking flow
- Show payment status (pending, success, failed)

### ⚙️ Backend
- Integrate M-Pesa or Stripe API
- Create payment endpoint
- Handle payment callbacks/webhooks
- Link payment to booking

---

## 🧩 Task 8: Authentication (Admin Only)

### 🎨 Frontend
- Create login page
- Protect admin routes
- Store auth state

### ⚙️ Backend
- Create auth endpoints (login/logout)
- Handle JWT/session
- Protect admin routes

---

## 🧩 Task 9: Image Uploads (Events)

### 🎨 Frontend
- Add image upload in event form
- Preview uploaded image

### ⚙️ Backend
- Handle file uploads
- Store images (cloud/local)
- Return image URLs

---

## 🧩 Task 10: Deployment

### 🎨 Frontend
- Deploy Next.js app (Vercel recommended)
- Set environment variables

### ⚙️ Backend
- Deploy API (Render / Railway / VPS)
- Configure production environment

---

## 🚀 Future Improvements

### 🎨 Frontend
- Add gallery section (from Instagram)
- Add testimonials
- Add map for event locations

### ⚙️ Backend
- Add analytics (bookings, users)
- Add email notifications
- Add rate limiting & security

---

## 🧠 Notes

- Keep frontend and backend responsibilities separate
- Use consistent API response format
- Communicate API changes before implementation