"use client";

import styles from "./page.module.scss";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Experience } from "./components/Experience/Experience";
import { Contacts } from "./components/Contacts/Contacts";

function Home() {

  return (

        <main className={styles.main}>
          <div className={styles.container}>
            <section className={styles.content}>
              <Hero />
            </section>
            <section className={styles.content}>
              <About />
            </section>
            <section className={styles.content}>
              <Portfolio />
            </section>
            <section className={styles.content}>
              <Experience />
            </section>
            <section className={styles.content}>
              <Contacts />
            </section>
          </div>
        </main>
  );
}

export default Home;
