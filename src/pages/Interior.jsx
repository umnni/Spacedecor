import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/int-hero.avif";
import residentialImage from "../assets/images/int-Residential Interiors.avif";
import kitchenImage from "../assets/images/int-modular kitchen.webp";
import commercialImage from "../assets/images/int-comercial spaces.webp";
import processLivingImage from "../assets/images/int- how 2.webp";
import processBedroomImage from "../assets/images/int-how1.webp";
import galleryOne from "../assets/images/gallery of posibility 1.webp";
import galleryTwo from "../assets/images/gallery of posibility 2.webp";
import galleryThree from "../assets/images/gallery of posibility 3.webp";
import ctaImage from "../assets/images/int-cta.webp";
import "./Interior.css";

const services = [
  ["01.", "Residential Interiors", residentialImage, "Residential interior design", "Luxury homes, apartments, villas, bedrooms, kitchens and living rooms."],
  ["02.", "Modular Kitchen", kitchenImage, "Modular kitchen design", "Elegant storage, premium finishes, durable surfaces and smart workflow."],
  ["03.", "Commercial Spaces", commercialImage, "Commercial interior design", "Offices, studios, retail and hospitality spaces with strong brand presence."],
];

const processSteps = [
  ["01", "Discovery & Site Study", "We understand your lifestyle, budget, space measurements and design goals."],
  ["02", "Moodboard & Planning", "We prepare layouts, palette, material direction, lighting and furniture planning."],
  ["03", "Execution & Styling", "Our team handles design detailing, vendor coordination, décor and finishing touches."],
  ["04", "Final Handover", "Your completed space is handed over with a premium, clean, ready-to-live finish."],
];

function InteriorStat({ target, suffix, label }) {
  const [value, setValue] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const startedAt = performance.now();
      const update = (now) => {
        const progress = Math.min((now - startedAt) / 1500, 1);
        setValue(Math.floor((1 - Math.pow(1 - progress, 3)) * target));
        if (progress < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
      observer.disconnect();
    }, { threshold: 0.35 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [target]);

  return <div className="interiorStat"><strong ref={elementRef}>{value}{suffix}</strong><span>{label}</span></div>;
}

export default function Interior() {
  useEffect(() => {
    const elements = document.querySelectorAll(".interiorPage .interiorReveal,.interiorPage .interiorLine");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("isVisible"));
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
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="interiorPage">
      <main className="interiorMain">
        <section className="interiorHero">
          <div className="interiorHeroCard interiorReveal">
            <img src={heroImage} alt="Luxury living room interior design" loading="eager" decoding="async" />
            <div className="interiorHeroShade" />
            <div className="interiorHeroContent">
              <p className="interiorEyebrow">Interior Design Studio</p>
              <h1>Designed for<br />beautiful living.</h1>
              <div className="interiorLine" />
              <p>We create refined residential and commercial interiors where comfort, function, material detailing, and timeless elegance work together beautifully.</p>
              <div className="interiorHeroActions">
                <Link className="interiorPrimaryButton" to="/consultation">Book Consultation</Link>
                <a className="interiorSecondaryButton" href="#interior-services">Explore Work</a>
              </div>
            </div>
            <div className="interiorStats">
              <InteriorStat target={150} suffix="+" label="Projects" />
              <InteriorStat target={20} suffix="+" label="Years" />
            </div>
          </div>
        </section>

        <section className="interiorIntro">
          <div className="interiorIntroGrid">
            <div className="interiorReveal"><p className="interiorEyebrow">Our Interior Approach</p><h2>Spaces that reflect<br /><span>your lifestyle.</span></h2></div>
            <div className="interiorIntroCopy interiorReveal"><p>From first moodboard to final styling, every detail is planned with purpose — layouts, lighting, furniture, textures, colour palettes, storage, décor, and Vastu-friendly flow. The result is a space that looks luxurious and works effortlessly in everyday life.</p><div className="interiorLine" /></div>
          </div>
        </section>

        <section className="interiorServices" id="interior-services">
          <div className="interiorContainer">
            <div className="interiorSectionHead interiorReveal"><p className="interiorEyebrow">What We Design</p><h2>Signature Services</h2><div className="interiorLine" /></div>
            <div className="interiorServiceGrid">
              {services.map(([number, title, image, alt, copy]) => (
                <article className="interiorServiceCard interiorReveal" key={title}>
                  <img src={image} alt={alt} loading="lazy" decoding="async" />
                  <div className="interiorCardShade" />
                  <span className="interiorCardNumber">{number}</span>
                  <div className="interiorCardContent"><h3>{title}</h3><p>{copy}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="interiorProcess">
          <div className="interiorProcessGrid">
            <div className="interiorProcessVisual interiorReveal">
              <div><img src={processLivingImage} alt="Warm luxury living room" loading="lazy" decoding="async" /></div>
              <div className="interiorProcessStack"><div><img src={processBedroomImage} alt="Elegant bedroom design" loading="lazy" decoding="async" /></div><article><strong>4</strong><span>Step Design Process</span></article></div>
            </div>
            <div className="interiorProcessContent interiorReveal">
              <p className="interiorEyebrow">How We Work</p><h2>From concept<br /><span>to completion.</span></h2>
              <div className="interiorSteps">
                {processSteps.map(([number, title, copy]) => <article key={number}><strong>{number}</strong><div><h3>{title}</h3><p>{copy}</p></div></article>)}
              </div>
            </div>
          </div>
        </section>

        <section className="interiorGallery">
          <div className="interiorContainer">
            <div className="interiorGalleryHead interiorReveal"><p className="interiorEyebrow">Selected Inspirations</p><h2>A gallery of possibilities.</h2></div>
            <div className="interiorGalleryGrid">
              <figure className="interiorReveal"><img src={galleryOne} alt="Premium interior inspiration" loading="lazy" decoding="async" /></figure>
              <figure className="interiorReveal"><img src={galleryTwo} alt="Luxury dining interior" loading="lazy" decoding="async" /></figure>
              <figure className="interiorReveal"><img src={galleryThree} alt="Modern home interior" loading="lazy" decoding="async" /></figure>
            </div>
          </div>
        </section>

        <section className="interiorCta">
          <div className="interiorCtaCard interiorReveal">
            <img src={ctaImage} alt="Luxury home interior" loading="lazy" decoding="async" />
            <div className="interiorCtaShade" />
            <div className="interiorCtaContent">
              <p className="interiorEyebrow">Start Your Transformation</p>
              <h2>Let’s design your<br />dream interior.</h2>
              <p>Share your space, style, and vision — we will create an interior concept that feels elegant, balanced, and made for you.</p>
              <Link className="interiorPrimaryButton" to="/contact">Talk To The Team</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
