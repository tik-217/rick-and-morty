// react-router-dom;
import { useParams } from "react-router-dom";

export function useCheckItemInJson<T>({ findObject }: { findObject: T[] }) {
  const { id: paramsId } = useParams();

  if (!paramsId) return;
  if (!findObject) return;

  const id = +paramsId;
  const foundetObject = findObject[id - 1];

  if (foundetObject) {
    return foundetObject;
  }
  return false;
}
