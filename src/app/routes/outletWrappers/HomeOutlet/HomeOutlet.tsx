import { PageTitle } from "@/widgets/PageTitle/PageTitle";
import { Outlet, useParams } from "react-router-dom";
import "./HomeOutlet.css";

export function HomeOutlet() {
  const params = useParams();

  return (
    <>
      {!params.id && (
        <div className="home">
          <PageTitle text={"Приветствую во вселенной Рика и Морти"} />
        </div>
      )}
      <Outlet />
    </>
  );
}
