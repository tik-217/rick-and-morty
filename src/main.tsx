// react
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// react-router-dom
import { BrowserRouter } from "react-router-dom";

// mantine
import { Container, MantineProvider } from "@mantine/core";

// app
import { MainRoutes } from "@/app/routes/MainRoutes";

// shared
import { Auth } from "@/shared/context/Auth";
import { MantineTheme } from "@/shared/ui/MantineTheme";

// styles
import "@/app/styles/index.css";
import "@mantine/core/styles.css";

const root = createRoot(document.getElementById("root") as HTMLDivElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider theme={MantineTheme}>
        <Container size="responsive">
          <Auth>
            <MainRoutes />
          </Auth>
        </Container>
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>
);
