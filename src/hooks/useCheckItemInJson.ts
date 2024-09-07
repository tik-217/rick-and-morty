// react-router-dom;
import { useParams } from "react-router-dom";

export default function useCheckItemInJson<T>({ json }: { json: Array<T> }) {
  const { id: paramsId } = useParams();

  const episodeId = paramsId && parseInt(paramsId);
  const foundetObject = episodeId && json[episodeId - 1];

  if (foundetObject) {
    return foundetObject;
  }
  return false;
}
