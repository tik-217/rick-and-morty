// react
import { useEffect, useState } from "react";

// axios
import axios from "axios";

// shared
import { getUniqueObjects } from "@/shared/utils/getUniqueObjects";

// types
import {
  IResRickAndMorty,
  IUseGetDataGeneric,
  IUseGetDataParams,
} from "../../types/types";

export function useGetRickAM<T extends IUseGetDataGeneric>({
  url,
  nextUrlPage,
}: IUseGetDataParams) {
  const [rickAM, setRickAM] = useState<IResRickAndMorty<T>>(
    {} as IResRickAndMorty<T>
  );
  const [haveNextPage, setHaveNextPage] = useState(true);
  const [fetchError, setFetchError] = useState(false);

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
        setFetchError(false);

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
        setFetchError(true);
      });
    // eslint-disable-next-line
  }, [nextUrlPage]);

  return { rickAM, haveNextPage, fetchError };
}
