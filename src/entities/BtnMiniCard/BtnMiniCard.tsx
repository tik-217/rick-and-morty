// react-router-dom
import { Link } from "react-router-dom";

// mantine
import { Anchor, Button } from "@mantine/core";

export function BtnMiniCard({ to }: { to: string }) {
  return (
    <Anchor component={Link} to={to}>
      <Button size="xs">Подробнее</Button>
    </Anchor>
  );
}
