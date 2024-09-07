// types
import { IUseGetDataGeneric } from "@/types";

export function getUniqueObjects<T extends IUseGetDataGeneric>(objects: T[]) {
  const unique = objects.reduce((accumulator, current) => {
    const isIntersectionObjects = (element: { id: number }) =>
      element.id === current.id;

    if (accumulator.findIndex(isIntersectionObjects) === -1) {
      accumulator.push(current);
    }

    return accumulator;
  }, [] as T[]);

  return unique;
}
