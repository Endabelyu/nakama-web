import { User } from "@/types";
import { BACKEND_API_URL } from "./env";
import { UserLogin, UserRegister } from "@/schemas/user";
import { accessToken } from "./access-token";

export type Auth = {
  isAuthenticated: boolean;
  getToken: () => string;
  register(userRegister: UserRegister): Promise<register | null>;
  login(userLogin: UserLogin): Promise<void | null>;
  checkUser(): Promise<User | undefined>;
  logout(): void;
};

export type register = {
  ok: boolean;
  data: User;
  message: string;
};
export const auth: Auth = {
  isAuthenticated: false,

  getToken() {
    return accessToken.get();
  },

  async register(userRegister: UserRegister) {
    const response = await fetch(`${BACKEND_API_URL}/auth/register`, {
      method: "POST",
      body: JSON.stringify(userRegister),
      headers: { "Content-Type": "application/json" },
    });

    const user = await response.json();
    if (!user) return null;

    return user;
  },

  async login(userLogin: UserLogin) {
    try {
      const response = await fetch(`${BACKEND_API_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify(userLogin),
        headers: { "Content-Type": "application/json" },
      });

      const data: { token?: string; user?: User } = await response.json();
      if (!data.token) return null;

      accessToken.set(data.token);
      auth.isAuthenticated = true;
    } catch (error: unknown) {
      console.error(error, "error");
      accessToken.remove();
      auth.isAuthenticated = false;
    }
  },

  async checkUser() {
    const token = accessToken.get();
    if (token) {
      try {
        const response = await fetch(`${BACKEND_API_URL}/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const result = await response.json();
        const user: User = result.data;
        auth.isAuthenticated = true;
        return user;
      } catch (error) {
        console.error(error);
        accessToken.remove();
        auth.isAuthenticated = false;
      }
    }
  },

  logout() {
    console.log("Logout method fired");
    accessToken.remove();
  },
};
