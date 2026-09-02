import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/dec-herp.webp";
import wallImage from "../assets/images/dec-wall.webp";
import softImage from "../assets/images/dec-soft.webp";
import lightingImage from "../assets/images/dec-light mood.webp";
import curatedImage from "../assets/images/dec-curated.webp";
import artImage from "../assets/images/dec-art.webp";
import stylingImage from "../assets/images/dec-style.webp";
import detailImage from "../assets/images/dec-detail.webp";
import ctaImage from "../assets/images/dec-cta.avif";
import "./Decor.css";

const decorServices = [
  { number: "01.", title: "Wall Treatments", image: wallImage, alt: "Wall decor design", copy: "Accent walls, textures, panels, wallpapers, mouldings, and artistic wall styling." },
  { number: "02.", title: "Soft Furnishings", image: softImage, alt: "Soft furnishing design", copy: "Curtains, cushions, rugs, upholstery, throws, and fabric layering for comfort." },
  { number: "03.", title: "Lighting Mood", image: lightingImage, alt: "Lighting decor design", copy: "Chandeliers, lamps, warm lighting layers, wall sconces, and ambient glow planning." },
  { number: "04.", title: "Curated Accessories", image: curatedImage, alt: "Decorative accessories", copy: "Vases, mirrors, sculptures, centre pieces, shelves, table decor, and luxury accents." },
  { number: "05.", title: "Art Styling", image: artImage, alt: "Art styling", copy: "Artwork selection, gallery walls, frames, focal points, and emotional storytelling." },
  { number: "06.", title: "Final Styling", image: stylingImage, alt: "Complete styling", copy: "Complete room styling with balance, proportion, colour harmony, and premium finishing." },
];

const designedFor = [
  ["Living Room Decor", "Statement walls, coffee table styling, artwork, lighting, cushions, rugs, and display corners."],
  ["Bedroom Styling", "Bed-back styling, side tables, lamps, curtains, soft colours, fabrics, and calm finishing touches."],
  ["Commercial Decor", "Reception styling, brand corners, statement walls, ambience planning, and customer experience details."],
  ["Luxury Corners", "Console tables, entry foyers, niches, shelves, stair areas, and corners transformed into visual highlights."],
];

function AnimatedStat({ target, suffix, label }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const start = performance.now();
      const animate = (now) => {
        const progress = Math.min((now - start) / 1500, 1);
        setValue(Math.floor((1 - Math.pow(1 - progress, 3)) * target));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
      observer.disconnect();
    }, { threshold: 0.35 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [target]);

  return <div className="decorStat"><strong ref={ref}>{value}{suffix}</strong><span>{label}</span></div>;
}

export default function Decor() {
  useEffect(() => {
    const items = document.querySelectorAll(".decorPage .decorReveal,.decorPage .decorLine");
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

  return (
    <div className="decorPage">
      <main className="decorMain">
        <section className="decorHero">
          <div className="decorHeroCard decorReveal">
            <img src={heroImage} alt="Luxury decorative interior design" loading="eager" decoding="async" />
            <div className="decorHeroShade" />
            <div className="decorTags"><span>Texture</span><span>Detail</span><span>Style</span></div>
            <div className="decorHeroContent">
              <p className="decorEyebrow">Decorative Design Studio</p>
              <h1>Details That<br />Define Beauty.</h1>
              <div className="decorLine" />
              <p>We craft decorative design elements that add character, warmth, elegance, and personality to every corner of your home or commercial space.</p>
              <div className="decorHeroActions">
                <Link className="decorPrimaryButton" to="/consultation">Book Consultation</Link>
                <a className="decorSecondaryButton" href="#decor-services">Explore Work</a>
              </div>
            </div>
            <div className="decorStats">
              <AnimatedStat target={120} suffix="+" label="Decor Elements" />
              <AnimatedStat target={75} suffix="+" label="Styling Concepts" />
              <AnimatedStat target={100} suffix="%" label="Visual Harmony" />
            </div>
          </div>
        </section>

        <section className="decorIntro">
          <div className="decorIntroGrid">
            <div className="decorReveal">
              <p className="decorEyebrow">Our Decorative Approach</p>
              <h2>Luxury is found<br /><span>in the final details.</span></h2>
            </div>
            <div className="decorIntroCopy decorReveal">
              <p>Decorative design is not just about adding accessories. It is about creating visual harmony through materials, lighting, wall treatments, art, soft furnishings, statement pieces, textures, colour balance, and curated styling that completes the entire space.</p>
              <div className="decorLine" />
            </div>
          </div>
        </section>

        <section className="decorServices" id="decor-services">
          <div className="decorContainer">
            <div className="decorSectionHead decorReveal">
              <p className="decorEyebrow">What We Create</p>
              <h2>Decorative Designs</h2>
              <p>A lavish approach to rare luxury</p>
              <div className="decorLine" />
            </div>
            <div className="decorCardsGrid">
              {decorServices.map((service) => (
                <article className="decorCard decorReveal" key={service.title}>
                  <img src={service.image} alt={service.alt} loading="lazy" decoding="async" />
                  <div className="decorCardShade" />
                  <span className="decorCardNumber">{service.number}</span>
                  <div className="decorCardContent"><h3>{service.title}</h3><p>{service.copy}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="decorDetail">
          <div className="decorDetailGrid">
            <div className="decorDetailImage decorReveal"><img src={detailImage} alt="Luxury decorative design detailing" loading="lazy" decoding="async" /></div>
            <div className="decorDetailContent decorReveal">
              <p className="decorEyebrow">Styling With Purpose</p>
              <h2>Every object has<br /><span>a reason to belong.</span></h2>
              <div className="decorLine" />
              <p>We choose decorative pieces that support the mood of your interior instead of cluttering it. Every vase, frame, mirror, fabric, light, and artwork is selected to enhance the architecture of the space.</p>
              <p>The result is a refined, polished, and expressive space that feels complete from the first glance to the smallest corner.</p>
              <div className="decorSteps">
                {["Moodboard", "Material Palette", "Decor Selection", "Final Setup"].map((step, index) => (
                  <div key={step}><strong>{"0" + (index + 1)}</strong><span>{step}</span></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="decorFeature">
          <div className="decorFeatureGrid">
            <div className="decorReveal"><p className="decorEyebrow">Designed For</p><h2>Homes, showrooms &amp;<br />premium interiors.</h2></div>
            <div className="decorFeatureCards">
              {designedFor.map(([title, copy]) => <article className="decorReveal" key={title}><h3>{title}</h3><p>{copy}</p></article>)}
            </div>
          </div>
        </section>

        <section className="decorCta">
          <div className="decorCtaCard decorReveal">
            <img src={ctaImage} alt="Decorative luxury interior styling" loading="lazy" decoding="async" />
            <div className="decorCtaShade" />
            <div className="decorCtaContent">
              <p className="decorEyebrow">Complete Your Space</p>
              <h2>Let every detail<br />speak beautifully.</h2>
              <div className="decorLine" />
              <p>From moodboard to final styling, we help you decorate your interiors with pieces that feel premium, personal, and perfectly placed.</p>
              <Link className="decorPrimaryButton" to="/consultation">Book Decor Consultation</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
