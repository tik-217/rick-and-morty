import { Container, createTheme } from "@mantine/core";
import cx from "clsx";
import classes from "./MantineTheme.module.css";

export const MantineTheme = createTheme({
  components: {
    Container: Container.extend({
      classNames: (_, { size }) => ({
        root: cx({ [classes.responsiveContainer]: size === "responsive" }),
      }),
    }),
  },
});
