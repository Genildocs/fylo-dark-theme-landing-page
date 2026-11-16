import Image from "next/image";
import styles from "./testimonials.module.css";

const testimonials = [
  {
    name: "Satish Patel",
    role: "Founder & CEO, Huddle",
    avatar: "/images/profile-1.png",
  },
  {
    name: "Bruce McKenzie",
    role: "Founder & CEO, Huddle",
    avatar: "/images/profile-2.png",
  },
  {
    name: "Iva Boyd",
    role: "Founder & CEO, Huddle",
    avatar: "/images/profile-3.png",
  },
];

const quote =
  "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className={styles.testimonials}
      aria-label="Testimonials"
    >
      {/* Aspas decorativas que ficam atrás do primeiro card */}
      <span className={styles.quoteMark} aria-hidden="true">
        &ldquo;
      </span>

      <ul className={styles.list}>
        {testimonials.map((person) => (
          <li key={person.name}>
            <figure className={styles.card}>
              <blockquote className={styles.text}>
                <p>{quote}</p>
              </blockquote>
              <figcaption className={styles.author}>
                <Image
                  src={person.avatar}
                  alt=""
                  width={24}
                  height={24}
                  className={styles.avatar}
                />
                <span className={styles.author__info}>
                  <span className={styles.author__name}>{person.name}</span>
                  <span className={styles.author__role}>{person.role}</span>
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
