import { useContext } from "react";
import { AuthContext } from "../Auth/Auth";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateAccess({ children }: { children: JSX.Element }) {
  const { user } = useContext(AuthContext);

  const location = useLocation();

  if (user === null) {
    return (
      <Navigate to={"/login"} state={{ from: location.pathname }} replace />
    );
  }

  return children;
}
