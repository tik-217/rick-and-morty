// react
import { useEffect, useState } from "react";

// react-router-dom
import { useNavigate } from "react-router-dom";

// styles
import "./NotFound.css";

export default function NotFound() {
  const [currTime, setCurrTime] = useState(5);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (currTime <= 0) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, [currTime]);

  return (
    <div className="notFound">
      <h2>Страница не найдена</h2>
      <p>Через {currTime} секунд вы будете перенаправлены на гланую страницу</p>
    </div>
  );
}
