// react
import { useEffect, useState } from "react";

// react-router-dom
import { useNavigate } from "react-router-dom";

// mantine
import { Group, Text, Title } from "@mantine/core";

// styles
import "./NotFound.css";

export function NotFound() {
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
    <Group className="notFound">
      <Title order={2}>Страница не найдена</Title>
      <Text>
        Через {currTime} секунд вы будете перенаправлены на гланую страницу
      </Text>
    </Group>
  );
}
