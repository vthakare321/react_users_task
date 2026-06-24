import { apiClient } from "./apiClient";
import type { UsersResponse, User, UserFormData } from "../types/user.types";
import { getLocalUsers } from "./localUserService";


export const getUsers = async (
  limit: number,
  skip: number
) => {
  const response = await apiClient.get(
    `/users?limit=${limit}&skip=${skip}`
  );

  const apiUsers = response.data.users;

  const localUsers = getLocalUsers();

  return {
    ...response.data,
    users: [...localUsers, ...apiUsers],
  };
};

export const getUserById = async (
  id: number
): Promise<User> => {
  const response = await apiClient.get(`/users/${id}`);

  return response.data;
};

export const searchUsers = async (
  query: string
): Promise<UsersResponse> => {
  const response = await apiClient.get(
    `/users/search?q=${query}`
  );

  return response.data;
};


export const createUser = async (
  data: UserFormData
) => {
  const response = await apiClient.post(
    "/users/add",
    data
  );

  return response.data;
};

export const updateUser = async (
  id: number,
  data: UserFormData
) => {
  const response = await apiClient.patch(
    `/users/${id}`,
    data
  );

  return response.data;
};

export const getAllUsers = async (
  limit: number,
  skip: number
) => {
  const response = await apiClient.get(
    `/users?limit=${limit}&skip=${skip}`
  );

  const apiUsers = response.data.users;

  const localUsers = JSON.parse(
    localStorage.getItem("localUsers") || "[]"
  );

  return {
    ...response.data,
    users: [...localUsers, ...apiUsers],
  };
};

export const deleteUser = async (id: number) => {
  const response = await apiClient.delete(`/users/${id}`);
  return response.data;
};