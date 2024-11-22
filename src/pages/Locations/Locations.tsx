// react-router-dom
import { useOutletContext } from "react-router-dom";

// mantine
import { Flex, Group, Text, Title } from "@mantine/core";

// entities
import { BtnMiniCard } from "@/entities/BtnMiniCard";

// shared
import { useScrollView } from "@/shared/hooks/useScrollView";
import { findIntersection } from "@/shared/utils/findIntersection";

// types
import { IOutletContext, ILocations } from "../../shared/types/types";

// styles
import "./Locations.css";

export function Locations() {
  const {
    payloads: locations,
    haveNextPage,
    setNextUrlPage,
  } = useOutletContext<IOutletContext<ILocations>>();

  const { lastNodeElem } = useScrollView({
    setNextUrlPage,
    haveNextPage,
  });

  return (
    <>
      <div className="greeting">
        <Title order={3} className="greeting__text">
          Локации
        </Title>
      </div>
      <ul className="listItems">
        {locations.results &&
          locations.results.map((el, i) => {
            const trigerElemIndex = findIntersection(
              locations.results.length,
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
                    <BtnMiniCard to={`/categories/locations/${el.id}`} />
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
                    <BtnMiniCard to={`/categories/locations/${el.id}`} />
                  </Group>
                </Flex>
              );
            }
          })}
      </ul>
    </>
  );
}
