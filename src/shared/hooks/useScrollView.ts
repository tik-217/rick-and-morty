// react
import { MutableRefObject, useCallback, useRef } from "react";

// types
import { IUseScrollView } from "@/types";

export function useScrollView({
  setNextUrlPage,
  haveNextPage,
}: IUseScrollView) {
  const observer: MutableRefObject<IntersectionObserver | null> = useRef(null);

  const handlerNextPage = () => setNextUrlPage((prev) => prev + 1);

  const lastNodeElem = useCallback(
    (node: HTMLDivElement) => {
      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && haveNextPage) {
          handlerNextPage();
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },

    // eslint-disable-next-line
    [haveNextPage]
  );

  return {
    lastNodeElem,
  };
}
