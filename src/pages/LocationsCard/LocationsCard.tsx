// react-router-dom
import { useOutletContext } from "react-router-dom";

// mantine
import { Card, Divider, Flex, Group, Text } from "@mantine/core";

// entities
import { BtnToBack } from "@/entities/BtnToBack";

// shared
import { useCheckItemInJson } from "@/shared/hooks/useCheckItemInJson";

// types
import { IOutletContext, IResLocation, ILocations } from "@/types";

// styles
import "./LocationsCard.css";

export function LocationsCard() {
  const { payloads: locations } =
    useOutletContext<IOutletContext<ILocations>>();

  const currentLocation = useCheckItemInJson<IResLocation>({
    findObject: locations.results,
  });

  return (
    <div className="locationsCard">
      <div className="locationsCard__info">
        <BtnToBack to={"/categories/locations"} />
        {currentLocation ? (
          <Card withBorder shadow="sm" radius="md" w={300}>
            <Card.Section withBorder inheritPadding py="xs">
              <Text fz="xs" c="dimmed">
                Название
              </Text>
              <Group justify="space-between">
                <Text size="lg" fw={500}>
                  {currentLocation.name}
                </Text>
              </Group>
            </Card.Section>

            <Flex mt="sm" c="dimmed" direction={{ base: "column" }}>
              <Text fz="xs" c="dimmed">
                Измерение
              </Text>
              <Text fz="md" c="var(--mantine-color-anchor)">
                {currentLocation.dimension}
              </Text>
            </Flex>

            <Divider />

            <Flex mt="sm" c="dimmed" direction={{ base: "column" }}>
              <Text fz="xs" c="dimmed">
                Тип
              </Text>
              <Text fz="md" c="var(--mantine-color-anchor)">
                {currentLocation.type}
              </Text>
            </Flex>
          </Card>
        ) : (
          <h3>Такого локации нет</h3>
        )}
      </div>
    </div>
  );
}
