// react-router-dom
import { Route, Routes } from "react-router-dom";

// components
import Home from "./components/Home/Home";
import Signin from "./components/Signin/Signin";
import Heroes from "./components/Heroes/Heroes";
import Episodes from "./components/Episodes/Episodes";
import NotFound from "./components/NotFound/NotFound";
import Locations from "./components/Locations/Locations";
import HeroesCard from "./components/HeroesCard/HeroesCard";
import EpisodesCard from "./components/EpisodesCard/EpisodesCard";
import LocationsCard from "./components/LocationsCard/LocationsCard";

// providers
import PrivateAccess from "./providers/PrivateAccess/PrivateAccess";
import Auth from "./providers/Auth/Auth";

// styles
import "./App.css";

export default function App() {
  return (
    <Auth>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/categories">
            <Route
              index
              element={
                <PrivateAccess>
                  <Heroes />
                </PrivateAccess>
              }
            />
            <Route
              path={"heroes"}
              element={
                <PrivateAccess>
                  <Heroes />
                </PrivateAccess>
              }
            ></Route>

            <Route
              path={"episodes"}
              element={
                <PrivateAccess>
                  <Episodes />
                </PrivateAccess>
              }
            ></Route>

            <Route
              path={"locations"}
              element={
                <PrivateAccess>
                  <Locations />
                </PrivateAccess>
              }
            ></Route>
          </Route>
        </Route>
        <Route
          path={"categories/episodes/:id"}
          element={
            <PrivateAccess>
              <EpisodesCard />
            </PrivateAccess>
          }
        />
        <Route
          path={"categories/locations/:id"}
          element={
            <PrivateAccess>
              <LocationsCard />
            </PrivateAccess>
          }
        />
        <Route
          path={"categories/heroes/:id"}
          element={
            <PrivateAccess>
              <HeroesCard />
            </PrivateAccess>
          }
        />
        <Route path={"*"} element={<NotFound />} />
        <Route path={"/login"} element={<Signin />} />
      </Routes>
    </Auth>
  );
}
