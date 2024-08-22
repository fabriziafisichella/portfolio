"use client";
import { createContext, useRef } from "react";
import { useInView } from "framer-motion";

const initialContext = {
  homeRef: { current: null },
  aboutRef: { current: null },
  portfolioRef: { current: null },
  socialsRef: { current: null },
  contactsRef: { current: null },
  isHomeInView: false,
  isAboutInView: false,
  isPortfolioInView: false,
  isSocialsInView: false,
  isContactsInView: false,
};

export const globalContext = createContext(initialContext);

const Context = ({ children }: { children: any }) => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const socialsRef = useRef(null);
  const contactsRef = useRef(null);

  const isHomeInView = useInView(homeRef);
  const isAboutInView = useInView(aboutRef);
  const isPortfolioInView = useInView(portfolioRef);
  const isSocialsInView = useInView(socialsRef);
  const isContactsInView = useInView(contactsRef);

  const value = {
    homeRef,
    aboutRef,
    portfolioRef,
    socialsRef,
    contactsRef,
    isHomeInView,
    isAboutInView,
    isPortfolioInView,
    isSocialsInView,
    isContactsInView,
  };

  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
};

export default Context;
