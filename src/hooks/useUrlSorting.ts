// // react
// import { useEffect, useState } from "react";

// // types
// import { ISortingTypes } from "../types";

// export default function useUrlSorting() {
//   const [sorting, setSorting] = useState<ISortingTypes>("ASC");

//   useEffect(() => {
//     const url = new URL(window.location.href);
//     url.searchParams.set("sort", sorting);

//     window.history.replaceState(null, "", url.href);
//   }, [sorting]);

//   const handleSorting = () => (sorting === "ASC" ? "DESC" : "ASC");

//   return { handleSorting, setSorting, sorting };
// }
