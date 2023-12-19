import styles from "./style.module.scss";
import Link from "next/link";

export default function index() {
  return (
    <div className={styles.footer}>
      <Link
        className="md:text-xl"
        href="https://web.facebook.com/leadafriqueinternational?_rdc=1&_rdr"
        target="_blank"
      >
        Facebook
      </Link>
      <Link
        className="md:text-xl"
        href="https://www.instagram.com/leadafrique/"
        target="_blank"
      >
        Instagram
      </Link>
      <Link
        className="md:text-2xl"
        href="https://x.com/LeadAfrique?s=20"
        target="_blank"
      >
        𝕏
      </Link>
      <Link
        className="md:text-xl"
        href="https://www.linkedin.com/company/leadafrique-internatonal/"
        target="_blanks"
      >
        LinkedIn
      </Link>
    </div>
  );
}
