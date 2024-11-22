// react
import { useState } from "react";

// context
import { AuthContext } from "./AuthContext";

export function Auth({ children }: { children: JSX.Element }) {
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
