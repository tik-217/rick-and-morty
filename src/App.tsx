// react-router-dom
import { Route, Routes } from "react-router-dom";

// components
import Home from "./components/Home/Home";
import Heroes from "./components/Heroes/Heroes";
import Episodes from "./components/Episodes/Episodes";
import NotFound from "./components/NotFound/NotFound";
import Locations from "./components/Locations/Locations";
import HeroesCard from "./components/HeroesCard/HeroesCard";
import EpisodesCard from "./components/EpisodesCard/EpisodesCard";
import LocationsCard from "./components/LocationsCard/LocationsCard";

// styles
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/heroes"} element={<Heroes />} />
      <Route path={"/heroes/:id"} element={<HeroesCard />} />
      <Route path={"/episodes"} element={<Episodes />} />
      <Route path={"/episodes/:id"} element={<EpisodesCard />} />
      <Route path={"/locations"} element={<Locations />} />
      <Route path={"/locations/:id"} element={<LocationsCard />} />
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
}
