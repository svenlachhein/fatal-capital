import Link from "next/link";
import type { Metadata } from "next";
import ArbeitsblaetterForm from "@/components/ArbeitsblaetterForm";

export const metadata: Metadata = {
  title: "Arbeitsblätter – fatal capital",
  description:
    "Die 12 Arbeitsblätter zum Buch. Per E-Mail anfordern.",
  robots: { index: true, follow: true },
};

export default function Arbeitsblaetter() {
  return (
    <>
      <nav className="nav">
        <Link href="/" className="nav-logo">
          <span className="nav-logo-name">fatal capital</span>
          <span className="nav-logo-role">Business Playbooks · Band II</span>
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="/">Zurück zur Übersicht</Link>
          </li>
        </ul>
      </nav>

      <section className="section">
        <div className="section-inner ab-inner">
          <span className="section-label">Arbeitsblätter zum Buch</span>
          <h1>Die 12 Arbeitsblätter zum Buch.</h1>

          <p>
            Eine PDF mit den 12 Arbeitsblättern aus Fatal Capital. Trag
            deine E-Mail ein, bestätige den Link, dann ist sie unterwegs.
          </p>

          <p className="ab-hint">
            Die Blätter ergeben Sinn, wenn du das Buch gelesen hast. Die volle
            Methodik steht dort, nicht auf dem Blatt.
          </p>

          <ArbeitsblaetterForm />
        </div>
      </section>
    </>
  );
}
