// react
import { useMemo } from "react";

export function useSortingByParams<T>({
  object,
  sortingState,
}: {
  object: T[];
  sortingState: "ASC" | "DESC";
}) {
  const sortedObject = useMemo(() => {
    if (sortingState === "DESC") {
      return object.map((_, i, arr) => arr[arr.length - 1 - i]);
    }
    return object;
    // eslint-disable-next-line
  }, [object, sortingState]);

  return sortedObject ?? object;
}
