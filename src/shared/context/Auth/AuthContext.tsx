// react
import { createContext } from "react";

// types
import { IAuthContext } from "@/types";

export const AuthContext = createContext<IAuthContext>({
  user: "",
  signIn: () => {},
  signOut: () => {},
});
