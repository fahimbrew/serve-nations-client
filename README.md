# Service Nations - Service Sharing Platform 🛠️🤝

Welcome to **Service Nations**, a full-featured service-sharing platform where users can offer, discover, and book services. Whether you're a tutor, designer, developer, or any kind of service provider — Service Nations connects you to those who need your skills.

🔗 **Live Website:** [https://glowing-cuchufli-a872de.netlify.app](https://glowing-cuchufli-a872de.netlify.app)

---

## 🚀 Features

- 🔐 **Authentication**

  - Firebase Authentication for secure login/signup.
  - Private routes for authenticated users only.

- ➕ **Add Services**

  - Authenticated users can add their services with detailed info and image URL.

- 🔧 **Manage Services**

  - View, edit, and delete your own services.
  - Update via modal or separate route.
  - Confirmation prompts before deletion.
  - Uses `react-hot-toast` for notifications.

- 📄 **Single Service Details**

  - Private route at `/services/:id`.
  - View full service details and book a service.

- 📆 **Book Services**

  - Users can book services with prefilled forms.
  - Booking stored with default status `pending`.

- 📋 **Service To-Do Page**
  - Shows bookings where the logged-in user is the **service provider**.
  - Dropdown to update booking status: `pending`, `working`, `completed`.

---

## 🛠️ Technologies Used

### Frontend

- **React** (Vite)
- **React Router DOM** – for routing
- **Tailwind CSS** + **DaisyUI** – for UI design
- **Firebase Authentication** – for user auth
- **Axios** – for API calls
- **React Hot Toast** – for notifications

### Backend

- **Node.js** + **Express.js**
- **MongoDB** – for database
- **CORS**, **dotenv**, **body-parser**

---
