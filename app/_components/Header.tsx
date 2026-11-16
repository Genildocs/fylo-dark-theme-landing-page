import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

const links = [
  { label: "Features", url: "#features" },
  { label: "Team", url: "#testimonials" },
  { label: "Sign In", url: "#early-access" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      {/* O h1 fica no título do hero; aqui o logo é um link para o topo */}
      <Link href="/" className={styles.logo}>
        <Image
          src="/images/logo.svg"
          alt="Fylo"
          width={176}
          height={51}
          priority
          className={styles.logo__image}
        />
      </Link>

      <nav aria-label="Principal">
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.url} className={styles.link}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
