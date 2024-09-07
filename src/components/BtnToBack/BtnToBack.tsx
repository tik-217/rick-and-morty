// react-router-dom
import { useNavigate } from "react-router-dom";

// styles
import "./BtnToBack.css";

export default function BtnToBack() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className="btnToBack">
      Назад
    </button>
  );
}
