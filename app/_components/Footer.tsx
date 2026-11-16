import Image from "next/image";
import styles from "@/app/_components/footer.module.css";

const institutionalLinks = [
  ["About Us", "Jobs", "Press", "Blog"],
  ["Contact Us", "Terms", "Privacy"],
];

/* Os ícones das redes são PNGs do Figma usados como máscara:
   a cor vem do CSS (branco, ciano no hover). */
const socialLinks = [
  { label: "Facebook", icon: "/images/icon-facebook.png", w: 7.03, h: 14.73 },
  { label: "Twitter", icon: "/images/icon-twitter.png", w: 20.3, h: 20.15 },
  {
    label: "Instagram",
    icon: "/images/icon-instagram.png",
    w: 14.69,
    h: 14.59,
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        {/* LOGO */}
        <div className={styles.footerGrid__logo}>
          <Image
            src="/images/logo-footer.svg"
            alt="Fylo"
            width={108}
            height={31}
          />
        </div>

        {/* CONTATO */}
        <address className={styles.contact}>
          <p className={`${styles.contact__item} ${styles.contact__address}`}>
            <span className={styles.icon}>
              <Image
                src="/images/icon-location.svg"
                alt=""
                width={12.375}
                height={18}
              />
            </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>

          <ul className={styles.contact__list}>
            <li className={styles.contact__item}>
              <span className={styles.icon}>
                <Image
                  src="/images/icon-phone.svg"
                  alt=""
                  width={18}
                  height={18}
                  className={styles.icon__phone}
                />
              </span>
              <a href="tel:+15431234567" className={styles.link}>
                +1-543-123-4567
              </a>
            </li>
            <li className={styles.contact__item}>
              <span className={styles.icon}>
                <Image
                  src="/images/icon-email.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </span>
              <a href="mailto:example@fylo.com" className={styles.link}>
                example@fylo.com
              </a>
            </li>
          </ul>
        </address>

        {/* INSTITUCIONAL */}
        <nav className={styles.institutional} aria-label="Institucional">
          {institutionalLinks.map((column) => (
            <ul key={column[0]} className={styles.linkList}>
              {column.map((label) => (
                <li key={label}>
                  <a href="#" className={styles.navLink}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </nav>

        {/* SOCIAL MEDIA */}
        <ul className={styles.social}>
          {socialLinks.map(({ label, icon, w, h }) => (
            <li key={label}>
              <a href="#" className={styles.social__link} aria-label={label}>
                <Image
                  src="/images/social-oval.svg"
                  alt=""
                  width={31.2241}
                  height={31}
                  className={styles.social__oval}
                />
                <span
                  className={styles.social__icon}
                  style={{
                    width: w,
                    height: h,
                    maskImage: `url(${icon})`,
                    WebkitMaskImage: `url(${icon})`,
                  }}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
