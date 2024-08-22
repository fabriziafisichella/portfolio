
import style from "./title.module.scss";
import { motion } from "framer-motion";

interface TitleProps {
  title: string;
  view: boolean;
}

export function Title(
  { title, view }: TitleProps
) {

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
      {title}
    </motion.div>
  );
}
