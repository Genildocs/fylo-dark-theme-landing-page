import styles from "@/app/page.module.css";
import Hero from "@/app/_components/Hero";
import Features from "@/app/_components/Features";
import Productive from "@/app/_components/Productive";
import Testimonials from "@/app/_components/Testimonials";
import EarlyAccess from "@/app/_components/EarlyAccess";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <Features />
      <Productive />
      <Testimonials />
      <EarlyAccess />
    </div>
  );
}
