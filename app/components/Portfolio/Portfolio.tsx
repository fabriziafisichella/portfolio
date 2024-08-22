import style from "./portfolio.module.scss";
import { useContext } from "react";
import { globalContext } from "@/app/(context)/globalcontext";

export function Portfolio() {
  const { portfolioRef, isPortfolioInView } = useContext(globalContext);

  return (
    <div ref={portfolioRef}>
      Hello, I'm the Portfolio component! <br />
      Here you will find the showcase of <br />
      my projects and creations.
    </div>
  );
}
