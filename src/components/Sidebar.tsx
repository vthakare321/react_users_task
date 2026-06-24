import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-10">
        Admin Panel
      </h1>

      <div className="flex flex-col gap-4">
        <NavLink to="/dashboard">Dashboard</NavLink>

        <NavLink to="/users">Users</NavLink>

        <NavLink to="/settings">Settings</NavLink>
      </div>
    </div>
  );
};

export default Sidebar;