"use client";
import { createContext, useRef } from "react";

const initialContext = {
  homeRef: { current: null },
  aboutRef: { current: null },
  portfolioRef: { current: null },
  socialsRef: { current: null },
  contactsRef: { current: null },
};
export const globalContext = createContext(initialContext);

const Context = ({ children }: { children: any }) => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const socialsRef = useRef(null);
  const contactsRef = useRef(null);

  const value = {
    homeRef,
    aboutRef,
    portfolioRef,
    socialsRef,
    contactsRef,
  };

  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
};

export default Context;
