import style from "./hero.module.scss";
import heroImage from "../../assets/images/hero.png";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { codeList } from "@/app/utils/codeList";

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className={style.container}>
      <motion.div
        className={style.image}
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(-50px)",
          opacity: isInView ? 1 : 0,
          transition: isInView
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
        <motion.div
          className={style.title}
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(-25px)",
            opacity: isInView ? 1 : 0,
            transition: isInView
              ? "all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
              : "none",
          }}
        >
          <span className={style.string}> </span>
          Junior Front-End Developer
        </motion.div>

        <div className={style.codes}>
          {codeList.map((code, index) => (
            <motion.div
              ref={ref}
              key={index}
              className={style.containerCode}
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: isInView ? 0.3 : 0,
                delay: isInView ? index * 0.3 + 1 : 0,
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
