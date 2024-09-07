// react-router-dom
import { Link } from "react-router-dom";

// styles
import "./BtnToMore.css";

export default function BtnToMore({ path, id }: { path: string; id: number }) {
  return (
    <Link to={`/${path}/${id}`} className="btnToMore">
      <button className="btnToMore__btn">Подробнее</button>
    </Link>
  );
}
