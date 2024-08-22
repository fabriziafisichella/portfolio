import style from "./contacts.module.scss";
import { useContext } from "react";
import { globalContext } from "@/app/(context)/globalcontext";

export function Contacts() {
  const { contactsRef, isContactsInView } = useContext(globalContext);

  return (
    <div ref={contactsRef}>
      Hello, I'm the Contacts component! <br />
      Here you will find a module that will <br />
      lead to send direct emails to me.
    </div>
  );
}
