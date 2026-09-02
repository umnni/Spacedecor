import { useEffect } from "react";
import hero2Image from "../assets/images/hero 2.webp";
import storyImage from "../assets/images/story.webp";
import craftImage from "../assets/images/craft.webp";
import nailsImage from "../assets/images/nails.webp";
import "./About.css";

export default function About() {
  useEffect(() => {
    const selectors = '.about-reveal,.reveal,.red-line,.line-center-grow,.services-item,.footer-drop';
    const elements = document.querySelectorAll(selectors);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px 50px 0px' });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return (
    <div className="aboutPage">
      <main className="about-main">
      {/* TOP HERO IMAGE */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 pt-3">
        <div className="w-full overflow-hidden about-reveal about-img-box">
          <img src={hero2Image} alt="Space Decor Belle About Hero" className="w-full h-auto block" loading="lazy" decoding="async" />
        </div>
      </section>
      {/* QUOTE */}
      <section className="w-full bg-white pt-12 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center about-reveal about-delay-1">
          <p className="section-eyebrow">
            About Us
          </p>
          <div className="max-w-[860px] mx-auto">
            <h1 className="section-heading about-quote-heading">
              “A space is only as beautiful as the peace it provides.”
            </h1>
            {/* RED LINE */}
            <div className="line-center-grow w-full h-[3px] bg-customRed mx-auto mt-7" />
          </div>
          <p className="about-signature">
            Kanchan Jain — Founder
          </p>
        </div>
      </section>
      {/* OUR STORY */}
      <section id="about-story" className="w-full bg-white py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="about-reveal about-delay-1">
            <p className="section-eyebrow">
              Who we are?
            </p>
            <h2 className="section-heading mb-6">
              Our Story.
            </h2>
            <div className="line-center-grow w-full max-w-[460px] h-[2px] bg-customRed mb-8" />
            <div className="section-copy space-y-5 max-w-xl">
              <p>
                Every beautiful space begins with a feeling — a dream of comfort, harmony, elegance, and belonging.
              </p>
              <p>
                That very belief became the foundation of Space Decor Belle, a design studio envisioned and led by
                <strong className="font-semibold text-gray-600">Kanchan Jain</strong>.
                What started as a passion for transforming ordinary corners into meaningful experiences gradually evolved
                into a creative destination where interiors are not just designed, but thoughtfully curated with emotion,
                energy, and purpose.
              </p>
              <p>
                At Space Decor Belle, we believe your home should tell your story — beautifully, consciously, and personally.
                We combine the precision of architectural innovation with the ancient science of Vastu and Vedic design
                to create spaces that breathe.
              </p>
            </div>
          </div>
          {/* Image */}
          <div className="about-reveal about-delay-2">
            <div className="rounded-[26px] overflow-hidden aspect-[4/5] bg-[#f3f3f3] about-img-box">
              <img src={storyImage} alt="Founder Story" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>
      {/* TWO IMAGE STRIP */}
      <section className="w-full py-8">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="aspect-[16/7] overflow-hidden about-reveal about-delay-1 about-img-box">
            <img src={craftImage} alt="Craft Detail" className="w-full h-full object-cover object-center" loading="lazy" decoding="async" />
          </div>
          <div className="aspect-[16/7] overflow-hidden about-reveal about-delay-2 about-img-box">
            <img src={nailsImage} alt="Material Selection" className="w-full h-full object-cover object-center" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>
      {/* FOUNDER FEATURE SECTION */}
      <section className="founder-statement-section">
        <div className="founder-statement-card about-reveal about-delay-1">
          <p className="section-eyebrow">Founder’s Perspective</p>
          <p className="founder-statement-copy">
            At Space Decor Belle we design spaces that inspire better living every single day.
            We don’t just decorate interiors — we design experiences, emotions, and stories
            that stay for years to come.
          </p>
          <div className="founder-statement-divider" aria-hidden="true" />
          <h2 className="founder-statement-name">Kanchan Jain</h2>
          <p className="founder-statement-role">Founder &amp; Director</p>
        </div>
      </section>
      {/* EXCELLENCE SECTION */}
      <section className="w-full bg-white pt-8 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto about-reveal about-delay-1">
          <h2 className="section-heading">
            <span className="text-[#4b5558]">25 Years of </span>
            <span className="heading-accent">Excellence.</span>
          </h2>
          <p className="section-subheading mt-2">
            One Visionary Touch
          </p>
          <div className="line-center-grow w-full max-w-[520px] h-[2px] bg-customRed mt-8 mb-10" />
          <div className="section-copy space-y-6 max-w-6xl">
            <p>
              With over 25 years of diverse experience in redefining real estate, Kanchan Jain brings a unique
              philosophy to interior design — one that merges ancient Vedic sciences with modern aesthetic innovation.
              Known for shaping landmark projects and creating purposeful spaces, her work reflects a rare balance
              of elegance, energy, and emotional comfort.
            </p>
            <p>
              As the founder of Space Decor Belle, she believes a home is more than just walls; it is a sanctuary
              for well-being. Kanchan creates spaces that foster positivity, balance, and luxury, ensuring every
              project she touches reflects trust, transparency, and long-term value.
            </p>
          </div>
          <div className="mt-12">
            <h2 className="section-heading mb-8">
              <span className="text-[#50575b]">Kanchan Jain </span>
              <span className="heading-accent">Philosophy</span>
            </h2>
            <p className="section-copy max-w-5xl">
              “I believe that true luxury isn’t found in expensive materials, but in how a room makes you feel.
              A space is only as beautiful as the peace it provides. My mission at Space Decor Belle is to ensure
              every corner of your home resonates with that inner stillness.”
            </p>
          </div>
        </div>
      </section>
    </main>
    </div>
    
  );
}
