// react
import { useState } from "react";

// react-router-dom
import { Outlet } from "react-router-dom";

// types
import { ILocations, IOutletContext, IResLocation } from "@/types";

// shared
import { useGetRickAM } from "@/shared/api/hooks/useGetRickAM";

export function LocationsOutlet() {
  const [nextUrlPage, setNextUrlPage] = useState(1);

  const { rickAM: locations, haveNextPage } = useGetRickAM<IResLocation>({
    url: "https://rickandmortyapi.com/api/location",
    nextUrlPage,
  });

  const outletProps = {
    payloads: locations,
    haveNextPage,
    setNextUrlPage,
  };

  return <Outlet context={outletProps satisfies IOutletContext<ILocations>} />;
}
