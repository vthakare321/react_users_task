import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const Header = () => {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (

     <div className="bg-white  px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        Dashboard
      </h1>

      <button className="bg-red-500 text-white px-4 py-2 rounded-lg"
      onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Header;