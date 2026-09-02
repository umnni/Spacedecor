import "./LegalPage.css";

const policySections = [
  {
    title: "1. Introduction",
    text: "This policy explains how Space Decor Belle collects, uses and protects the information you share when you visit our website, contact our team or request a consultation.",
  },
  {
    title: "2. Information We Collect",
    text: "We may collect your name, phone number, email address, project location, property details, design requirements and any information you voluntarily share through our forms, email, phone or WhatsApp.",
  },
  {
    title: "3. How We Use Information",
    text: "Your information helps us respond to enquiries, understand project requirements, provide quotations, share relevant service updates and improve our website and client experience.",
  },
  {
    title: "4. Data Protection",
    text: "We take reasonable measures to protect your personal information. Your details are handled carefully and are not sold, rented or used for unrelated purposes.",
  },
  {
    title: "5. Information Sharing",
    text: "We may share limited information with authorised team members, vendors or service partners only when it is necessary to respond to your request or support your project.",
  },
  {
    title: "6. Cookies and Analytics",
    text: "Our website may use basic cookies and analytics tools to understand visitor activity, measure website performance and improve the browsing experience.",
  },
  {
    title: "7. Third-Party Links",
    text: "Our website may link to WhatsApp, maps, social media and other external platforms. Space Decor Belle is not responsible for the privacy practices of those third-party services.",
  },
  {
    title: "8. Your Rights",
    text: "You may contact us to request access, correction or removal of your personal information, subject to reasonable legal and business requirements.",
  },
  {
    title: "9. Policy Updates",
    text: "We may update this policy when required. Any changes will be displayed on this page along with the latest update date.",
  },
];

export default function LegalPage() {
  return (
    <main className="legalPage">
      <section className="legalHero">
        <div className="legalHeroPattern" aria-hidden="true" />
        <div className="legalHeroContent">
          <p className="legalEyebrow">Space Decor Belle</p>
          <h1>Your Privacy<br />Matters.</h1>
          <div className="legalAccentLine" />
          <p>
            We respect your personal information and are committed to handling
            your details safely, transparently and responsibly.
          </p>
        </div>
      </section>

      <section className="legalContent">
        <div className="legalCard">
          <header className="legalHeading">
            <p className="legalEyebrow">Legal Information</p>
            <h2>Privacy Policy</h2>
            <p>Last updated: September 2026</p>
          </header>

          <div className="legalSections">
            {policySections.map((section) => (
              <article key={section.title}>
                <h3>{section.title}</h3>
                <p>{section.text}</p>
              </article>
            ))}

            <article>
              <h3>10. Contact Us</h3>
              <p>For questions about this policy or your personal information, contact us at:</p>
              <div className="legalContact">
                <a href="tel:+919654232327">(+91) 96542 32327</a>
                <a href="mailto:info@spacedecorbelle.com">info@spacedecorbelle.com</a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
