import style from "./portfolio.module.scss";
import { useContext } from "react";
import { globalContext } from "../../(context)/globalcontext";
import { portfolioListEN, portfolioListIT } from "../../utils/portfolioList";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Title } from "../Title/Title";
import { PortfolioCarousel } from "../PortfolioCarousel/PortfolioCarousel";

export function Portfolio() {
  const { portfolioRef, isPortfolioInView } = useContext(globalContext);
  const locale = useLocale();

  const portfolio = (
    locale === "it" ? portfolioListIT : portfolioListEN
  ).sort((a, b) => b.id - a.id);

  return (
    <div ref={portfolioRef}>
      <Title title={"Portfolio"} view={isPortfolioInView} />
      <motion.div
        style={{
          transform: isPortfolioInView ? "none" : "translateY(50px)",
          opacity: isPortfolioInView ? 1 : 0,
          transition: isPortfolioInView
            ? "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            : "none",
        }}
      >
        <PortfolioCarousel content={portfolio} />
      </motion.div>
    </div>
  );
}
