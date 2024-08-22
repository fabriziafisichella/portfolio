import style from "./about.module.scss";
import { Title } from "../Title/Title";
import { useContext } from "react";
import { globalContext } from "@/app/(context)/globalcontext";
import { motion } from "framer-motion";

export function About() {
  const { aboutRef, isAboutInView } = useContext<any>(globalContext);

  return (
    <div className={style.container} ref={aboutRef}>
      <div className={style.content}>
        <Title title="Who am I?" view={isAboutInView} />
        <motion.div
          className={style.image}
          style={{
            transform: isAboutInView ? "none" : "translateY(-50px)",
            opacity: isAboutInView ? 1 : 0,
            transition: isAboutInView
              ? "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              : "none",
          }}
        >
          <p>Motto</p>
          <p>Motto name</p>
        </motion.div>
        <div>All about me.</div>
      </div>
      <div className={style.image}>Image</div>
    </div>
  );
}
