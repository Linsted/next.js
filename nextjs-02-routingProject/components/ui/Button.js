import Link from "next/link";
import styles from "./Button.module.css";
import React from "react";

export default function Button({ link, children }) {
  return (
    <Link className={styles.btn} href={link}>
      {children}
    </Link>
  );
}
