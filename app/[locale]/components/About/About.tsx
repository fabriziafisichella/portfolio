import style from "./about.module.scss";
import profileImage from "../../assets/images/profile.png";
import { useTranslations } from "next-intl";
import { Title } from "../Title/Title";
import { useContext } from "react";
import { globalContext } from "../../(context)/globalcontext";
import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  const { aboutRef, isAboutInView } = useContext<any>(globalContext);

  const t = useTranslations("About");
  const descriptionParts = t("description").split("Junior Software Developer");

  const defaultAnimations = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className={style.container} ref={aboutRef}>
      <div className={style.content}>
        <Title title={`${t("title")}`} view={isAboutInView} />

        <div className={style.motto}>
          <p className={style.srOnly}>{t("motto")}</p>
          <motion.p
            className={style.quote}
            initial="hidden"
            animate={isAboutInView ? "visible" : "hidden"}
            transition={{
              duration: isAboutInView ? 0.5 : 0,
              staggerChildren: isAboutInView ? 0.1 : 0,
            }}
            aria-hidden
          >
            {t("motto")
              .split("")
              .map((char, index) => (
                <motion.span key={index} variants={defaultAnimations}>
                  {char}
                </motion.span>
              ))}
          </motion.p>
          <motion.p
            className={style.author}
            initial={{ opacity: 0 }}
            animate={{ opacity: isAboutInView ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: isAboutInView ? 0.3 : 0,
              delay: isAboutInView ? 5 : 0,
            }}
          >
            {t("motto_author")}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isAboutInView ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: isAboutInView ? 2 : 0,
          }}
          className={style.description}
        >
          {descriptionParts[0]}
          <strong>Junior Software Developer</strong>
          {descriptionParts[1]}
        </motion.div>
      </div>
      <motion.div
        className={style.image}
        initial={{ opacity: 0 }}
        animate={{ opacity: isAboutInView ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: isAboutInView ? 1 : 0,
        }}
      >
        <Image
          src={profileImage}
          alt="Immagine di una ragazza che fluttua in universo di tecnologia"
          fill={false}
        />
      </motion.div>
    </div>
  );
}
