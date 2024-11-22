// react-router-dom
import { useOutletContext } from "react-router-dom";

// mantine
import { Card, Divider, Group, Text, Image, Flex } from "@mantine/core";

// entities
import { BtnToBack } from "@/entities/BtnToBack";

// hooks
import { useCheckItemInJson } from "@/shared/hooks/useCheckItemInJson";

// types
import { IOutletContext, IResCharacte, ICharacte } from "@/shared/types/types";

// styles
import "./HeroesCard.css";

export function HeroesCard() {
  const { payloads: heroes } = useOutletContext<IOutletContext<ICharacte>>();

  const currentHeroes = useCheckItemInJson<IResCharacte>({
    findObject: heroes.results,
  });

  return (
    <div className="heroesCard">
      <BtnToBack to={"/categories/heroes"} />
      {currentHeroes ? (
        <Card withBorder shadow="sm" radius="md" w={300}>
          <Card.Section withBorder inheritPadding py="xs">
            <Text fz="xs" c="dimmed">
              Имя
            </Text>
            <Group justify="space-between">
              <Text size="lg" fw={500}>
                {currentHeroes.name}
              </Text>
            </Group>
          </Card.Section>

          <Flex mt="sm" c="dimmed" direction={{ base: "column" }}>
            <Text fz="xs" c="dimmed">
              Пол
            </Text>
            <Text fz="md" c="var(--mantine-color-anchor)">
              {currentHeroes.gender}
            </Text>
          </Flex>

          <Divider />

          <Flex mt="sm" c="dimmed" direction={{ base: "column" }}>
            <Text fz="xs" c="dimmed">
              Вид
            </Text>
            <Text fz="md" c="var(--mantine-color-anchor)">
              {currentHeroes.species}
            </Text>
          </Flex>

          <Divider />

          <Flex mt="sm" c="dimmed" direction={{ base: "column" }}>
            <Text fz="xs" c="dimmed">
              Статус
            </Text>
            <Text fz="md" c="var(--mantine-color-anchor)">
              {currentHeroes.status}
            </Text>
          </Flex>

          {currentHeroes.type && (
            <>
              <Divider />

              <Flex mt="sm" c="dimmed" direction={{ base: "column" }}>
                <Text fz="xs" c="dimmed">
                  Тип
                </Text>
                <Text fz="md" c="var(--mantine-color-anchor)">
                  {currentHeroes.type}
                </Text>
              </Flex>
            </>
          )}

          <Card.Section mt="sm">
            <Image src={currentHeroes.image} />
          </Card.Section>
        </Card>
      ) : (
        <h3>Такого героя нет</h3>
      )}
    </div>
  );
}
