// react
import { Suspense } from "react";

// compoents
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import { Flex, Loader } from "@mantine/core";

function Loading() {
  return (
    <Flex justify={"center"} align={"center"}>
      <Loader size={30} />
    </Flex>
  );
}

export function SuspenseWrap({ children }: { children: JSX.Element }) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </ErrorBoundary>
  );
}
