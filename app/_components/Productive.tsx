import Image from "next/image";
import styles from "./productive.module.css";

export default function Productive() {
  return (
    <section className={styles.productive}>
      <Image
        src="/images/illustration-stay-productive.png"
        alt=""
        width={615}
        height={464}
        sizes="(min-width: 1024px) 615px, 100vw"
        className={styles.illustration}
      />

      <div className={styles.content}>
        <h2 className={styles.title}>Stay productive, wherever you are</h2>

        <div className={styles.body}>
          <div className={styles.paragraphs}>
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>

          <a href="#" className={styles.link}>
            See how Fylo works
            <Image
              src="/images/icon-arrow.svg"
              alt=""
              width={16}
              height={16}
              className={styles.link__icon}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
