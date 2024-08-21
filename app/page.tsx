"use client";

import styles from "./page.module.scss";
import { useContext } from "react";
import { globalContext } from "./(context)/globalcontext";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Socials } from "./components/Socials/Socials";
import { Contacts } from "./components/Contacts/Contacts";

export default function Home() {
  const { homeRef, aboutRef, portfolioRef, socialsRef, contactsRef } =
    useContext(globalContext);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <section className={styles.content} ref={homeRef}>
          <Hero />
        </section>
        <section className={styles.content} ref={aboutRef}>
          <About />
        </section>
        <section className={styles.content} ref={portfolioRef}>
          <Portfolio />
        </section>
        <section className={styles.content} ref={socialsRef}>
          <Socials />
        </section>
        <section className={styles.content} ref={contactsRef}>
          <Contacts />
        </section>
      </div>
    </main>
  );
}
