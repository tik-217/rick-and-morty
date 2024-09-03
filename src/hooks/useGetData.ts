// react
import { useEffect, useState } from "react";

// axios
import axios from "axios";

// types
import {
  IResRickAndMorty,
  IUseGetDataGeneric,
  IUseGetDataParams,
} from "../types";

function useGetData<T extends IUseGetDataGeneric>({
  url,
  nextUrlPage,
}: IUseGetDataParams) {
  const [rickAM, setRickAM] = useState<IResRickAndMorty<T>>(
    {} as IResRickAndMorty<T>
  );
  const [haveNextPage, setHaveNextPage] = useState(true);

  function getUniqueObjects(objects: T[]) {
    let unique = objects.reduce((accumulator, current) => {
      const isIntersectionObjects = (element: { id: number }) =>
        element.id === current.id;

      if (accumulator.findIndex(isIntersectionObjects) === -1) {
        accumulator.push(current);
      }

      return accumulator;
    }, [] as T[]);

    return unique;
  }

  useEffect(() => {
    if (!haveNextPage) return;

    const res = axios<IResRickAndMorty<T>>({
      method: "GET",
      url,
      params: {
        page: nextUrlPage,
      },
    });

    res
      .then(({ data }) => {
        setRickAM((prev) => {
          const concatArr = prev.results
            ? [...prev.results, ...data.results]
            : data.results;

          const unique = getUniqueObjects(concatArr);

          return {
            info: data.info,
            results: unique,
          };
        });

        if (nextUrlPage >= data.info.pages) setHaveNextPage(false);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, [nextUrlPage]);

  return { rickAM, haveNextPage };
}

export default useGetData;
