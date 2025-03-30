export interface UsersResponse {
  success: boolean;
  message?: string;
  data: {
    users: User[];
  };
}

export interface User {
  _id: string;
  name: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
}
