// mantine
import { Flex, Image } from "@mantine/core";

// styles
import "./Home.css";

export function Home() {
  return (
    <Flex mt={40} justify={"center"}>
      <Image radius="md" src="/rick_and_morty-1920x1080.webp" maw={800} />
    </Flex>
  );
}
