import Link from "next/link";
import styles from "./Button.module.css";
import React from "react";

export default function Button({ link, children, onClick }) {
  if (link) {
    return (
      <Link className={styles.btn} href={link}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles.btn} onClick={onClick} type="submit">
      {children}
    </button>
  );
}
