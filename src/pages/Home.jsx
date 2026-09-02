import { useEffect } from "react";
import heroImage from "../assets/images/01.jpg";
import storyImage from "../assets/images/02.jpg";
import residentialImage from "../assets/images/05.jpg";
import commercialImage from "../assets/images/06.jpg";
import planningImage from "../assets/images/07.jpg";
import furnitureImage from "../assets/images/08.jpg";
import consultationImage from "../assets/images/09.jpg";
import featureImage from "../assets/images/10.webp";
import partner1 from "../assets/images/partner-1.jpg";
import partner2 from "../assets/images/partner-2.jpg";
import partner3 from "../assets/images/partner-3.jpg";
import partner4 from "../assets/images/partner-4.jpg";
import partner5 from "../assets/images/partner-5.jpg";
import partner6 from "../assets/images/partner-6.jpg";
import partner7 from "../assets/images/partner-7.jpg";
import partner8 from "../assets/images/partner-8.jpg";
import partner9 from "../assets/images/partner-9.jpg";
import festiveOfferImage from "../assets/images/festive offer.jpg";
import "./Home.css";

export default function Home(){
  useEffect(() => {
    const items=document.querySelectorAll('.red-line,.line-center-grow,.best-word,.services-item,.services-text,.cta-card-slide,.home-story-card');
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target)}}),{threshold:.1});
    items.forEach(item=>observer.observe(item));
    document.querySelectorAll('.stat-number').forEach(el=>{const target=Number(el.dataset.target||0);const suffix=el.dataset.suffix||'';let value=0;const timer=setInterval(()=>{value=Math.min(target,value+Math.max(1,Math.ceil(target/60)));el.textContent=value+suffix;if(value>=target)clearInterval(timer)},25)});
    const lightbox=document.getElementById('serviceLightbox');
    const image=document.getElementById('serviceLightboxImage');
    const title=document.getElementById('serviceLightboxTitle');
    const cards=[...document.querySelectorAll('.service-preview-card')];
    const handlers=cards.map(card=>{const handler=()=>{image.src=card.dataset.serviceImage;image.alt=card.dataset.serviceTitle;title.textContent=card.dataset.serviceTitle;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false')};card.addEventListener('click',handler);return [card,handler]});
    const close=()=>{lightbox?.classList.remove('open');lightbox?.setAttribute('aria-hidden','true')};
    document.getElementById('serviceLightboxClose')?.addEventListener('click',close);
    const popup=document.getElementById('festiveOfferPopup');
    const popupTimer=setTimeout(()=>{popup?.classList.add('open');popup?.setAttribute('aria-hidden','false')},1200);
    const closePopup=()=>{popup?.classList.remove('open');popup?.setAttribute('aria-hidden','true')};
    document.getElementById('festivePopupClose')?.addEventListener('click',closePopup);
    return()=>{observer.disconnect();clearTimeout(popupTimer);handlers.forEach(([card,handler])=>card.removeEventListener('click',handler))};
  }, []);
  return (
    <>
      <div>
        <div id="festiveOfferPopup" className="festive-popup" role="dialog" aria-modal="true" aria-hidden="true" aria-labelledby="festiveOfferTitle">
          <div className="festive-popup-card">
            <aside className="festive-offer-visual" aria-label="Festive interior design offer">
              <img src={festiveOfferImage} alt="Festive interior offer" />
              <div className="festive-offer-copy">
                <span className="festive-offer-badge">Festive Offer</span>
                <p className="festive-offer-kicker">Celebrate your dream home</p>
                <h2>
                  25% OFF
                  <span>On Complete Interiors</span>
                </h2>
                <p>
                  Give your home a festive transformation with thoughtfully planned,
                  beautifully finished interiors.
                </p>
                <div className="festive-offer-benefits">
                  <div className="festive-offer-benefit">
                    <i className="ph ph-pencil-ruler" />
                    Personalised Designs
                  </div>
                  <div className="festive-offer-benefit">
                    <i className="ph ph-chat-circle-text" />
                    Free Consultation
                  </div>
                  <div className="festive-offer-benefit">
                    <i className="ph ph-seal-check" />
                    Premium Finish
                  </div>
                </div>
              </div>
            </aside>
            <section className="festive-form-panel">
              <button id="festivePopupClose" className="festive-popup-close" type="button" aria-label="Close festive offer popup">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M6 6L18 18M18 6L6 18" />
                </svg>
              </button>
              <p className="festive-form-eyebrow">Complimentary Consultation</p>
              <h3 id="festiveOfferTitle">Let’s design your dream home</h3>
              <p className="festive-form-intro">
                Share a few details and our design team will connect with you.
              </p>
              <form id="festiveOfferForm">
                <div className="festive-field">
                  <span className="festive-field-label">Property type</span>
                  <div className="festive-property-options">
                    <label className="festive-property-option">
                      <input type="radio" name="propertyType" defaultValue="1 BHK" required />
                      <span>1 BHK</span>
                    </label>
                    <label className="festive-property-option">
                      <input type="radio" name="propertyType" defaultValue="2 BHK" />
                      <span>2 BHK</span>
                    </label>
                    <label className="festive-property-option">
                      <input type="radio" name="propertyType" defaultValue="3 BHK" />
                      <span>3 BHK</span>
                    </label>
                    <label className="festive-property-option">
                      <input type="radio" name="propertyType" defaultValue="4+ BHK / Duplex" />
                      <span>4+ / Duplex</span>
                    </label>
                  </div>
                </div>
                <div className="festive-field">
                  <label className="festive-field-label" htmlFor="festiveLocation">Property location</label>
                  <input id="festiveLocation" className="festive-input" type="text" name="location" placeholder="Enter city or locality" autoComplete="address-level2" required />
                </div>
                <div className="festive-field">
                  <label className="festive-field-label" htmlFor="festiveName">Name</label>
                  <input id="festiveName" className="festive-input" type="text" name="name" placeholder="Enter your name" autoComplete="name" required />
                </div>
                <div className="festive-field">
                  <label className="festive-field-label" htmlFor="festiveMobile">Mobile number</label>
                  <div className="festive-phone-wrap">
                    <span className="festive-phone-code">+91</span>
                    <input id="festiveMobile" type="tel" name="mobile" placeholder="10-digit mobile number" autoComplete="tel-national" inputMode="numeric" pattern="[6-9][0-9]{9}" maxLength={10} required />
                  </div>
                </div>
                <label className="festive-consent">
                  <input type="checkbox" name="whatsappConsent" defaultChecked />
                  <span>
                    Yes, send me project updates via WhatsApp
                    <i className="ph ph-whatsapp-logo" />
                  </span>
                </label>
                <button className="festive-submit" type="submit">
                  Book a Free Consultation
                  <i className="ph ph-arrow-up-right" />
                </button>
                <p className="festive-form-note">
                  By submitting, you agree to be contacted by Space Decor Belle.
                  Offer applicability is subject to project scope and final quotation.
                </p>
                <p id="festiveFormSuccess" className="festive-form-success" role="status">
                  Thank you! Opening WhatsApp with your consultation details.
                </p>
              </form>
            </section>
          </div>
        </div>
        <main>
          {/* Full-width Home Hero */}
          <section id="home" className="home-hero" aria-labelledby="homeHeroTitle">
            <div className="home-hero-media" aria-hidden="true">
              <img src={heroImage} alt />
            </div>
            <div className="home-hero-overlay" aria-hidden="true" />
            <div className="home-hero-content">
              <div className="home-hero-copy-wrap">
                <h1 id="homeHeroTitle" className="home-hero-title">
                  Designing spaces,
                  <span>defining lifestyles.</span>
                </h1>
                <p className="home-hero-description">
                  A Delhi NCR design studio led by Kanchan Jain — homes, offices
                  and interiors where architectural precision meets the ancient
                  science of Vastu.
                </p>
                <div className="home-hero-actions">
                  <a href="/consultation" className="home-hero-btn home-hero-btn-primary">
                    Book Consultation
                    <i className="ph ph-arrow-up-right" />
                  </a>
                  <a href="/portfolio" className="home-hero-btn home-hero-btn-secondary">
                    View Portfolio
                    <i className="ph ph-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* Trust Strip: directly below the hero */}
          <section className="home-trust-section" aria-label="Space Decor Belle achievements">
            <div className="about-trust-strip">
              <article className="about-trust-metric">
                <span className="stat-number about-trust-number" data-target={125} data-suffix="+">
                  0+
                </span>
                <p className="about-trust-label">Projects Completed</p>
              </article>
              <article className="about-trust-metric">
                <span className="stat-number about-trust-number" data-target={25} data-suffix="+">
                  0+
                </span>
                <p className="about-trust-label">Years of Experience</p>
              </article>
              <div className="about-trust-location">
                <div className="about-trust-location-icon" aria-hidden="true">
                  <i className="ph ph-map-pin" />
                </div>
                <div className="about-trust-location-content">
                  <p className="about-trust-location-label">Serving Across</p>
                  <h2 className="about-trust-location-title">Delhi NCR</h2>
                  <p className="about-trust-cities">
                    Delhi · Noida · Gurugram
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* About Us */}
          <section id="about" className="home-about-section" aria-labelledby="homeAboutTitle">
            <div className="home-about-shell services-item services-delay-1">
              <h2 id="homeAboutTitle" className="home-about-eyebrow">About Us</h2>
              <p className="home-about-copy">
                <span className="home-about-line">We are a team of passionate designers</span>
                <span className="home-about-line">committed to crafting unique and impactful interior solutions</span>
                <span className="home-about-line">Our studio focuses on merging aesthetics that are not only</span>
                <span className="home-about-line">visually stunning but also practical and efficient.</span>
              </p>
              <div className="home-about-divider" aria-hidden="true" />
            </div>
          </section>
          {/* Best We Can Do Wrapper */}
          <section className="best-showcase-section w-full relative mt-0 mb-12">
            {/* Large overlapping text */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center pointer-events-none translate-y-34 md:translate-y-46 lg:translate-y-64">
              <h2 className="best-words cormorant-heading text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[11.5rem] text-white/90 leading-[0.9] lowercase">
                <span className="best-word best-delay-1">best</span>
                <span className="best-word best-delay-2">we</span>
                <span className="best-word best-delay-3">can</span>
                <span className="best-word best-delay-4">do</span>
              </h2>
            </div>
            {/* Background Image Banner */}
            <div className="w-full h-48 md:h-64 lg:h-80 overflow-hidden relative z-0">
              {/* Image */}
              <img src={storyImage} alt="Best we can do showcase" className="w-full h-full object-cover" />
              {/* Balanced dark overlay */}
              <div className="absolute inset-0 bg-[#0f0f0f]/50" />
              {/* Subtle warm right gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#c9a94f]/10" />
            </div>
            {/* Cards below banner */}
            <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center -mt-20 md:-mt-28 lg:-mt-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] md:gap-[22px] w-full max-w-[1080px]">
                {/* Card 1: replace the image src below whenever required */}
                <a href="/interior" className="expertise-card" aria-label="Explore Interior Designing">
                  <span className="expertise-card-image">
                    <img src={residentialImage} alt="Interior designing" />
                  </span>
                  <span className="expertise-card-copy">
                    <span className="font-serif-chic text-[38px] md:text-[44px] leading-[1.1] text-[#6a6763] font-medium">
                      interior
                    </span>
                    <span className="font-sans text-[15px] md:text-[17px] leading-[1.4] tracking-[0.40em] font-medium text-[#8c8882] uppercase mt-2">
                      designing
                    </span>
                  </span>
                  <i className="ph ph-arrow-up-right expertise-card-arrow" aria-hidden="true" />
                </a>
                {/* Card 2: replace the image src below whenever required */}
                <a href="/vastu" className="expertise-card" aria-label="Explore Vastu Consultancy">
                  <span className="expertise-card-image">
                    <img src={planningImage} alt="Vastu consultancy" />
                  </span>
                  <span className="expertise-card-copy">
                    <span className="font-serif-chic text-[38px] md:text-[44px] leading-[1.1] text-[#6a6763] font-medium">
                      vastu
                    </span>
                    <span className="font-sans text-[15px] md:text-[17px] leading-[1.4] tracking-[0.40em] font-medium text-[#8c8882] uppercase mt-2">
                      consultancy
                    </span>
                  </span>
                  <i className="ph ph-arrow-up-right expertise-card-arrow" aria-hidden="true" />
                </a>
                {/* Card 3: replace the image src below whenever required */}
                <a href="/decor" className="expertise-card" aria-label="Explore Decorative Designs">
                  <span className="expertise-card-image">
                    <img src={furnitureImage} alt="Decorative designs" />
                  </span>
                  <span className="expertise-card-copy">
                    <span className="font-serif-chic text-[36px] md:text-[42px] leading-[1.1] text-[#6a6763] font-medium">
                      decorative
                    </span>
                    <span className="font-sans text-[14px] md:text-[16px] leading-[1.4] tracking-[0.36em] font-medium text-[#8c8882] uppercase mt-2">
                      designs
                    </span>
                  </span>
                  <i className="ph ph-arrow-up-right expertise-card-arrow" aria-hidden="true" />
                </a>
              </div>
              <p className="mt-6 md:mt-8 text-center font-sans text-[16px] sm:text-[18px] md:text-[20px] font-medium tracking-[0.35em] uppercase text-[#6f6b65]">
                one stop solution for all your needs
              </p>
            </div>
          </section>
          {/* Compact About Us / Our Story Section */}
          <section className="home-story-section" aria-labelledby="homeStoryTitle">
            <div className="home-story-shell services-item services-delay-1">
              {/* Who We Are */}
              <div className="home-story-intro">
                <p className="home-story-eyebrow">About Space Decor Belle</p>
                <h2 id="homeStoryTitle" className="home-story-title">
                  We shape spaces around
                  <span>the way you live.</span>
                </h2>
                <p className="home-story-copy">
                  We are an interior design studio bringing interiors, Vastu and
                  decor together through one thoughtful and beautifully managed
                  design process.
                </p>
                <a href="/about" className="home-story-link">
                  Discover Our Story
                  <i className="ph ph-arrow-up-right" aria-hidden="true" />
                </a>
              </div>
              {/* What We Do / How We Work */}
              <div className="home-story-pillars">
                <article className="home-story-card">
                  <div className="home-story-number">01</div>
                  <h3>Who We Are</h3>
                  <p>
                    A multidisciplinary studio creating refined, functional and
                    deeply personal spaces.
                  </p>
                </article>
                <article className="home-story-card">
                  <div className="home-story-number">02</div>
                  <h3>What We Do</h3>
                  <p>
                    Interiors, space planning, Vastu guidance, custom furniture
                    and final decor styling.
                  </p>
                </article>
                <article className="home-story-card">
                  <div className="home-story-number">03</div>
                  <h3>How We Work</h3>
                  <p>
                    We listen, plan and execute around your lifestyle,
                    requirements, budget and space.
                  </p>
                </article>
              </div>
            </div>
          </section>
          {/* Services Section */}
          <section id="portfolio" className="w-full bg-white py-12">
            <div className="max-w-[1180px] mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Text Block */}
                <div className="services-text services-item services-delay-1 flex flex-col justify-start pt-2">
                  <h4 className="services-text-part services-text-delay-1 text-gray-500 font-medium text-[12px] uppercase tracking-[0.32em] mb-8">
                    Our Services
                  </h4>
                  <h2 className="services-text-part services-text-delay-2 font-sans font-light text-[34px] leading-[1.35] text-[#42556b]">
                    Interior design<br />
                    solutions <span className="font-serif-chic  text-gray-500">tailored to</span><br />
                    your space
                  </h2>
                </div>
                {/* Card 01 */}
                <article role="button" tabIndex={0} className="services-item services-delay-2 service-preview-card relative h-[285px] rounded-[22px] overflow-hidden shadow-sm group" data-service-image={residentialImage} data-service-title="Residential Design" aria-label="View Residential Design image">
                  <img src={residentialImage} alt="Residential Design" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/35" />
                  <span className="absolute top-6 left-7 text-white text-[20px] font-medium">01.</span>
                  <span className="service-preview-hint" aria-hidden="true">
                    <i className="ph ph-magnifying-glass-plus" />
                  </span>
                  <div className="absolute bottom-6 left-7 right-7">
                    <h3 className="font-serif-chic text-white text-[28px] leading-[1.02]">
                      Residential <span className="font-light">Design</span>
                    </h3>
                  </div>
                </article>
                {/* Card 02 */}
                <article role="button" tabIndex={0} className="services-item services-delay-3 service-preview-card relative h-[285px] rounded-[22px] overflow-hidden shadow-sm group" data-service-image={commercialImage} data-service-title="Commercial Design" aria-label="View Commercial Design image">
                  <img src={commercialImage} alt="Commercial Design" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/35" />
                  <span className="absolute top-6 left-7 text-white text-[20px] font-medium">02.</span>
                  <span className="service-preview-hint" aria-hidden="true">
                    <i className="ph ph-magnifying-glass-plus" />
                  </span>
                  <div className="absolute bottom-6 left-7 right-7">
                    <h3 className="font-serif-chic text-white text-[28px] leading-[1.02]">
                      Commercial <span className="font-light">Design</span>
                    </h3>
                  </div>
                </article>
                {/* Card 03 */}
                <article role="button" tabIndex={0} className="services-item services-delay-4 service-preview-card relative h-[285px] rounded-[22px] overflow-hidden shadow-sm group" data-service-image={planningImage} data-service-title="Space Planning" aria-label="View Space Planning image">
                  <img src={planningImage} alt="Space Planning" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/30" />
                  <span className="absolute top-6 left-7 text-white text-[20px] font-medium">03.</span>
                  <span className="service-preview-hint" aria-hidden="true">
                    <i className="ph ph-magnifying-glass-plus" />
                  </span>
                  <div className="absolute bottom-6 left-7 right-7">
                    <h3 className="font-serif-chic text-white text-[28px] leading-[1.02]">
                      Space <span className="font-light">Planning</span>
                    </h3>
                  </div>
                </article>
                {/* Card 04 */}
                <article role="button" tabIndex={0} className="services-item services-delay-5 service-preview-card relative h-[285px] rounded-[22px] overflow-hidden shadow-sm group" data-service-image={furnitureImage} data-service-title="Custom Furniture" aria-label="View Custom Furniture image">
                  <img src={furnitureImage} alt="Custom Furniture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/30" />
                  <span className="absolute top-6 left-7 text-white text-[20px] font-medium">04.</span>
                  <span className="service-preview-hint" aria-hidden="true">
                    <i className="ph ph-magnifying-glass-plus" />
                  </span>
                  <div className="absolute bottom-6 left-7 right-7">
                    <h3 className="font-serif-chic text-white text-[28px] leading-[1.02]">
                      Custom <span className="font-light">Furniture</span>
                    </h3>
                  </div>
                </article>
                {/* Card 05 */}
                <article role="button" tabIndex={0} className="services-item services-delay-6 service-preview-card relative h-[285px] rounded-[22px] overflow-hidden shadow-sm group" data-service-image={consultationImage} data-service-title="Design Consultation" aria-label="View Design Consultation image">
                  <img src={consultationImage} alt="Design Consultation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/30" />
                  <span className="absolute top-6 left-7 text-white text-[20px] font-medium">05.</span>
                  <span className="service-preview-hint" aria-hidden="true">
                    <i className="ph ph-magnifying-glass-plus" />
                  </span>
                  <div className="absolute bottom-6 left-7 right-7">
                    <h3 className="font-serif-chic text-white text-[28px] leading-[1.02]">
                      <span className="font-light">Design</span> Consultation
                    </h3>
                  </div>
                </article>
              </div>
            </div>
          </section>
          {/* Services Image Lightbox */}
          <div id="serviceLightbox" className="service-lightbox" role="dialog" aria-modal="true" aria-hidden="true" aria-labelledby="serviceLightboxTitle">
            <button id="serviceLightboxClose" className="service-lightbox-close" type="button" aria-label="Close image preview">
              <i className="ph ph-x" />
            </button>
            <div className="service-lightbox-content">
              <img id="serviceLightboxImage" src alt />
              <p id="serviceLightboxTitle" className="service-lightbox-title" />
            </div>
          </div>
          {/* TRUSTED PARTNERS SECTION */}
          <section className="trusted-partners-section py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="text-center mb-14">
                <p className="text-gray-500 text-[11px] uppercase tracking-[0.6em] font-medium mb-5">
                  Our Trusted Partners
                </p>
                <h2 className="font-serif-chic text-[#151515] text-[32px] md:text-[48px] leading-tight">
                  Elevating Every Space
                </h2>
                <p className="text-gray-600 text-sm md:text-base leading-8 max-w-3xl mx-auto mt-5">
                  We proudly collaborate with premium brands, developers, architects
                  and businesses to create timeless luxury interiors.
                </p>
              </div>
              <div className="trusted-marquee-wrap">
                <div className="trusted-marquee">
                  <div className="trusted-logo-set" aria-label="Trusted partner logos">
                    <div className="trusted-logo-card"><img src={partner1} alt="Trusted partner 1" /></div>
                    <div className="trusted-logo-card"><img src={partner2} alt="Trusted partner 2" /></div>
                    <div className="trusted-logo-card"><img src={partner3} alt="Trusted partner 3" /></div>
                    <div className="trusted-logo-card"><img src={partner4} alt="Trusted partner 4" /></div>
                    <div className="trusted-logo-card"><img src={partner5} alt="Trusted partner 5" /></div>
                    <div className="trusted-logo-card"><img src={partner6} alt="Trusted partner 6" /></div>
                    <div className="trusted-logo-card"><img src={partner7} alt="Trusted partner 7" /></div>
                    <div className="trusted-logo-card"><img src={partner8} alt="Trusted partner 8" /></div>
                    <div className="trusted-logo-card"><img src={partner9} alt="Trusted partner 9" /></div>
                  </div>
                  <div className="trusted-logo-set" aria-hidden="true">
                    <div className="trusted-logo-card"><img src={partner1} alt /></div>
                    <div className="trusted-logo-card"><img src={partner2} alt /></div>
                    <div className="trusted-logo-card"><img src={partner3} alt /></div>
                    <div className="trusted-logo-card"><img src={partner4} alt /></div>
                    <div className="trusted-logo-card"><img src={partner5} alt /></div>
                    <div className="trusted-logo-card"><img src={partner6} alt /></div>
                    <div className="trusted-logo-card"><img src={partner7} alt /></div>
                    <div className="trusted-logo-card"><img src={partner8} alt /></div>
                    <div className="trusted-logo-card"><img src={partner9} alt /></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* TESTIMONIALS SECTION */}
          <section className="testimonials-section" aria-labelledby="testimonialsTitle">
            <div className="testimonials-shell">
              <div className="testimonials-header">
                <div>
                  <p className="testimonials-eyebrow">Client Experiences</p>
                  <h2 id="testimonialsTitle" className="testimonials-title">
                    Spaces they now <span>love living in.</span>
                  </h2>
                </div>
                <div className="testimonials-controls" aria-label="Testimonial navigation">
                  <button id="testimonialPrev" className="testimonials-control" type="button" aria-label="View previous testimonials" aria-controls="testimonialsTrack">
                    <i className="ph ph-arrow-left" />
                  </button>
                  <button id="testimonialNext" className="testimonials-control" type="button" aria-label="View next testimonials" aria-controls="testimonialsTrack">
                    <i className="ph ph-arrow-right" />
                  </button>
                </div>
              </div>
              <div className="testimonials-viewport">
                <div id="testimonialsTrack" className="testimonials-track">
                  <article className="testimonial-card">
                    <div className="testimonial-rating" aria-label="5 out of 5 stars">★★★★★</div>
                    <p className="testimonial-quote">
                      The team understood that we wanted a warm home, not something that
                      only looked good in photographs. The storage planning and lighting
                      have made our everyday routine noticeably easier.
                    </p>
                    <div className="testimonial-person">
                      <span className="testimonial-avatar" aria-hidden="true">PM</span>
                      <div>
                        <h3 className="testimonial-name">Priya Malhotra</h3>
                        <p className="testimonial-project">Indirapuram · Home Interiors</p>
                      </div>
                    </div>
                  </article>
                  <article className="testimonial-card">
                    <div className="testimonial-rating" aria-label="5 out of 5 stars">★★★★★</div>
                    <p className="testimonial-quote">
                      Our office now feels professional without becoming cold or
                      corporate. They handled the layout, materials and execution with
                      clarity, and kept us informed whenever a decision was needed.
                    </p>
                    <div className="testimonial-person">
                      <span className="testimonial-avatar" aria-hidden="true">RM</span>
                      <div>
                        <h3 className="testimonial-name">Rohan Mehta</h3>
                        <p className="testimonial-project">Noida · Office Design</p>
                      </div>
                    </div>
                  </article>
                  <article className="testimonial-card">
                    <div className="testimonial-rating" aria-label="5 out of 5 stars">★★★★★</div>
                    <p className="testimonial-quote">
                      I was worried that following Vastu would make the design feel
                      traditional. Instead, the final home is modern, balanced and
                      practical. Every recommendation was explained patiently.
                    </p>
                    <div className="testimonial-person">
                      <span className="testimonial-avatar" aria-hidden="true">NB</span>
                      <div>
                        <h3 className="testimonial-name">Neha Bansal</h3>
                        <p className="testimonial-project">South Delhi · Vastu &amp; Interiors</p>
                      </div>
                    </div>
                  </article>
                  <article className="testimonial-card">
                    <div className="testimonial-rating" aria-label="5 out of 5 stars">★★★★★</div>
                    <p className="testimonial-quote">
                      The space planning for our apartment was thoughtful from the first
                      meeting. They found room for everything we needed without making
                      the rooms feel crowded, and the material options stayed realistic.
                    </p>
                    <div className="testimonial-person">
                      <span className="testimonial-avatar" aria-hidden="true">AS</span>
                      <div>
                        <h3 className="testimonial-name">Arjun Sethi</h3>
                        <p className="testimonial-project">Gurugram · Apartment Design</p>
                      </div>
                    </div>
                  </article>
                  <article className="testimonial-card">
                    <div className="testimonial-rating" aria-label="5 out of 5 stars">★★★★★</div>
                    <p className="testimonial-quote">
                      Our kitchen is finally beautiful and comfortable to use as a
                      family. The small details—counter height, accessible storage and
                      easy-to-clean finishes—showed that they genuinely listened.
                    </p>
                    <div className="testimonial-person">
                      <span className="testimonial-avatar" aria-hidden="true">KS</span>
                      <div>
                        <h3 className="testimonial-name">Kavita Sharma</h3>
                        <p className="testimonial-project">Vaishali · Kitchen Renovation</p>
                      </div>
                    </div>
                  </article>
                  <article className="testimonial-card">
                    <div className="testimonial-rating" aria-label="5 out of 5 stars">★★★★★</div>
                    <p className="testimonial-quote">
                      The drawings and site instructions were detailed, so execution
                      stayed organised even when we were not present. The finished
                      spaces feel clean, premium and very close to the approved design.
                    </p>
                    <div className="testimonial-person">
                      <span className="testimonial-avatar" aria-hidden="true">AV</span>
                      <div>
                        <h3 className="testimonial-name">Amit Verma</h3>
                        <p className="testimonial-project">Greater Noida · Turnkey Interiors</p>
                      </div>
                    </div>
                  </article>
                  <article className="testimonial-card">
                    <div className="testimonial-rating" aria-label="5 out of 5 stars">★★★★★</div>
                    <p className="testimonial-quote">
                      We wanted a refresh without replacing every piece of furniture.
                      Their decor choices brought the entire home together and respected
                      both our budget and the things we already loved.
                    </p>
                    <div className="testimonial-person">
                      <span className="testimonial-avatar" aria-hidden="true">SI</span>
                      <div>
                        <h3 className="testimonial-name">Sneha Iyer</h3>
                        <p className="testimonial-project">Delhi NCR · Decor Styling</p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              {/* <p class="testimonials-note">
      Sample testimonial copy for layout preview — replace it with verified
      client feedback before publishing.
          </p> */}
              <p id="testimonialStatus" className="sr-only" aria-live="polite" />
            </div>
          </section>
          {/* CTA Banner Section */}
          <section className="w-full relative overflow-hidden bg-[#151515]">
            {/* DESKTOP / TABLET LAYOUT */}
            <div className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[390px]">
              <img src={featureImage} alt="Interior background" className="absolute inset-0 w-full h-full object-cover object-center" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">
                  <div className="cta-card-slide bg-[#f7f7f7] shadow-xl w-[250px] sm:w-[290px] md:w-[340px] lg:w-[360px] xl:w-[360px] aspect-square px-5 sm:px-6 md:px-8 lg:px-9 flex flex-col justify-center items-start overflow-hidden shrink-0">
                    <span className="text-gray-500 font-medium text-[7px] sm:text-[8px] md:text-[9px] uppercase tracking-[0.24em] sm:tracking-[0.3em] md:tracking-[0.34em] mb-3 sm:mb-4 md:mb-4">
                      GET STARTED
                    </span>
                    <h2 className="font-sans font-light text-[1.6rem] sm:text-[1.9rem] md:text-[2.2rem] lg:text-[2.4rem] xl:text-[2.7rem] text-[#2f3947] leading-[1.06] tracking-[-0.02em] mb-4 sm:mb-5 md:mb-6">
                      Let’s bring<br />
                      your <span className="font-serif-chic text-gray-500 tracking-normal">interior</span><br />
                      vision to life.
                    </h2>
                    <button className="bg-customRed hover:bg-red-800 transition-colors text-white font-medium text-[8px] sm:text-[9px] md:text-[9px] px-4 sm:px-5 md:px-6 py-2.5 md:py-2.5 uppercase tracking-[0.12em] md:tracking-[0.14em] whitespace-nowrap">
                      GET IN TOUCH
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      
    </>
  );
}
