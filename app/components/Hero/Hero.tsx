import style from "./hero.module.scss";
import heroImage from "../../assets/images/hero.png";
import { useContext } from "react";
import { globalContext } from "@/app/(context)/globalcontext";
import { motion } from "framer-motion";
import Image from "next/image";
import { codeList } from "@/app/utils/codeList";
import { Title } from "../Title/Title";

export function Hero() {
  const { homeRef, isHomeInView } = useContext<any>(globalContext);

  return (
    <div className={style.container} ref={homeRef}>
      <motion.div
        className={style.image}
        style={{
          transform: isHomeInView ? "none" : "translateY(-50px)",
          opacity: isHomeInView ? 1 : 0,
          transition: isHomeInView
            ? "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            : "none",
        }}
      >
        <Image
          src={heroImage}
          alt="Immagine di una ragazza che fluttua in universo di tecnologia"
          fill={false}
        />
        <div className={style.shadow}></div>
      </motion.div>

      <div className={style.section}>
        <Title title="Junior Front-End Developer" view={isHomeInView} />

        <div className={style.codes}>
          {codeList.map((code, index) => (
            <motion.div
              key={index}
              className={style.containerCode}
              initial={{ opacity: 0 }}
              animate={{ opacity: isHomeInView ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: isHomeInView ? 0.3 : 0,
                delay: isHomeInView ? index * 0.3 + 1 : 0,
              }}
            >
              <div
                className={style.backgroundCode}
                style={{
                  color: code.color,
                  textShadow: `0 0 10px ${code.color}`,
                }}
              >
                {code.name}
              </div>
              <div className={style.foregroundCode}>{code.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
