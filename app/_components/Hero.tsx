import Image from "next/image";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/illustration-intro.png"
        alt=""
        width={720}
        height={534}
        priority
        sizes="(min-width: 1024px) 720px, 304px"
        className={styles.illustration}
      />

      <div className={styles.content}>
        <h1 className={styles.title}>
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className={styles.description}>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <a href="#early-access" className={styles.button}>
          Get Started
        </a>
      </div>
    </section>
  );
}
