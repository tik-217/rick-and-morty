// react-router-dom
import { Link } from "react-router-dom";

// mantine
import { Anchor, Button } from "@mantine/core";

// styles
import "./BtnToMore.css";

export function BtnToMore({ path, id }: { path: string; id: number }) {
  return (
    <Anchor component={Link} to={`/${path}/${id}`}>
      <Button variant={"outline"}>Подробнее</Button>
    </Anchor>
  );
}
