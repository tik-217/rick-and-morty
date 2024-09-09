// react
import { useState } from "react";

// react-router-dom
import { Outlet } from "react-router-dom";

// shared
import { useGetRickAM } from "@/shared/api/hooks/useGetRickAM";

// types
import { ICharacte, IOutletContext, IResCharacte } from "@/shared/types/types";

export function HeroesOutlet() {
  const [nextUrlPage, setNextUrlPage] = useState(1);

  const {
    rickAM: heroes,
    haveNextPage,
    fetchError,
  } = useGetRickAM<IResCharacte>({
    url: "https://rickandmortyapi.com/api/character",
    nextUrlPage,
  });

  const outletProps = {
    payloads: heroes,
    haveNextPage,
    setNextUrlPage,
    fetchError,
  };

  return <Outlet context={outletProps satisfies IOutletContext<ICharacte>} />;
}
