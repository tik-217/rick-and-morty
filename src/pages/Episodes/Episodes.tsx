// react-router-dom
import { useOutletContext } from "react-router-dom";

// mantine
import { Flex, Group, Text, Title } from "@mantine/core";

// entities
import { BtnMiniCard } from "@/entities/BtnMiniCard";

// shared
import { findIntersection } from "@/shared/utils/findIntersection";
import { useScrollView } from "@/shared/hooks/useScrollView";

// types
import { IEpisode, IOutletContext } from "@/shared/types/types";

// styles
import "./Episodes.css";

export function Episodes() {
  const {
    payloads: episodes,
    haveNextPage,
    setNextUrlPage,
  } = useOutletContext<IOutletContext<IEpisode>>();

  const { lastNodeElem } = useScrollView({
    setNextUrlPage,
    haveNextPage,
  });

  return (
    <>
      <div className="greeting">
        <Title order={3} className="greeting__text">
          Эпизоды
        </Title>
      </div>
      <ul className="listItems">
        {episodes.results &&
          episodes.results.map((el, i) => {
            const trigerElemIndex = findIntersection(
              episodes.results.length,
              i
            );

            if (trigerElemIndex) {
              return (
                <Flex
                  direction={{ base: "column" }}
                  align="center"
                  mb={30}
                  ref={lastNodeElem}
                  key={el.id}
                >
                  <Text fz="lg" fw={500} className="name">
                    {el.name}
                  </Text>

                  <Group wrap="nowrap" gap={10} mt={5}>
                    <BtnMiniCard to={`/categories/episodes/${el.id}`} />
                  </Group>
                </Flex>
              );
            } else {
              return (
                <Flex
                  direction={{ base: "column" }}
                  align="center"
                  mb={30}
                  key={el.id}
                >
                  <Text fz="lg" fw={500} className="name">
                    {el.name}
                  </Text>

                  <Group wrap="nowrap" gap={10} mt={5}>
                    <BtnMiniCard to={`/categories/episodes/${el.id}`} />
                  </Group>
                </Flex>
              );
            }
          })}
      </ul>
    </>
  );
}
