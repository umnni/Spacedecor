import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/port-hero.webp";
import livingRoom from "../assets/images/port-livingroom.webp";
import room from "../assets/images/port-room.webp";
import kitchen from "../assets/images/port-kitchen.webp";
import dining from "../assets/images/port-dining.webp";
import apartment from "../assets/images/port-apartment.webp";
import office from "../assets/images/port-office.webp";
import retail from "../assets/images/port-retail.webp";
import cafe from "../assets/images/port-cafe.webp";
import workspace from "../assets/images/port-workspace.webp";
import reception from "../assets/images/port-reception.webp";
import vastuHome from "../assets/images/port-vastuhome.webp";
import poojaRoom from "../assets/images/port-poojaroom.webp";
import vastuBedroom from "../assets/images/port-vastubedroom.webp";
import entrance from "../assets/images/port-enterance.webp";
import vastuKitchen from "../assets/images/port-vastukitchen.webp";
import door from "../assets/images/port-door.webp";
import wall from "../assets/images/port-wall.webp";
import furniture from "../assets/images/port-furniture.webp";
import light from "../assets/images/port-light.webp";
import art from "../assets/images/port-art.webp";
import project1 from "../assets/images/port-1.jpg";
import project2 from "../assets/images/port-2.jpg";
import project3 from "../assets/images/port-3.webp";
import project4 from "../assets/images/port-4.webp";
import project5 from "../assets/images/port-5.jpg";
import project6 from "../assets/images/port-6.jpg";
import project7 from "../assets/images/port-7.jpg";
import project8 from "../assets/images/port-8.webp";
import project9 from "../assets/images/port-9.jpg";
import project10 from "../assets/images/port-10.jpg";
import beforeImage from "../assets/images/port-before.webp";
import afterImage from "../assets/images/port-after.webp";
import "./Portfolio.css";

const gallery = [
  [livingRoom, "Luxury living room interior"], [room, "Modern bedroom interior"],
  [kitchen, "Elegant kitchen design"], [dining, "Premium dining area"],
  [apartment, "Luxury apartment interior"], [office, "Premium office interior"],
  [retail, "Boutique retail interior"], [cafe, "Cafe interior design"],
  [workspace, "Modern workspace design"], [reception, "Reception area design"],
  [vastuHome, "Vastu inspired home"], [poojaRoom, "Pooja room design"],
  [vastuBedroom, "Vastu bedroom design"], [entrance, "Interior entrance design"],
  [vastuKitchen, "Vastu kitchen design"], [door, "Decor and door styling"],
  [wall, "Wall decor styling"], [furniture, "Luxury furniture styling"],
  [light, "Premium lighting decor"], [art, "Statement art styling"],
  [project1, "Interior design portfolio project 1"], [project2, "Interior design portfolio project 2"],
  [project3, "Interior design portfolio project 3"], [project4, "Interior design portfolio project 4"],
  [project5, "Interior design portfolio project 5"], [project6, "Interior design portfolio project 6"],
  [project7, "Interior design portfolio project 7"], [project8, "Interior design portfolio project 8"],
  [project9, "Interior design portfolio project 9"], [project10, "Interior design portfolio project 10"],
];

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(null);
  const touchStart = useRef(0);

  const closeLightbox = () => setActiveIndex(null);
  const showPrevious = () => setActiveIndex((index) => (index - 1 + gallery.length) % gallery.length);
  const showNext = () => setActiveIndex((index) => (index + 1) % gallery.length);

  useEffect(() => {
    const elements = document.querySelectorAll(".portfolioPage .portfolioReveal,.portfolioPage .portfolioLine");
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
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    document.body.style.overflow = "hidden";
    const handleKey = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
    };
  }, [activeIndex]);

  return (
    <div className="portfolioPage">
      <main className="portfolioMain">
        <section className="portfolioHero">
          <div className="portfolioHeroCard portfolioReveal">
            <img src={heroImage} alt="Luxury interior design portfolio" loading="eager" decoding="async" />
            <div className="portfolioHeroShade" />
            <div className="portfolioHeroContent">
              <p className="portfolioEyebrow">Our Portfolio</p>
              <h1>Designed<br />Spaces.</h1>
              <div className="portfolioLine" />
              <p>A curated collection of luxury interiors, Vastu-inspired spaces, premium decor styling and elegant transformations.</p>
            </div>
          </div>
        </section>

        <section className="portfolioGallerySection" aria-label="Interior design work gallery">
          <div className="portfolioGallery">
            {gallery.map(([image, alt], index) => (
              <button className="portfolioGalleryItem portfolioReveal" type="button" key={alt} onClick={() => setActiveIndex(index)} aria-label={"Open portfolio image " + (index + 1)}>
                <img src={image} alt={alt} loading={index < 2 ? "eager" : "lazy"} decoding="async" />
                <span><i className="ph ph-arrows-out-simple" /></span>
              </button>
            ))}
          </div>
        </section>

        {activeIndex !== null && (
          <div className="portfolioLightbox" role="dialog" aria-modal="true" aria-label="Expanded portfolio image" onMouseDown={(event) => event.target === event.currentTarget && closeLightbox()}>
            <button className="portfolioLightboxClose" type="button" onClick={closeLightbox} aria-label="Close image"><i className="ph ph-x" /></button>
            <button className="portfolioLightboxPrevious" type="button" onClick={showPrevious} aria-label="Previous image"><i className="ph ph-caret-left" /></button>
            <div className="portfolioLightboxStage" onTouchStart={(event) => { touchStart.current = event.changedTouches[0].clientX; }} onTouchEnd={(event) => { const distance = event.changedTouches[0].clientX - touchStart.current; if (Math.abs(distance) > 45) distance > 0 ? showPrevious() : showNext(); }}>
              <img src={gallery[activeIndex][0]} alt={gallery[activeIndex][1]} />
              <span>{activeIndex + 1} / {gallery.length}</span>
            </div>
            <button className="portfolioLightboxNext" type="button" onClick={showNext} aria-label="Next image"><i className="ph ph-caret-right" /></button>
          </div>
        )}

        <section className="portfolioTransformations">
          <div className="portfolioContainer">
            <div className="portfolioSectionHead portfolioReveal">
              <p className="portfolioEyebrow">Before / After</p>
              <h2>Transforming Ordinary Spaces</h2>
              <p>See how thoughtful design, premium styling and smart planning turn empty spaces into elegant experiences.</p>
            </div>
            <div className="portfolioBeforeAfter">
              <figure className="portfolioReveal"><img src={beforeImage} alt="Interior space before redesign" loading="lazy" decoding="async" /><span>Before</span></figure>
              <figure className="portfolioReveal"><img src={afterImage} alt="Interior space after redesign" loading="lazy" decoding="async" /><span>After</span></figure>
            </div>
          </div>
        </section>

        <section className="portfolioCta">
          <div className="portfolioCtaCard portfolioReveal">
            <p className="portfolioEyebrow">Start Your Project</p>
            <h2>Let’s Design Your Dream Space</h2>
            <p>From concept to final styling, our team creates elegant, practical and premium interiors tailored to your lifestyle.</p>
            <Link to="/consultation">Book Consultation <i className="ph ph-arrow-right" /></Link>
          </div>
        </section>
      </main>
    </div>
  );
}
