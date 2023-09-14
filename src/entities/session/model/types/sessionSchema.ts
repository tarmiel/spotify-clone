export interface SessionSchema {
  isAuthorized: boolean;
  user: UserDTO | null;
  token: string | null;
}

export interface SessionDTO {
  token: string;
  user: UserDTO;
}

export interface UserDTO {
  id: string;
  email: string;
  username?: string;
  role?: 'ADMIN' | 'USER';
}
