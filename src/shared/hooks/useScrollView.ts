// react
import { MutableRefObject, useCallback, useRef } from "react";

// types
import { IUseScrollView } from "@/shared/types/types";

export function useScrollView({
  setNextUrlPage,
  haveNextPage,
  fetchError,
}: IUseScrollView) {
  const observer: MutableRefObject<IntersectionObserver | null> = useRef(null);

  const handlerNextPage = () => setNextUrlPage((prev) => prev + 1);

  const lastNodeElem = useCallback(
    (node: HTMLDivElement) => {
      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && haveNextPage && !fetchError) {
          handlerNextPage();
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },

    // eslint-disable-next-line
    [haveNextPage, fetchError]
  );

  return {
    lastNodeElem,
  };
}
