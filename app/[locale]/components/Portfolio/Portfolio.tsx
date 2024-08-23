import style from "./portfolio.module.scss";
import { useContext } from "react";
import { globalContext } from "../../(context)/globalcontext";

export function Portfolio() {
  const { portfolioRef, isPortfolioInView } = useContext(globalContext);

  return (
    <div ref={portfolioRef}>
      Portfolio • Section in progress
    </div>
  );
}
