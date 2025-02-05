import { Route, Routes, useLocation } from "react-router-dom";
import axios from "axios";
import LandingPage from "./pages/LandingPage.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/footer.tsx";
import LeaderBoardPage from "./pages/LeaderBoardPage.tsx";
import CarbonFootprintPage from "./pages/CarbonFootprintPage.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import AdminNavbar from "./components/AdminNavbar.tsx";
import MapPage from "./pages/MapPage.jsx";
import AuthForm from "./components/Login.tsx";
import IdeasPage from "./components/user/Idea.tsx";
import PrivateRoute from "./components/ProtectedRotes.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Model from "./components/model.tsx";
import Journey from "./components/Journey.tsx";

// axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.baseURL = "https://greenpath-navigator-backend.onrender.com";

axios.defaults.withCredentials = true;

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="flex flex-col min-h-screen">
      <ToastContainer />
      {isAdminRoute ? <AdminNavbar /> : <Navbar />}
      <main className="flex-grow container mx-auto p-6">
        {/* Define routes for your app */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/leaderboard" element={<LeaderBoardPage />} />
          <Route path="/calculateCarbon" element={<CarbonFootprintPage />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/login" element={<AuthForm />} />
          <Route path="/idea" element={<IdeasPage />} />
          <Route path="/model" element={<Model />} />

          {/* Protect these routes using PrivateRoute */}
          <Route
            path="/admin"
            element={<PrivateRoute element={<AdminDashboard />} isAdmin />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
