// react-router-dom
import { useOutletContext } from "react-router-dom";

// mantine
import { Card, Divider, Flex, Group, Text } from "@mantine/core";

// entities
import { BtnToBack } from "@/entities/BtnToBack";

// shared
import { useCheckItemInJson } from "@/shared/hooks/useCheckItemInJson";

// types
import { IEpisode, IOutletContext, IResEpisode } from "@/shared/types/types";

// styles
import "./EpisodesCard.css";

export function EpisodesCard() {
  const { payloads: episodes } = useOutletContext<IOutletContext<IEpisode>>();

  const currentEpisode = useCheckItemInJson<IResEpisode>({
    findObject: episodes.results,
  });

  return (
    <div className="episodesCard">
      <div className="episodesCard__info">
        <BtnToBack to={"/categories/episodes"} />
        {currentEpisode ? (
          <Card withBorder shadow="sm" radius="md" w={300}>
            <Card.Section withBorder inheritPadding py="xs">
              <Text fz="xs" c="dimmed">
                Название
              </Text>
              <Group justify="space-between">
                <Text size="lg" fw={500}>
                  {currentEpisode.name}
                </Text>
              </Group>
            </Card.Section>

            <Flex mt="sm" c="dimmed" direction={{ base: "column" }}>
              <Text fz="xs" c="dimmed">
                Эпизод
              </Text>
              <Text fz="md" c="var(--mantine-color-anchor)">
                {currentEpisode.episode}
              </Text>
            </Flex>

            <Divider />

            <Flex mt="sm" c="dimmed" direction={{ base: "column" }}>
              <Text fz="xs" c="dimmed">
                В эфире с
              </Text>
              <Text fz="md" c="var(--mantine-color-anchor)">
                {currentEpisode.air_date}
              </Text>
            </Flex>
          </Card>
        ) : (
          <h3>Такого эпизода нет</h3>
        )}
      </div>
    </div>
  );
}
