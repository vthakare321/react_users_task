import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate, Navigate } from "react-router-dom";
import { useLogin } from "../hooks/useAuth";
import { useAuthStore } from "../store/authStore";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
});

type LoginPayload = z.infer<typeof loginSchema>;

const Login = () => {
  const navigate = useNavigate();

  const token = useAuthStore((state) => state.token);
  const setUser = useAuthStore((state) => state.setUser);

  const mutation = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>({
    resolver: zodResolver(loginSchema),
  });

  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  const onSubmit = async (data: LoginPayload) => {
    try {
      const response = await mutation.mutateAsync(data);
      setUser(response);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-[400px]">
        <h1 className="text-3xl font-bold text-blue-600 text-center">
          Login
        </h1>

        

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 mt-8"
        >
          <div>
            <input
              type="text"
              placeholder="Username"
              className="w-full border rounded-lg p-3 outline-none focus:border-blue-500"
              {...register("username")}
            />

            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-lg p-3 outline-none focus:border-blue-500"
              {...register("password")}
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        
      </div>
    </div>
  );
};

export default Login;