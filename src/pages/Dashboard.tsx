import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl ">
          <h3 className="text-gray-500">
            Total Users
          </h3>

          <h1 className="text-4xl font-bold text-blue-600 mt-4">
            208
          </h1>
        </div>

        <div className="bg-white rounded-2xl ">
          <h3 className="text-gray-500">
            Active Users
          </h3>

          <h1 className="text-4xl font-bold text-green-600 mt-4">
            105
          </h1>
        </div>

        <div className="bg-white rounded-2xl ">
          <h3 className="text-gray-500">
            Inactive Users
          </h3>

          <h1 className="text-4xl font-bold text-red-500 mt-4">
            103
          </h1>
        </div>
      </div>

      <button
        onClick={() => navigate("/users")}
        className="mt-10 bg-blue-600 text-white px-6 py-3 rounded-xl"
      >
        View Users
      </button>
    </>
  );
};

export default Dashboard;