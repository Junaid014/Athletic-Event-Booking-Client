🏆 AthleticHub – Sports Event Booking & Posting Platform AthleticHub is a modern, responsive web application built to simplify sports event management. Whether you're organizing or participating in events like swimming, running, or long jump — AthleticHub lets users post, browse, apply, and manage sports events effortlessly.

🔗 Live Demo: https://athletic-event.web.app/

📌 Project Purpose AthleticHub aims to connect event organizers with sports enthusiasts by providing:

🎯 Simple event creation and management

👥 Easy participation with one-click "Apply"

🔍 Event filtering and live search

📊 Real-time participation tracking

🔒 JWT-secured user actions

✨ Key Features 🎬 Animated Landing Page using Lottie Files

🧭 Client-side routing via React Router

📅 Post and apply to sports events like Swimming, Sprinting, Long Jump, etc.

🧾 "My Events" and "Applied Events" dashboards

🔐 JWT Authentication with route protection

🌐 Fully responsive UI built with Tailwind CSS + DaisyUI

🛎️ Interactive UX with Toastify and SweetAlert2

📈 CountUp animations and sliders for stats display

🎡 Multiple animation and slider libraries (Swiper, Keen Slider, etc.)

🧰 Tech Stack & Tools Package/Tool Purpose React UI framework React Router Routing and navigation Firebase Authentication & hosting Express.js Backend server MongoDB NoSQL database JWT Authentication and route protection Tailwind CSS Utility-first CSS styling DaisyUI Prebuilt Tailwind component library Lottie React / Lottie Player Animated SVG illustrations React Toastify Toast notification system SweetAlert2 Elegant modals Swiper / React Slick / Keen Slider Sliders & carousels React CountUp Animated counters React Type Animation Typewriter animation React Datepicker Date selection in forms

🗂️ Folder Structure

src/ ├── assets/ # Static files (images, icons, animations) ├── components/ # Reusable UI components ├── pages/ # Route-based pages (Home, Login, BrowseEvents, etc.) ├── Layouts/ # Shared UI layout like Navbar and Footer ├── Provider/ # Context providers (e.g., AuthProvider) ├── routes/ # Routing configuration ├── App.jsx # Root App component └── main.jsx # Application entry point

🚀 Run Locally

Clone the Repository bash Copy Edit git clone https://github.com/yourusername/athletichub.git cd athletichub
Install Dependencies bash Copy Edit npm install
Add Environment Variables Create a .env file in the root directory with your Firebase and backend URLs:
makefile Copy Edit VITE_API_URL=https://your-backend-url.com VITE_FIREBASE_API_KEY=your-api-key ... 4. Start the Development Server bash Copy Edit npm run dev 🔐 Authentication Users sign in via Firebase Auth

Auth tokens are sent with requests to Express backend

Backend uses JWT verification middleware to protect routes

🌍 Live Demo Check out the live version of the app here:

🔗 https://athletic-event.web.app
