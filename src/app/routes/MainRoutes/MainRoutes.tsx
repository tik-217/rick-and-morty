// react
import { lazy } from "react";

// react-router-dom
import { Navigate, Route, Routes } from "react-router-dom";

// providers
import { PrivateAccess } from "@/shared/providers/PrivateAccess/PrivateAccess";
import { SuspenseWrap } from "@/shared/providers/SuspenseWrap/SuspenseWrap";

// pages
const Home = lazy(() =>
  import("@/pages/Home").then(({ Home }) => ({ default: Home }))
);
const HomeOutlet = lazy(() =>
  import("@/app/routes/outletWrappers/HomeOutlet/HomeOutlet").then(
    ({ HomeOutlet }) => ({
      default: HomeOutlet,
    })
  )
);
const Heroes = lazy(() =>
  import("@/pages/Heroes").then(({ Heroes }) => ({ default: Heroes }))
);
const HeroesCard = lazy(() =>
  import("@/pages/HeroesCard").then(({ HeroesCard }) => ({
    default: HeroesCard,
  }))
);
const HeroesOutlet = lazy(() =>
  import("@/app/routes/outletWrappers/HeroesOutlet/HeroesOutlet").then(
    ({ HeroesOutlet }) => ({
      default: HeroesOutlet,
    })
  )
);
const Signin = lazy(() =>
  import("@/pages/SignIn").then(({ SignIn }) => ({ default: SignIn }))
);
const Episodes = lazy(() =>
  import("@/pages/Episodes").then(({ Episodes }) => ({
    default: Episodes,
  }))
);
const EpisodesCard = lazy(() =>
  import("@/pages/EpisodesCard").then(({ EpisodesCard }) => ({
    default: EpisodesCard,
  }))
);
const EpisodesOutlet = lazy(() =>
  import("@/app/routes/outletWrappers/EpisodesOutlet/EpisodesOutlet").then(
    ({ EpisodesOutlet }) => ({
      default: EpisodesOutlet,
    })
  )
);
const Locations = lazy(() =>
  import("@/pages/Locations").then(({ Locations }) => ({
    default: Locations,
  }))
);
const LocationsCard = lazy(() =>
  import("@/pages/LocationsCard").then(({ LocationsCard }) => ({
    default: LocationsCard,
  }))
);
const LocationsOutlet = lazy(() =>
  import("@/app/routes/outletWrappers/LocationsOutlet/LocationsOutlet").then(
    ({ LocationsOutlet }) => ({
      default: LocationsOutlet,
    })
  )
);
const NotFound = lazy(() =>
  import("@/pages/NotFound").then(({ NotFound }) => ({
    default: NotFound,
  }))
);

export function MainRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SuspenseWrap>
            <HomeOutlet />
          </SuspenseWrap>
        }
      >
        <Route index element={<Home />} />
        <Route path="categories">
          <Route index element={<Navigate to={"heroes"} />} />
          <Route
            path={"heroes"}
            element={
              <PrivateAccess>
                <SuspenseWrap>
                  <HeroesOutlet />
                </SuspenseWrap>
              </PrivateAccess>
            }
          >
            <Route index element={<Heroes />} />
            <Route path={":id"} element={<HeroesCard />} />
          </Route>
          <Route
            path={"episodes"}
            element={
              <PrivateAccess>
                <SuspenseWrap>
                  <EpisodesOutlet />
                </SuspenseWrap>
              </PrivateAccess>
            }
          >
            <Route index element={<Episodes />} />
            <Route path={":id"} element={<EpisodesCard />} />
          </Route>
          <Route
            path={"locations"}
            element={
              <PrivateAccess>
                <SuspenseWrap>
                  <LocationsOutlet />
                </SuspenseWrap>
              </PrivateAccess>
            }
          >
            <Route index element={<Locations />} />
            <Route path={":id"} element={<LocationsCard />} />
          </Route>
        </Route>
      </Route>
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
  );
}
