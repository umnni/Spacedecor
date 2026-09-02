import { useEffect, useState } from "react";
import contactHeroImage from "../assets/images/10.webp";
import "./Contact.css";

const services = [
  ["ph-house-line", "Interior", "Elegant residential and commercial interior design solutions."],
  ["ph-compass", "Vastu", "Balanced spaces designed with energy, comfort and harmony."],
  ["ph-sparkle", "Decor", "Premium decorative styling for refined and memorable spaces."],
];

export default function Contact() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    const items = document.querySelectorAll(".contactPage .contactReveal,.contactPage .contactLine");
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("isVisible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("isVisible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const message = [
      "*New Contact Enquiry — Space Decor Belle*", "",
      "*Name:* " + data.get("name"),
      "*Phone:* " + data.get("phone"),
      "*Email:* " + (data.get("email") || "Not provided"),
      "*Service:* " + data.get("service"),
      "*Project:* " + (data.get("message") || "Not provided"),
    ].join("\\n");
    setStatus("Thank you. Opening WhatsApp with your enquiry…");
    window.open("https://wa.me/919654232327?text=" + encodeURIComponent(message), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="contactPage">
      <main className="contactMain">
        <section className="contactHero">
          <div className="contactHeroCard contactReveal">
            <img src={contactHeroImage} alt="Luxury interior designed by Space Decor Belle" loading="eager" decoding="async" />
            <div className="contactHeroShade" />
            <div className="contactHeroContent">
              <p className="contactEyebrow">Contact Us</p>
              <h1>Let’s Design<br />Your Dream Space.</h1>
              <div className="contactLine" />
              <p className="contactHeroCopy">Share your vision with us. From luxury interiors to Vastu consultation and decor styling, our team will help you create a space that feels elegant, functional and truly yours.</p>
            </div>
          </div>
        </section>

        <section className="contactDetailsSection">
          <div className="contactDetailsGrid">
            <div className="contactInfoColumn">
              <article className="contactPanel contactReveal">
                <p className="contactEyebrow">Talk To The Team</p>
                <h2>Start your interior journey with us.</h2>
                <div className="contactInfoList">
                  <a className="contactInfoItem" href="tel:+919654232327"><span className="contactInfoIcon"><i className="ph ph-phone" /></span><span><strong>Phone</strong><b>(+91) 96542 32327</b></span></a>
                  <a className="contactInfoItem" href="mailto:info@spacedecorbelle.com"><span className="contactInfoIcon"><i className="ph ph-envelope-simple" /></span><span><strong>Email</strong><b>info@spacedecorbelle.com</b></span></a>
                  <div className="contactInfoItem"><span className="contactInfoIcon"><i className="ph ph-map-pin" /></span><span><strong>Studio</strong><b>K1, Green Park Extension, New Delhi – 110016<small>Opposite MCD Nursery Office</small></b></span></div>
                </div>
              </article>
              <article className="contactHours contactReveal">
                <p className="contactEyebrow">Working Hours</p>
                <div><p><span>Monday – Saturday</span><span>10 AM – 7 PM</span></p><p><span>Sunday</span><span>By Appointment</span></p></div>
              </article>
            </div>

            <article className="contactPanel contactFormPanel contactReveal">
              <p className="contactEyebrow">Send Message</p>
              <h2>Book a Consultation</h2>
              <form className="contactForm" onSubmit={handleSubmit}>
                <label><span>Your name *</span><input name="name" type="text" placeholder="Enter your full name" autoComplete="name" required /></label>
                <label><span>Phone number *</span><input name="phone" type="tel" placeholder="+91 98765 43210" autoComplete="tel" pattern="[0-9+() -]{10,18}" required /></label>
                <label className="contactFullField"><span>Email address</span><input name="email" type="email" placeholder="you@example.com" autoComplete="email" /></label>
                <label className="contactFullField"><span>Select service *</span><select name="service" defaultValue="" required><option value="" disabled>Choose a service</option><option>Interior Designing</option><option>Vastu Consultancy</option><option>Decorative Designs</option><option>Full Space Makeover</option></select></label>
                <label className="contactFullField"><span>Tell us about your project</span><textarea name="message" placeholder="Rooms, location, budget, timeline or any ideas you have..." /></label>
                <button className="contactSubmit contactFullField" type="submit">Submit Enquiry <i className="ph ph-arrow-up-right" /></button>
                <p className="contactFormStatus contactFullField" role="status">{status}</p>
              </form>
            </article>
          </div>
        </section>

        <section className="contactServices">
          <div className="contactServicesGrid">
            {services.map(([icon, title, copy]) => (
              <article className="contactServiceCard contactReveal" key={title}>
                <i className={"ph " + icon} /><h3>{title}</h3><p>{copy}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
