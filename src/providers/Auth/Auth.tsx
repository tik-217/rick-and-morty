import { createContext, useState } from "react";

interface IAuthContext {
  user: string | null;
  signIn: (newLogin: string, callback: () => void) => void;
  signOut: (callback: () => void) => void;
}

export const AuthContext = createContext<IAuthContext>({
  user: "",
  signIn: (newLogin: string, callback: () => void) => {},
  signOut: (callback: () => void) => {},
});

export default function Auth({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<string | null>(null);

  const signIn = (newLogin: string, callback: () => void) => {
    setUser(newLogin);
    callback();
  };

  const signOut = (callback: () => void) => {
    setUser(null);
    callback();
  };

  const loginData = {
    user,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={loginData}>{children}</AuthContext.Provider>
  );
}
