"use client";

import { useState, type FormEvent } from "react";
import styles from "./earlyAccess.module.css";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function EarlyAccess() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!EMAIL_PATTERN.test(email.trim())) {
      setError("Please check your email");
      return;
    }

    setError("");
    setEmail("");
  }

  return (
    <section
      id="early-access"
      className={styles.earlyAccess}
      aria-labelledby="early-access-title"
    >
      <div className={styles.text}>
        <h2 id="early-access-title" className={styles.title}>
          Get early access today
        </h2>
        <p className={styles.description}>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label htmlFor="early-access-email" className="visually-hidden">
            Email address
          </label>
          <input
            id="early-access-email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="email@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? "early-access-error" : undefined}
            className={styles.input}
          />
          {error && (
            <p id="early-access-error" role="alert" className={styles.error}>
              {error}
            </p>
          )}
        </div>

        <button type="submit" className={styles.button}>
          Get Started For Free
        </button>
      </form>
    </section>
  );
}
