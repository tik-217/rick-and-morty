// react
import { useMemo, useState } from "react";

// react-router-dom
import { useSearchParams } from "react-router-dom";

export default function useSortingByParams<T>({ object }: { object: T[] }) {
  const [searchParams] = useSearchParams();
  const [sortLocations] = useState<T[]>(object);

  const sortParams = searchParams.get("sort");

  const sortedObject = useMemo(() => {
    if (sortParams === "DESC") {
      return sortLocations.map((_, i, arr) => arr[arr.length - 1 - i]);
    }
    return sortLocations;
    // eslint-disable-next-line
  }, [sortParams]);

  return sortedObject;
}
