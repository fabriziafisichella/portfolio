"use client";
import style from "./navbar.module.scss";
import { RefObject, useContext } from "react";
import { globalContext } from "../../(context)/globalcontext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Divide as Hamburger } from "hamburger-react";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

type NavBarItem = {
  name: string;
  ref: RefObject<HTMLElement>;
  condition: boolean;
};

export function NavBar() {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const {
    homeRef,
    aboutRef,
    portfolioRef,
    experienceRef,
    contactsRef,
    isHomeInView,
    isAboutInView,
    isExperienceInView,
    isContactsInView,
    isPortfolioInView,
  } = useContext(globalContext);

  const navbarList: NavBarItem[] = [
    {
      name: "Home",
      ref: homeRef,
      condition: isHomeInView,
    },
    {
      name: "About Me",
      ref: aboutRef,
      condition: isAboutInView,
    },
    {
      name: "Portfolio",
      ref: portfolioRef,
      condition: isPortfolioInView,
    },
    {
      name: "Experience",
      ref: experienceRef,
      condition: isExperienceInView,
    },
    {
      name: "Contacts",
      ref: contactsRef,
      condition: isContactsInView,
    },
  ];

  return (
    <div className={style.container}>
      <div className={style.elements}>
        <div className={style.title}>Fabrizia Fisichella</div>

        <div className={style.menuMobile}>
          <LanguageSwitcher />
          <Hamburger toggled={activeMenu} toggle={setActiveMenu} />

          <AnimatePresence>
            {activeMenu && (
              <motion.div
                key="modalMenu"
                className={style.modalMenu}
                initial={{ opacity: 0, translateX: 30 }}
                animate={{ opacity: 1, translateX: 0 }}
                exit={{ opacity: 0, translateX: 30 }}
                transition={{
                  ease: "linear",
                  duration: 0.3,
                  x: { duration: 1 },
                }}
              >
                {navbarList.map((menu, index) => (
                  <motion.div
                    key={index}
                    className={style.modalLinks}
                    style={{ color: menu.condition ? "#ff96d5" : "#fff" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.3 }}
                    onClick={(e) => {
                      e.preventDefault();
                      menu.ref?.current?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {menu.name}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className={style.menuDesktop}>
          {navbarList.map((menu, index) => (
            <span
              className={style.menuVoice}
              key={index}
              style={{ color: menu.condition ? "#ff96d5" : "#fff" }}
              onClick={(e) => {
                e.preventDefault();
                menu.ref?.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                });
              }}
            >
              {menu.name}
            </span>
          ))}
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}
