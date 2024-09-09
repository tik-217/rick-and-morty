// react-router-dom
import { useLocation, useNavigate } from "react-router-dom";

// react
import { useContext } from "react";

// providers
import { AuthContext } from "@/shared/context/Auth";

// mantine
import { useForm } from "@mantine/form";
import {
  Group,
  Button,
  Flex,
  Title,
  PasswordInput,
  Input,
} from "@mantine/core";

// styles
import "./SignIn.css";

export function SignIn() {
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const locations = useLocation();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  function onSubmit(values: typeof form.values) {
    signIn(values.email, () => navigate(locations.state?.from ?? "/"));
  }

  return (
    <Flex
      className="signIn"
      direction={{ base: "column" }}
      align="center"
      justify="center"
    >
      <Title order={3} mb={10}>
        Login
      </Title>
      <Group mb={"20%"}>
        <form
          onSubmit={form.onSubmit((values) => onSubmit(values))}
          className={"inputsForm"}
        >
          <Input.Wrapper
            label="Email"
            withAsterisk
            mt={15}
            mb={15}
            id="userEmail"
          >
            <Input
              placeholder="Your email"
              type="email"
              id="userEmail"
              key={form.key("email")}
              {...form.getInputProps("email")}
            />
          </Input.Wrapper>
          <Input.Wrapper label="Password" withAsterisk mt={15} mb={15}>
            <PasswordInput
              placeholder="Your password"
              key={form.key("password")}
              {...form.getInputProps("password")}
            />
          </Input.Wrapper>
          <Group justify="center" mt="md">
            <Button type="submit" fullWidth>
              Войти
            </Button>
          </Group>
        </form>
      </Group>
    </Flex>
  );
}
