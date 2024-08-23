import style from "./experience.module.scss";
import { useContext } from "react";
import { globalContext } from "../../(context)/globalcontext";

export function Socials() {
  const { experienceRef, isExperienceInView } = useContext(globalContext);

  return (
    <div ref={experienceRef}>
      Hello, I'm the Socials component! <br />
      Here you will find links to all my social networks.
    </div>
  );
}
