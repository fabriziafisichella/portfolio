import style from "./contacts.module.scss";
import { useRef, useContext } from "react";
import { globalContext } from "../../(context)/globalcontext";
import { Title } from "../Title/Title";
import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export function Contacts() {
  const { contactsRef, isContactsInView } = useContext(globalContext);
  const t = useTranslations("Contacts");

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_084hk9r",
        "template_7g9se8i",
        form.current as HTMLFormElement,
        {
          publicKey: "T6CtT4805Odt07B9V",
        }
      )
      .then(
        () => {
          alert("SUCCESS!");
        },
        (error) => {
          alert("FAILED...");
        }
      );
  };

  return (
    <div ref={contactsRef} className={style.container}>
      <div className={style.contacts}>
        <Title title={`${t("title")}`} view={isContactsInView} />

        <motion.div
          className={style.info}
          style={{
            transform: isContactsInView ? "none" : "translateY(50px)",
            opacity: isContactsInView ? 1 : 0,
            transition: isContactsInView
              ? "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              : "none",
          }}
        >
          <p>
            <a href="https://www.linkedin.com/in/fabrizia-fisichella/">
              <FaLinkedin className={style.icon} />
            </a>
            <a href="https://github.com/fabriziafisichella">
              <FaGithub className={style.icon} />
            </a>
          </p>

          <p>{t("city")}</p>
          <p>
            <strong> +39 347 08 77 615 </strong> <br />
            {t("availability")}
          </p>

          <p>fabriziafisichella.gmail.com</p>
        </motion.div>
      </div>

      <motion.div
        className={style.form}
        initial={{ opacity: 0 }}
        animate={{ opacity: isContactsInView ? 3 : 0 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: isContactsInView ? 3 : 0,
        }}
      >
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            required
            name="name"
            placeholder={`${t("name")}`}
          />
          <br />
          <input type="email" name="email" required placeholder="Email" />
          <br />
          <textarea required name="message" placeholder={`${t("message")}`} />
          <br />
          <button type="submit">{t("send")}</button>
        </form>
      </motion.div>
    </div>
  );
}
