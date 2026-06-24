import type { User } from "../types/user.types";


export const getLocalUsers = (): User[] => {
  return JSON.parse(
    localStorage.getItem("localUsers") || "[]"
  );
};

export const saveLocalUsers = (users: User[]) => {
  localStorage.setItem(
    "localUsers",
    JSON.stringify(users)
  );
};

export const addLocalUser = (user: User) => {
  const users = getLocalUsers();

  saveLocalUsers([user, ...users]);
};


export const updateLocalUser = (
  id: number,
  updatedUser: Partial<User>
) => {
  const users = getLocalUsers();

  const updatedUsers = users.map((user: User) =>
    user.id === id
      ? { ...user, ...updatedUser }
      : user
  );

  saveLocalUsers(updatedUsers);
};

export const deleteLocalUser = (id: number) => {
  const users = getLocalUsers();

  saveLocalUsers(
    users.filter((user) => user.id !== id)
  );
};

export const getLocalUserById = (id: number) => {
  const users = getLocalUsers();

  return users.find(
    (user: User) => user.id === id
  );
};

