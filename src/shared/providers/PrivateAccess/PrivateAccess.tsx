// react-router-dom
import { Navigate, useLocation } from "react-router-dom";

// react
import { useContext } from "react";

// components
import { AuthContext } from "../../context/Auth";

export function PrivateAccess({ children }: { children: JSX.Element }) {
  const { user } = useContext(AuthContext);

  const location = useLocation();

  if (user === null) {
    return (
      <Navigate to={"/login"} state={{ from: location.pathname }} replace />
    );
  }

  return children;
}
