import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Index from "./pages/Home/Index/Index"
import Profile from "./components/Profile/Profile";
import About from "./pages/Home/About/About";
import Contact from "./pages/Home/Contact/Contact";
import Tours from "./pages/Home/Tours/Tours";
import TourDetails from "./pages/Home/Tours/TourDetails";
import Booking from "./pages/Home/Booking/Booking";
import Destinations from "./pages/Home/Destinations/Destinations";
import PhotoGallery from "./pages/Home/PhotoGallery/PhotoGallery";
import Login from "./pages/Auth/Login/login";
import Register from "./pages/Auth/Register/register";

import MainLayout from "./layouts/MainLayout"; // Import MainLayout
import AdminLayout from "./layouts/AdminLayout"; // Import AdminLayout
import Dashboard from "./pages/Admin/Dashboard"
import NoFooterLayout from "./layouts/NoFooterLayout"; // Import NoFooterLayout
function App() {
  const location = useLocation();

  // Kiểm tra nếu đang ở trang Login, thêm class đặc biệt cho Header
  const headerClass = location.pathname === "/login" ? "header-login" : "";

  return (
    <>
      <Routes>
        {/* Các route cho layout chính */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="about-us" element={<About />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="tours" element={<Tours />} />
          <Route path="tour-details" element={<TourDetails />} />
          <Route path="booking" element={<Booking />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="gallery" element={<PhotoGallery />} />
        </Route>
        {/* Các route cho layout admin */}
        <Route element={<AdminLayout />}>
          <Route path="admin" element={<Dashboard />} />
          {/* Thêm các route admin khác nếu cần */}
        </Route>


        {/* Routes for NoFooterLayout (for login, register, and profile) */}
        <Route element={<NoFooterLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
