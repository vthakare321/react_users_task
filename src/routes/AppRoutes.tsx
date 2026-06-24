import { Routes, Route, Navigate  } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import UserDetail from "../pages/UserDetails";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";
import AddUser from "../pages/AddUser";
import EditUser from "../pages/EditUser";

import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
   
      <Route path="/" element={<Navigate to="Login" replace />} />
      <Route path="/login" element={<Login />} />

      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/users" element={<Users />} />

        <Route path="/users/:id" element={<UserDetail />} />

        <Route path="/users/add" element={<AddUser />} />

        <Route path="/users/edit/:id" element={<EditUser />} />

        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
