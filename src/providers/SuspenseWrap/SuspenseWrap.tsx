// react
import { Suspense } from "react";

// compoents
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

export default function SuspenseWrap({ children }: { children: JSX.Element }) {
  return (
    <ErrorBoundary>
      <Suspense fallback={"Loading..."}>{children}</Suspense>
    </ErrorBoundary>
  );
}
