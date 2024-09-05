// react-router-dom
import { useOutletContext } from "react-router-dom";

// mantine
import { Avatar, Flex, Group, Text, Title } from "@mantine/core";

// entities
import { BtnMiniCard } from "@/entities/BtnMiniCard";

// shared
import { findIntersection } from "@/shared/utils/findIntersection";
import { useScrollView } from "@/shared/hooks/useScrollView";

// types
import { IOutletContext, ICharacte } from "@/shared/types/types";

// styles
import "./Heroes.css";

export function Heroes() {
  const {
    payloads: heroes,
    haveNextPage,
    setNextUrlPage,
  } = useOutletContext<IOutletContext<ICharacte>>();

  const { lastNodeElem } = useScrollView({
    setNextUrlPage,
    haveNextPage,
  });

  return (
    <>
      <div className="greeting">
        <Title order={3} className="greeting__text">
          Герои
        </Title>
      </div>
      <ul className="listItems listItems_episodes">
        <div className="listItems__wrap">
          {heroes.results &&
            heroes.results.map((el, i) => {
              const trigerElemIndex = findIntersection(
                heroes.results.length,
                i
              );

              if (trigerElemIndex) {
                return (
                  <Flex direction={{ base: "column" }} mb={30} key={el.id}>
                    <Group wrap="nowrap">
                      <Avatar src={el.image} size={94} radius="md" />
                      <div ref={lastNodeElem}>
                        <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                          {el.gender}
                        </Text>

                        <Text fz="lg" fw={500} className="name">
                          {el.name}
                        </Text>

                        <Group wrap="nowrap" gap={10} mt={5}>
                          <BtnMiniCard to={`/categories/heroes/${el.id}`} />
                        </Group>
                      </div>
                    </Group>
                  </Flex>
                );
              } else {
                return (
                  <Flex direction={{ base: "column" }} mb={30} key={el.id}>
                    <Group wrap="nowrap">
                      <Avatar src={el.image} size={94} radius="md" />
                      <div>
                        <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                          {el.gender}
                        </Text>

                        <Text fz="lg" fw={500} className="name">
                          {el.name}
                        </Text>

                        <Group wrap="nowrap" gap={10} mt={5}>
                          <BtnMiniCard to={`/categories/heroes/${el.id}`} />
                        </Group>
                      </div>
                    </Group>
                  </Flex>
                );
              }
            })}
        </div>
      </ul>
    </>
  );
}
