"use client";
import { createContext, useRef } from "react";
import { useInView } from "framer-motion";

const initialContext = {
  homeRef: { current: null },
  aboutRef: { current: null },
  portfolioRef: { current: null },
  experienceRef: { current: null },
  contactsRef: { current: null },
  isHomeInView: false,
  isAboutInView: false,
  isPortfolioInView: false,
  isExperienceInView: false,
  isContactsInView: false,
};

export const globalContext = createContext(initialContext);

const Context = ({ children }: { children: any }) => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const experienceRef = useRef(null);
  const contactsRef = useRef(null);

  const isHomeInView = useInView(homeRef);
  const isAboutInView = useInView(aboutRef);
  const isPortfolioInView = useInView(portfolioRef);
  const isExperienceInView = useInView(experienceRef);
  const isContactsInView = useInView(contactsRef);

  const value = {
    homeRef,
    aboutRef,
    portfolioRef,
    experienceRef,
    contactsRef,
    isHomeInView,
    isAboutInView,
    isPortfolioInView,
    isExperienceInView,
    isContactsInView,
  };

  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
};

export default Context;
