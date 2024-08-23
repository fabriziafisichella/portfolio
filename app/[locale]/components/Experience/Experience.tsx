import style from "./socials.module.scss";
import { useContext } from "react";
import { globalContext } from "../../(context)/globalcontext";

export function Experience() {
  const { experienceRef, isExperienceInView } = useContext(globalContext);

  return (
    <div ref={experienceRef}>
      Experience • Section in progress
    </div>
  );
}
