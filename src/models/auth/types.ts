export interface UserDetails {
  username: string;
}

export interface AuthState {
  user: UserDetails | null;
  token: string | null;
  isLoggedIn: boolean;
}

export interface UserResponse {
  user: UserDetails;
  token: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}
