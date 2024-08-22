import style from "./title.module.scss";
import { motion } from "framer-motion";

interface TitleProps {
  title: string;
  view: boolean;
}

export function Title({ title, view }: TitleProps) {
  
  const defaultAnimations = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className={style.title}
      style={{
        transform: view ? "none" : "translateY(-25px)",
        opacity: view ? 1 : 0,
        transition: view
          ? "all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
          : "none",
      }}
    >
      <span className={style.string}> </span>
      <span className={style.srOnly}>{title}</span>
      <motion.span
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
        aria-hidden
      >
        {title.split("").map((char, index) => (
          <motion.span key={index} variants={defaultAnimations}>{char}</motion.span>
        ))}
      </motion.span>
    </motion.div>
  );
}
