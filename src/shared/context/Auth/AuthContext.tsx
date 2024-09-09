// react
import { createContext } from "react";

// types
import { IAuthContext } from "@/shared/types/types";

export const AuthContext = createContext<IAuthContext>({
  user: "",
  signIn: () => {},
  signOut: () => {},
});
