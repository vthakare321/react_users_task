import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { useUsers } from "../hooks/useUsers";
import { useSearchUsers } from "../hooks/useSearchUsers";
import { getLocalUsers } from "../api/localUserService";
import { deleteLocalUser } from "../api/localUserService";

const Users = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const limit = 9;
  const skip = (page - 1) * limit;

  const {
    data,
    isLoading,
    error,
  } = useUsers(limit, skip);

  const { data: searchData } =
    useSearchUsers(search);

  if (isLoading) {
    return <Loader />;
  }

  if (error instanceof Error) {
    return (
      <ErrorMessage
        message={error.message}
      />
    );
  }

  const localUsers = getLocalUsers();

  // const filteredLocalUsers =
  //   localUsers.filter(
  //     (user) =>
  //       `${user.firstName} ${user.lastName}`
  //         .toLowerCase()
  //         .includes(search.toLowerCase()) ||
  //       user.email
  //         .toLowerCase()
  //         .includes(search.toLowerCase())
  //   );

const usersToDisplay = search
  ? [
      ...localUsers,
      ...(searchData?.users || [])
    ].filter(
      (user) =>
        `${user.firstName} ${user.lastName}`
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        user.email
          .toLowerCase()
          .includes(search.toLowerCase())
    )
  : [...localUsers, ...(data?.users || [])];

  const handleDelete = (id: number) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this user?"
  );

  if (!confirmDelete) return;

  deleteLocalUser(id);

  window.location.reload();
};

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold">
          Users
        </h1>

        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="border p-3 rounded-xl w-full md:w-80"
        />

        <button
          onClick={() =>
            navigate("/users/add")
          }
          className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700"
        >
          Add User
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {usersToDisplay.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-2xl shadow p-6"
          >
            <h2 className="text-xl font-bold">
              {user.firstName}{" "}
              {user.lastName}
            </h2>

            <p className="text-gray-500 mt-3">
              {user.email}
            </p>

            <p className="mt-2">
              Role: {user.role || "User"}
            </p>

            <p className="mt-2">
              Status:
              <span className="ml-2 text-green-600 font-medium">
                {user.status ||
                  (user.id % 2 === 0
                    ? "Active"
                    : "Inactive")}
              </span>
            </p>

            <p className="mt-2">
              Created:
              {" "}
              {user.createdDate ||
                user.birthDate ||
                "N/A"}
            </p>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() =>
                  navigate(
                    `/users/${user.id}`
                  )
                }
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                View
              </button>

              <button
                onClick={() =>
                  navigate(
                    `/users/edit/${user.id}`
                  )
                }
                className="bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Edit
              </button>

              <button
              onClick={()=>handleDelete(user.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {!search && (
        <div className="flex justify-center gap-4 mt-10">
          <button
            disabled={page === 1}
            onClick={() =>
              setPage(page - 1)
            }
            className="bg-gray-300 px-5 py-2 rounded disabled:opacity-50"
          >
            Previous
          </button>

          <button
            disabled={
              skip + limit >=
              (data?.total || 0)
            }
            onClick={() =>
              setPage(page + 1)
            }
            className="bg-gray-300 px-5 py-2 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default Users;