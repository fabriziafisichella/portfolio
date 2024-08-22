import style from "./socials.module.scss";
import { useContext } from "react";
import { globalContext } from "../../(context)/globalcontext";

export function Socials() {
  const { socialsRef, isSocialsInView } = useContext(globalContext);

  return (
    <div ref={socialsRef}>
      Hello, I'm the Socials component! <br />
      Here you will find links to all my social networks.
    </div>
  );
}
