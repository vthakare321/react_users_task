import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { useUserDetail } from "../hooks/useUserDetail";
import { getLocalUserById } from "../api/localUserService";

const UserDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const localUser = getLocalUserById(Number(id));
  const {
  data: apiUser,
  isLoading,
  error,
} = useUserDetail(Number(id), !localUser);

const user = localUser || apiUser;

  if (isLoading) {
    return <Loader />;
  }

  if (error instanceof Error) {
    return (
      <ErrorMessage message={error.message} />
    );
  }

  if (!user) {
    return (
      <ErrorMessage message="User not found" />
    );
  }

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">

        <div className="flex flex-col items-center">
          <img
            src={user.image}
            alt={user.firstName}
            className="w-32 h-32 rounded-full border-4 border-blue-500"
          />

          <h1 className="text-3xl font-bold mt-4">
            {user.firstName} {user.lastName}
          </h1>

          <p className="text-gray-500 mt-2">
            {user.email}
          </p>
        </div>

        <div className="mt-8 space-y-3">
          <p>
            <span className="font-semibold">
              Username:
            </span>{" "}
            {user.username}
          </p>

          <p>
            <span className="font-semibold">
              Phone:
            </span>{" "}
            {user.phone}
          </p>

          <p>
            <span className="font-semibold">
              Gender:
            </span>{" "}
            {user.gender}
          </p>

          <p>
            <span className="font-semibold">
              Age:
            </span>{" "}
            {user.age}
          </p>

          <p>
            <span className="font-semibold">
              Role:
            </span>{" "}
            {user.role || "User"}
          </p>

          <p>
            <span className="font-semibold">
              Birth Date:
            </span>{" "}
            {user.birthDate || user.createdDate || "N/A"}
          </p>
        </div>

        <div className="flex gap-4 mt-8">
          <button
            onClick={() => navigate("/users")}
            className="bg-gray-500 text-white px-5 py-2 rounded-lg"
          >
            Back
          </button>

          <button
            onClick={() =>
              navigate(`/users/edit/${user.id}`)
            }
            className="bg-green-600 text-white px-5 py-2 rounded-lg"
          >
            Edit User
          </button>
        </div>

      </div>
    </div>
  );
};

export default UserDetail;