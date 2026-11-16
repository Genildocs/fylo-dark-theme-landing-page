import Image from "next/image";
import styles from "./features.module.css";

/*
 * Cada ícone é um SVG exportado do Figma. As posições (left/top) dentro da
 * caixa de 104px são as do design; o ícone "Access" é composto por 3 camadas.
 */
const features = [
  {
    title: "Access your files, anywhere",
    text: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    layers: [
      {
        src: "/images/icon-access-anywhere-bg.svg",
        w: 82.5333,
        h: 76.9207,
        x: 12.11,
        y: 14.58,
      },
      {
        src: "/images/icon-access-anywhere-map.svg",
        w: 17.7794,
        h: 17.7509,
        x: 40.12,
        y: 29.96,
      },
      {
        src: "/images/icon-access-anywhere-place.svg",
        w: 4.74118,
        h: 5.91698,
        x: 40.12,
        y: 29.96,
      },
    ],
  },
  {
    title: "Security you can trust",
    text: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    layers: [
      {
        src: "/images/icon-security.svg",
        w: 68.6545,
        h: 87.7061,
        x: 18.38,
        y: 9.04,
      },
    ],
  },
  {
    title: "Real-time collaboration",
    text: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    layers: [
      {
        src: "/images/icon-collaboration.svg",
        w: 85.1504,
        h: 70.4171,
        x: 9.1,
        y: 16.9,
      },
    ],
  },
  {
    title: "Store any type of file",
    text: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    layers: [
      {
        src: "/images/icon-any-file.svg",
        w: 91.4049,
        h: 63.4087,
        x: 7,
        y: 19.6,
      },
    ],
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.features} aria-label="Features">
      {features.map((feature) => (
        <article key={feature.title} className={styles.feature}>
          <div className={styles.icon} aria-hidden="true">
            {feature.layers.map((layer) => (
              <Image
                key={layer.src}
                src={layer.src}
                alt=""
                width={layer.w}
                height={layer.h}
                className={styles.icon__layer}
                style={{ left: layer.x, top: layer.y }}
              />
            ))}
          </div>
          <div className={styles.text}>
            <h2 className={styles.title}>{feature.title}</h2>
            <p className={styles.description}>{feature.text}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
