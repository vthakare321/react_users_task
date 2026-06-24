import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import type { UserFormData } from "../types/user.types";
import { addLocalUser } from "../api/localUserService";

const AddUser = () => {
  const navigate = useNavigate();

  const handleSubmit = (data: UserFormData) => {
    const newUser = {
      id: Date.now(),
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      role: data.role,
      status: data.status,
      createdDate: new Date().toLocaleDateString(),
    };

    addLocalUser(newUser);

    alert("User added successfully");

    navigate("/users");
  };

  return (
    <UserForm
      onSubmit={handleSubmit}
      isLoading={false}
    />
  );
};

export default AddUser;