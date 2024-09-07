// react
import { useState } from "react";

// react-router-dom
import { Outlet } from "react-router-dom";

// shared
import { useGetRickAM } from "@/shared/api/hooks/useGetRickAM";

// types
import { ICharacte, IOutletContext, IResCharacte } from "@/types";

export function HeroesOutlet() {
  const [nextUrlPage, setNextUrlPage] = useState(1);

  const { rickAM: heroes, haveNextPage } = useGetRickAM<IResCharacte>({
    url: "https://rickandmortyapi.com/api/character",
    nextUrlPage,
  });

  const outletProps = {
    payloads: heroes,
    haveNextPage,
    setNextUrlPage,
  };

  return <Outlet context={outletProps satisfies IOutletContext<ICharacte>} />;
}
