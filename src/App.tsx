// react
import { lazy } from "react";

// react-router-dom
import { Route, Routes } from "react-router-dom";

// providers
import PrivateAccess from "./providers/PrivateAccess/PrivateAccess";
import SuspenseWrap from "./providers/SuspenseWrap/SuspenseWrap";
import Auth from "./providers/Auth/Auth";

// styles
import "./App.css";

const Home = lazy(() => import("./components/Home/Home"));
const Heroes = lazy(() => import("./components/Heroes/Heroes"));
const Signin = lazy(() => import("./components/Signin/Signin"));
const Episodes = lazy(() => import("./components/Episodes/Episodes"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));
const Locations = lazy(() => import("./components/Locations/Locations"));
const HeroesCard = lazy(() => import("./components/HeroesCard/HeroesCard"));
const EpisodesCard = lazy(
  () => import("./components/EpisodesCard/EpisodesCard")
);
const LocationsCard = lazy(
  () => import("./components/LocationsCard/LocationsCard")
);

export default function App() {
  return (
    <Auth>
      <Routes>
        <Route
          path="/"
          element={
            <SuspenseWrap>
              <Home />
            </SuspenseWrap>
          }
        >
          <Route path="/categories">
            <Route
              index
              element={
                <PrivateAccess>
                  <SuspenseWrap>
                    <Heroes />
                  </SuspenseWrap>
                </PrivateAccess>
              }
            />
            <Route
              path={"heroes"}
              element={
                <PrivateAccess>
                  <SuspenseWrap>
                    <Heroes />
                  </SuspenseWrap>
                </PrivateAccess>
              }
            ></Route>
            <Route
              path={"episodes"}
              element={
                <PrivateAccess>
                  <SuspenseWrap>
                    <Episodes />
                  </SuspenseWrap>
                </PrivateAccess>
              }
            ></Route>
            <Route
              path={"locations"}
              element={
                <PrivateAccess>
                  <SuspenseWrap>
                    <Locations />
                  </SuspenseWrap>
                </PrivateAccess>
              }
            ></Route>
          </Route>
        </Route>
        <Route
          path={"categories/episodes/:id"}
          element={
            <PrivateAccess>
              <SuspenseWrap>
                <EpisodesCard />
              </SuspenseWrap>
            </PrivateAccess>
          }
        />
        <Route
          path={"categories/locations/:id"}
          element={
            <PrivateAccess>
              <SuspenseWrap>
                <LocationsCard />
              </SuspenseWrap>
            </PrivateAccess>
          }
        />
        <Route
          path={"categories/heroes/:id"}
          element={
            <PrivateAccess>
              <SuspenseWrap>
                <HeroesCard />
              </SuspenseWrap>
            </PrivateAccess>
          }
        />
        <Route
          path={"/login"}
          element={
            <SuspenseWrap>
              <Signin />
            </SuspenseWrap>
          }
        />
        <Route
          path={"*"}
          element={
            <SuspenseWrap>
              <NotFound />
            </SuspenseWrap>
          }
        />
      </Routes>
    </Auth>
  );
}
