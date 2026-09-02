import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/vas-home.webp";
import processImage from "../assets/images/vas-design first.webp";
import ctaImage from "../assets/images/vas-cta.webp";
import "./Vastu.css";

const elements = [
  ["⌂", "Entrance Energy", "Main door direction, entry flow, first visual impression, and positive arrival experience."],
  ["◇", "Bedroom Balance", "Placement, sleep direction, calmness, colour balance, privacy, and restful energy."],
  ["◫", "Kitchen Placement", "Fire element harmony, appliance zoning, storage planning, and practical kitchen movement."],
  ["☼", "Light Flow", "Natural light, ventilation, openness, window direction, and brightness of key zones."],
  ["▣", "Work Harmony", "Home office or commercial workspace planning for focus, authority, and productivity."],
  ["✥", "Spatial Balance", "Directional zoning, furniture flow, décor placement, colour correction, and harmony."],
];

const services = [
  ["New Property Vastu", "Before buying, planning, or starting interiors — understand the energy and layout possibilities."],
  ["Renovation Vastu", "Improve harmony through practical corrections without breaking the entire design language."],
  ["Interior Vastu", "Furniture, lighting, colours, décor placement, and spatial flow planned with refined balance."],
  ["Office Vastu", "Workspace direction, leadership zone, team flow, focus, reception, and productivity planning."],
];

const processPoints = [
  ["01", "Layout Study"],
  ["02", "Design Corrections"],
  ["03", "Material Harmony"],
  ["04", "Balanced Finish"],
];

function VastuStat({ target, suffix, label }) {
  const [value, setValue] = useState(0);
  const numberRef = useRef(null);

  useEffect(() => {
    const number = numberRef.current;
    if (!number) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const start = performance.now();
      const animate = (time) => {
        const progress = Math.min((time - start) / 1500, 1);
        setValue(Math.floor((1 - Math.pow(1 - progress, 3)) * target));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
      observer.disconnect();
    }, { threshold: 0.35 });
    observer.observe(number);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="vastuStat">
      <strong ref={numberRef}>{value}{suffix}</strong>
      <span>{label}</span>
    </div>
  );
}

export default function Vastu() {
  useEffect(() => {
    const items = document.querySelectorAll(".vastuPage .vastuReveal, .vastuPage .vastuLine");
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("isVisible"));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("isVisible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="vastuPage">
      <main className="vastuMain">
        <section className="vastuHero">
          <div className="vastuHeroCard vastuReveal">
            <img src={heroImage} alt="Vastu consultancy luxury interior" loading="eager" decoding="async" />
            <div className="vastuHeroShade" />
            <div className="vastuHeroContent">
              <p className="vastuEyebrow">Vastu Consultancy</p>
              <h1>Designed with<br />perfect balance.</h1>
              <div className="vastuLine" />
              <p>We blend ancient Vastu wisdom with modern luxury interiors to create spaces filled with harmony, comfort, positive energy, and refined elegance.</p>
              <div className="vastuHeroActions">
                <Link className="vastuPrimaryButton" to="/consultation">Book Consultation</Link>
                <a className="vastuSecondaryButton" href="#vastu-process">Explore Work</a>
              </div>
            </div>
            <div className="vastuStats">
              <VastuStat target={360} suffix="°" label="Analysis" />
              <VastuStat target={4} suffix="+" label="Directions" />
              <VastuStat target={9} suffix="+" label="Vastu Zones" />
            </div>
          </div>
        </section>

        <section className="vastuIntro">
          <div className="vastuIntroGrid">
            <div className="vastuReveal">
              <p className="vastuEyebrow">Modern Vastu Approach</p>
              <h2>Energy aligned<br /><span>with elegant living.</span></h2>
            </div>
            <div className="vastuIntroCopy vastuReveal">
              <p>We do not make Vastu look loud, traditional, or forced. Our method is subtle and design-first — studying directions, light, movement, entrances, room placement, furniture flow, colours, and functional harmony while preserving the premium look of your space.</p>
              <div className="vastuLine" />
            </div>
          </div>
        </section>

        <section className="vastuElements">
          <div className="vastuContainer">
            <div className="vastuSectionHead vastuReveal">
              <p className="vastuEyebrow">What We Analyze</p>
              <h2>Vastu <span>Elements</span></h2>
              <div className="vastuLine" />
            </div>
            <div className="vastuElementGrid">
              {elements.map(([icon, title, copy]) => (
                <article className="vastuElementCard vastuReveal" key={title}>
                  <span className="vastuElementIcon" aria-hidden="true">{icon}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="vastuProcess" id="vastu-process">
          <div className="vastuProcessGrid">
            <div className="vastuProcessVisual vastuReveal">
              <img src={processImage} alt="Modern Vastu consultation interior planning" loading="lazy" decoding="async" />
              <div className="vastuPlan">
                <div className="vastuPlanGrid">
                  <i className="vertical one" /><i className="vertical two" /><i className="horizontal" />
                  <b className="dot first" /><b className="dot second" />
                  <span className="north">North</span><span className="east">East</span>
                  <span className="flow">Flow</span><span className="balance">Balance</span>
                </div>
              </div>
            </div>
            <div className="vastuProcessContent vastuReveal">
              <p className="vastuEyebrow">Design First. Vastu Integrated.</p>
              <h2>No compromise on<br /><span>aesthetics.</span></h2>
              <div className="vastuLine" />
              <div className="vastuProcessCopy">
                <p>Our Vastu suggestions are practical, elegant, and realistic. We focus on corrections that can be beautifully merged with furniture, lighting, colour palette, décor, storage, and layout planning.</p>
                <p>Whether it is a new home, renovation, commercial space, office, boutique, or studio — the final space should feel peaceful, premium, and truly usable.</p>
              </div>
              <div className="vastuProcessPoints">
                {processPoints.map(([number, label]) => <article key={number}><strong>{number}</strong><span>{label}</span></article>)}
              </div>
            </div>
          </div>
        </section>

        <section className="vastuServices">
          <div className="vastuServiceGrid">
            <div className="vastuReveal">
              <p className="vastuEyebrow">Consultancy For</p>
              <h2>Homes, Offices,<br /><span>Commercial Spaces</span></h2>
            </div>
            <div className="vastuServiceCards">
              {services.map(([title, copy]) => (
                <article className="vastuReveal" key={title}>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="vastuCta">
          <div className="vastuCtaCard vastuReveal">
            <img src={ctaImage} alt="Balanced luxury interior" loading="lazy" decoding="async" />
            <div className="vastuCtaShade" />
            <div className="vastuCtaContent">
              <p className="vastuEyebrow">Create A Balanced Space</p>
              <h2>A balanced space<br /><span>creates a balanced life.</span></h2>
              <div className="vastuLine" />
              <p>Share your layout, space type, and design vision — we will guide you with Vastu suggestions that feel elegant, subtle, and easy to apply.</p>
              <Link className="vastuPrimaryButton" to="/consultation">Book Vastu Consultation</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
