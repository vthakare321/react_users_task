import { useForm } from "react-hook-form";
import type { UserFormData } from "../types/user.types";

interface Props {
  defaultValues?: UserFormData;
  onSubmit: (data: UserFormData) => void;
  isLoading: boolean;
  onCancel?: () => void;
}

const UserForm = ({
  defaultValues,
  onSubmit,
  isLoading,
  onCancel,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-xl rounded-2xl p-8 max-w-xl mx-auto space-y-5"
    >
      <h1 className="text-3xl font-bold">
        User Form
      </h1>

      <div>
        <input
          placeholder="First Name"
          className="w-full border p-3 rounded-lg"
          {...register("firstName", {
            required: "First name is required",
          })}
        />
        <p className="text-red-500">
          {errors.firstName?.message}
        </p>
      </div>

      <div>
        <input
          placeholder="Last Name"
          className="w-full border p-3 rounded-lg"
          {...register("lastName", {
            required: "Last name is required",
          })}
        />
      </div>

      <div>
        <input
          placeholder="Email"
          className="w-full border p-3 rounded-lg"
          {...register("email", {
            required: "Email is required",
          })}
        />
        <p className="text-red-500">
          {errors.email?.message}
        </p>
      </div>

      <div>
        <select
          className="w-full border p-3 rounded-lg"
          {...register("role", {
            required: "Role is required",
          })}
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>

      <div>
        <select
          className="w-full border p-3 rounded-lg"
          {...register("status", {
            required: "Status is required",
          })}
        >
          <option value="">Select Status</option>
          <option value="active">Active</option>
          <option value="inactive">
            Inactive
          </option>
        </select>
      </div>

 

      <div className="flex gap-4">
  <button
    type="submit"
    disabled={isLoading}
    className="bg-blue-600 text-white px-5 py-3 rounded-lg flex-1"
  >
    {isLoading ? "Saving..." : "Save"}
  </button>

  <button
    type="button"
    onClick={onCancel}
    className="bg-gray-500 text-white px-5 py-3 rounded-lg flex-1"
  >
    Cancel
  </button>
</div>
    </form>
  );
};

export default UserForm;