import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./HeroSection";
import EditBlog from "./EditBlog";
import Explore from "./Explore";
import Account from "./Account";
import NoPage from "./NoPage";

import AdminLogin from "./Admin/AdminLogin";
import Dashboard from "./Admin/Dashboard";
import ViewPanel from "./Admin/ViewPanel";
import EditPanel from "./Admin/EditPanel";

const Routing = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HeroSection />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/account" element={<Account />} />
        <Route path="/edit-blog/:id" element={<EditBlog />} />

        {/* Admin Login */}
        <Route path="/adminlogin" element={<AdminLogin />} />

        {/* Admin Dashboard Nested Routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="view" element={<ViewPanel />} />
          <Route path="edit" element={<EditPanel />} />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
};

export default Routing;
