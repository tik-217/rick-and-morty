// react-router-dom
import { Link, useNavigate } from "react-router-dom";

// components
import Navigation from "../../routes/Navigation/Navigation";

// styles
import "./PageTitle.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/Auth/Auth";

export default function PageTitle({ text }: { text: string }) {
  const navigate = useNavigate();
  const { signOut } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut(() => {
      navigate("/");
    });
  };

  return (
    <div className="pageTitle">
      <Navigation />
      <div className="greeting">
        <h1 className="greeting__title">
          <Link to={"/"}>Рик и Морти</Link>
        </h1>
        <p className="greeting__text">{text}</p>
      </div>
      <button onClick={() => handleSignOut()}>Выйти</button>
    </div>
  );
}
