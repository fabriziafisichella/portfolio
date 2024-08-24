import style from "./experience.module.scss";
import { useContext } from "react";
import { globalContext } from "../../(context)/globalcontext";
import { useLocale } from "next-intl";
import {
  experiencesListEN,
  experiencesListIT,
} from "../../utils/experiencesList";
import { Title } from "../Title/Title";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ExperienceCarousel } from "../ExperienceCarousel/ExperienceCarousel";

export function Experience() {
  const { experienceRef, isExperienceInView } = useContext(globalContext);
  const locale = useLocale();
  const t = useTranslations("Experiences");

  const experiences = (locale === "it" ? experiencesListIT : experiencesListEN)
    .filter((list) => list.show === true)
    .sort((a, b) => b.id - a.id);

  return (
    <div ref={experienceRef} className={style.container}>
      <Title title={`${t("title")}`} view={isExperienceInView} />

      <motion.div
        style={{
          transform: isExperienceInView ? "none" : "translateY(50px)",
          opacity: isExperienceInView ? 1 : 0,
          transition: isExperienceInView
            ? "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            : "none",
        }}
      >
        <ExperienceCarousel content={experiences} />
      </motion.div>
    </div>
  );
}
