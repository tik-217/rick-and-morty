// react-router-dom
import { Link } from "react-router-dom";

// mantine
import { Anchor, Button } from "@mantine/core";

// styles
import "./BtnToBack.css";

export function BtnToBack({ to }: { to: string }) {
  return (
    <Anchor component={Link} to={to}>
      <Button variant="outline" className="btnToBack">
        Назад
      </Button>
    </Anchor>
  );
}
