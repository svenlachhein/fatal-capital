import Image from "next/image";
import BookPreviewModal from "./BookPreviewModal";


export default function Hero() {
  return (
    <section className="section hero" id="top">
      <div className="section-inner hero-inner">
        <div className="hero-text">
          <p className="section-label">Business Playbooks · Band II</p>
          <h1>Wie du an Risikokapital kommst und wann du es lieber sein lässt</h1>
          <p>
            Ein Prüfpfad in vier Teilen, sechzehn Kapiteln und zwölf Arbeitsblättern. Für Gründer, die wissen wollen, was ein Investor tatsächlich kauft. Vom ersten VC-Gespräch über das Term Sheet bis zur Folgerunde.
          </p>
          <div className="hero-buttons">
            <a className="btn btn-accent" href="https://buy.stripe.com/aFadR81xm3DZ0hq4MC6Zy01" target="_blank" rel="noopener noreferrer">
              Buch bestellen · 24 €
            </a>
            <a className="btn" href="https://lachhein-lierow.de/co-investment-check/">
              Co-Investment Check
            </a>
          </div>
        </div>
        <div className="hero-cover">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
            <Image
              src="/cover.jpg"
              alt="fatal capital – Cover"
              width={1200}
              height={1793}
              priority
            />
            <BookPreviewModal
              pageCount={20}
              previewBaseUrl="https://treditionstorage.blob.core.windows.net/assets/preview-9cf4b5bc-78a7-4910-b651-bb56967387ec-"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
