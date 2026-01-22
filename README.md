# 🛒 MiniMart - Premium Product Catalog

MiniMart is a high-end, modern E-commerce application designed with a **premium glassmorphic aesthetic**. It provides a seamless shopping experience with real-time authentication, dynamic titles, and a robust product management system.

## 🔗 Project Links
- **Live Site**: [Live Link Placeholder](https://mini-mart-client-eight.vercel.app)


## 🔑 Login Credentials (Testing)
You can register a new account or use the following social login:
- **Google Login**: Click the 'Google' button on the login/register page to join instantly.
- **Email/Password**: admin@admin.com / 123456.

## ✨ Key Features
- **💎 Premium Design**: Modern UI built with Tailwind CSS 4, featuring glassmorphism, smooth gradients, and interactive micro-animations.
- **🔐 Secure Authentication**: Full integration with **Firebase Auth** supporting both Google Social Login and Email/Password registration.
- **🛡️ Protected Routes**: The "Sell Product" interface is strictly protected, ensuring only authenticated sellers can list items.
- **🖼️ Image Hosting**: Integrated via **ImgBB API** for high-quality, fast-loading product images.
- **📱 Fully Responsive**: Optimized for every screen size - from mobile devices to large desktop monitors.
- **🏷️ Dynamic SEO**: Automatically updating page titles and meta-tags using a custom `useTitle` hook for enhanced browsing.
- **🚀 Trending Feed**: A dynamic homepage section showcasing top-tier products with dedicated landing pages.
- **💌 Support Pages**: Fully functional "About Us" and "Contact Us" pages to build brand trust.

## 🛠️ Tech Stack
- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Structure**: [React 19](https://reactjs.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Backend/Auth**: [Firebase 12](https://firebase.google.com/)
- **Database**: [MongoDB (via Express API)](https://www.mongodb.com/)
- **Feedback**: [SweetAlert2](https://sweetalert2.github.io/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## 📂 Project Structure
```text
src/
├── app/              # Next.js App Router (Routes & Layouts)
├── components/       # Reusable UI Components (Navbar, Footer, etc.)
├── hooks/            # Custom React Hooks (useTitle)
├── providers/        # Context Providers (AuthContext)
├── lib/              # Utility & API configuration
└── firebase/         # Firebase initialization
```

## 🚀 Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/user/mini-mart-client.git
   cd mini-mart-client
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env.local` file in the root and add:
   ```env
   NEXT_PUBLIC_API_URL=your_backend_url
   NEXT_PUBLIC_IMGBB_API_KEY=your_imgbb_key
   
   # Firebase Config
   NEXT_PUBLIC_FIREBASE_API_KEY=...
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
   ```

4. **Run development server**:
   ```bash
   npm run dev
   ```

---
*Built with  by MiniMart Team*
