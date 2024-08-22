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
};

export function NavBar() {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const { homeRef, aboutRef, portfolioRef, socialsRef, contactsRef } =
    useContext(globalContext);

  const navbarList: NavBarItem[] = [
    {
      name: "Home",
      ref: homeRef,
    },
    {
      name: "About Me",
      ref: aboutRef,
    },
    {
      name: "Portfolio",
      ref: portfolioRef,
    },
    {
      name: "Socials",
      ref: socialsRef,
    },
    {
      name: "Contacts",
      ref: contactsRef,
    },
  ];

  return (
    <div className={style.container}>
      <div className={style.elements}>
        <div className={style.title}>Fabrizia Fisichella</div>

        <div className={style.menuMobile}>
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
              onClick={(e) => {
                e.preventDefault();
                menu.ref?.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
              }}
            >
              {menu.name}
            </span>
          ))}
        </div>
        
        <LanguageSwitcher />
      </div>
    </div>
  );
}
