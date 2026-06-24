import { useNavigate, useParams } from "react-router-dom";
import UserForm from "../components/UserForm";
// import Loader from "../components/Loader";
import {
  getLocalUserById,
  updateLocalUser,
} from "../api/localUserService";
import type { UserFormData } from "../types/user.types";
import { useUserDetail } from "../hooks/useUserDetail";


const EditUser = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  // const user = getLocalUserById(Number(id));

  const localUser = getLocalUserById(Number(id));

const {
  data: apiUser,
  
} = useUserDetail(Number(id), !localUser);

const user = localUser || apiUser;

  const handleSubmit = (
    data: UserFormData
  ) => {
    updateLocalUser(Number(id), data);

    alert("User updated successfully");

    navigate("/users");
  };

  if (!user) {
    return (
      <h1 className="text-center text-2xl">
        User not found
      </h1>
    );
  }

  return (
    <UserForm
      defaultValues={{
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        status: user.status || "active",
      }}
      onSubmit={handleSubmit}
      onCancel={() => navigate("/users")}
      isLoading={false}
    />
  );
};

export default EditUser;