// react
import { useState } from "react";

// react-router-dom
import { Outlet } from "react-router-dom";

// types
import { IEpisode, IOutletContext, IResEpisode } from "@/shared/types/types";

// shared
import { useGetRickAM } from "@/shared/api/hooks/useGetRickAM";

export function EpisodesOutlet() {
  const [nextUrlPage, setNextUrlPage] = useState(1);

  const {
    rickAM: episodes,
    haveNextPage,
    fetchError,
  } = useGetRickAM<IResEpisode>({
    url: "https://rickandmortyapi.com/api/episode",
    nextUrlPage,
  });

  const outletProps = {
    payloads: episodes,
    haveNextPage,
    setNextUrlPage,
    fetchError,
  };

  return <Outlet context={outletProps satisfies IOutletContext<IEpisode>} />;
}
