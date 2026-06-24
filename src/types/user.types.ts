export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName?: string;
  age?: number;
  gender?: string;
  email: string;
  phone?: string;
  username?: string;
  birthDate?: string;
  role: string;
  image?:string;
  status?: string;
  createdDate?: string;
}


export interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

export interface UserFormData {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  status: string;
}

