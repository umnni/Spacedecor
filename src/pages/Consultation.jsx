import { useEffect } from "react";
import consultationHeroImage from "../assets/images/10.webp";
import "./Consultation.css";

export default function Consultation(){
  useEffect(() => {
    const revealElements=document.querySelectorAll('.reveal-up,.line-grow');
    const observer=new IntersectionObserver((entries)=>entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target)}}),{threshold:.12});
    revealElements.forEach((element)=>observer.observe(element));

    const form=document.getElementById('consultationForm');
    const areaInputs=[...document.querySelectorAll('input[name="projectArea"]')];
    const areaError=document.getElementById('areaError');
    const formStatus=document.getElementById('formStatus');
    const startDate=document.getElementById('startDate');
    const today=new Date();
    today.setMinutes(today.getMinutes()-today.getTimezoneOffset());
    if(startDate) startDate.min=today.toISOString().split('T')[0];

    const selectedAreas=()=>areaInputs.filter((input)=>input.checked).map((input)=>input.value);
    const validateAreas=()=>{
      const valid=selectedAreas().length>0;
      if(areaInputs[0]) areaInputs[0].setCustomValidity(valid?'':'Please select at least one project area.');
      if(areaError) areaError.textContent=valid?'':'Please select at least one project area.';
      return valid;
    };
    areaInputs.forEach((input)=>input.addEventListener('change',validateAreas));

    const submit=(event)=>{
      event.preventDefault();
      if(!validateAreas()||!form.reportValidity()){
        if(formStatus) formStatus.textContent='Please complete the required fields before continuing.';
        form.querySelector(':invalid')?.focus();
        return;
      }
      const data=new FormData(form);
      const value=(key)=>data.get(key)?.toString().trim()||'Not specified';
      const message=['*New Consultation Request — Space Decor Belle*','',
        '*Name:* '+value('fullName'),'*Phone:* '+value('phone'),'*Email:* '+value('email'),
        '*City / Location:* '+value('city'),'*Preferred Contact:* '+value('contactMethod'),' ',
        '*Project Areas:* '+selectedAreas().join(', '),'*Property Type:* '+value('propertyType'),
        '*Project Stage:* '+value('projectStage'),'*Service Scope:* '+value('serviceScope'),
        '*Configuration:* '+value('configuration'),'*Approx. Area:* '+value('area'),'*Floors:* '+value('floors'),' ',
        '*Budget:* '+value('budget'),'*Timeline:* '+value('timeline'),'*Preferred Start Date:* '+value('startDate'),
        '*Design Style:* '+value('stylePreference'),' ','*Requirements:* '+value('requirements'),
        '*Reference Link:* '+value('referenceLink')].join('\n');
      if(formStatus) formStatus.textContent='Your consultation brief is ready. Opening WhatsApp…';
      window.location.href='https://wa.me/919654232327?text='+encodeURIComponent(message);
    };
    form?.addEventListener('submit',submit);
    return()=>{observer.disconnect();areaInputs.forEach((input)=>input.removeEventListener('change',validateAreas));form?.removeEventListener('submit',submit)};
  }, []);
  return (
    <div className="consultationPage">
      <main className="consultation-main">
        <section id="consultation-hero" className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 pt-3 pb-12">
          <div className="consultation-hero-card relative min-h-[580px] overflow-hidden rounded-[34px] reveal-up">
            <img src={consultationHeroImage} alt="Luxury interior design consultation" className="absolute inset-0 w-full h-full object-cover object-center opacity-65" loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
            <div className="relative z-10 min-h-[580px] grid lg:grid-cols-[1.2fr_.8fr] gap-10 items-center px-7 md:px-14 lg:px-16 py-16">
              <div className="max-w-3xl">
                <p className="section-eyebrow text-gray-500 mb-6">Private Design Consultation</p>
                <h1 className="consultation-hero-title font-serif-chic text-white text-[54px] md:text-[82px] lg:text-[92px] leading-[.92] tracking-[-.04em]">
                  Tell us about<br /><span className="text-white">your space.</span>
                </h1>
                <div className="line-grow w-[240px] md:w-[420px] h-[3px] bg-customRed mt-9 mb-8" />
                <p className="max-w-2xl text-white/80 text-[15px] md:text-[18px] leading-[1.85] font-light">
                  Share the details of your home, room or commercial project. Our team will understand your needs and connect with you for the right design direction.
                </p>
                <a href="#consultation-form" className="inline-flex items-center gap-3 mt-9 px-7 py-4 bg-customRed text-white text-[10px] font-bold uppercase tracking-[.2em] rounded-full">
                  Start Your Brief <i className="ph ph-arrow-down" />
                </a>
              </div>
              <div className="max-w-md lg:ml-auto w-full p-7 md:p-8 bg-black/35 border border-white/20 rounded-[26px] backdrop-blur-md">
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[.28em] mb-3">What happens next</p>
                <div className="hero-note">
                  <span className="hero-note-icon"><i className="ph ph-note-pencil" /></span>
                  <div><h3 className="text-white font-serif-chic text-[20px]">Share your requirements</h3><p className="mt-1 text-white/60 text-[11px] leading-relaxed">Tell us what you want to design, improve or renovate.</p></div>
                </div>
                <div className="hero-note">
                  <span className="hero-note-icon"><i className="ph ph-chats-circle" /></span>
                  <div><h3 className="text-white font-serif-chic text-[20px]">Receive a callback</h3><p className="mt-1 text-white/60 text-[11px] leading-relaxed">Our team reviews your brief and contacts you personally.</p></div>
                </div>
                <div className="hero-note">
                  <span className="hero-note-icon"><i className="ph ph-ruler" /></span>
                  <div><h3 className="text-white font-serif-chic text-[20px]">Plan the consultation</h3><p className="mt-1 text-white/60 text-[11px] leading-relaxed">We discuss scope, site, budget, timeline and next steps.</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="consultation-form" className="bg-[#f6f4ef] py-16 md:py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-12 reveal-up">
              <p className="section-eyebrow text-gray-500 mb-5">Project Discovery Form</p>
              <h2 className="section-heading text-[#2f3947]">Help us understand what you want to create.</h2>
              <p className="mt-5 max-w-2xl text-[#716d67] text-[14px] leading-[1.85]">Select one room or an entire property. You can choose multiple spaces if your project includes more than one area.</p>
            </div>
            <div className="consultation-layout">
              <div className="form-shell p-6 md:p-10 lg:p-12 reveal-up">
                <form id="consultationForm" noValidate>
                  <section className="form-section">
                    <div className="form-section-head">
                      <span className="form-step">01</span>
                      <div><h3 className="form-section-title">Your details</h3><p className="form-section-copy">How should our design team contact you?</p></div>
                    </div>
                    <div className="field-grid">
                      <div className="field-group">
                        <label className="field-label" htmlFor="fullName">Full name <span className="required">*</span></label>
                        <input id="fullName" name="fullName" className="form-field" type="text" placeholder="Your full name" autoComplete="name" required />
                      </div>
                      <div className="field-group">
                        <label className="field-label" htmlFor="phone">Phone number <span className="required">*</span></label>
                        <input id="phone" name="phone" className="form-field" type="tel" placeholder="+91 98765 43210" autoComplete="tel" inputMode="tel" pattern="[0-9+() -]{10,18}" required />
                      </div>
                      <div className="field-group">
                        <label className="field-label" htmlFor="email">Email address</label>
                        <input id="email" name="email" className="form-field" type="email" placeholder="you@example.com" autoComplete="email" />
                      </div>
                      <div className="field-group">
                        <label className="field-label" htmlFor="city">Project city / location <span className="required">*</span></label>
                        <input id="city" name="city" className="form-field" type="text" placeholder="City or project location" autoComplete="address-level2" required />
                      </div>
                      <div className="field-group field-span-2">
                        <label className="field-label" htmlFor="contactMethod">Preferred contact method</label>
                        <select id="contactMethod" name="contactMethod" className="form-field">
                          <option value="WhatsApp">WhatsApp</option>
                          <option value="Phone Call">Phone call</option>
                          <option value="Email">Email</option>
                        </select>
                      </div>
                    </div>
                  </section>
                  <section className="form-section">
                    <div className="form-section-head">
                      <span className="form-step">02</span>
                      <div><h3 className="form-section-title">What would you like to design?</h3><p className="form-section-copy">Choose at least one area. Multiple selections are allowed.</p></div>
                    </div>
                    <div className="choice-grid" id="projectAreas">
                      <label className="choice-card"><input type="checkbox" name="projectArea" defaultValue="Full Home" /><span className="choice-card-content"><i className="ph ph-house-line" /><span>Full Home</span></span></label>
                      <label className="choice-card"><input type="checkbox" name="projectArea" defaultValue="Kitchen" /><span className="choice-card-content"><i className="ph ph-cooking-pot" /><span>Kitchen</span></span></label>
                      <label className="choice-card"><input type="checkbox" name="projectArea" defaultValue="Living Room / Hall" /><span className="choice-card-content"><i className="ph ph-armchair" /><span>Living / Hall</span></span></label>
                      <label className="choice-card"><input type="checkbox" name="projectArea" defaultValue="Bedroom" /><span className="choice-card-content"><i className="ph ph-bed" /><span>Bedroom</span></span></label>
                      <label className="choice-card"><input type="checkbox" name="projectArea" defaultValue="Bathroom" /><span className="choice-card-content"><i className="ph ph-bathtub" /><span>Bathroom</span></span></label>
                      <label className="choice-card"><input type="checkbox" name="projectArea" defaultValue="Office / Commercial" /><span className="choice-card-content"><i className="ph ph-buildings" /><span>Office / Commercial</span></span></label>
                      <label className="choice-card"><input type="checkbox" name="projectArea" defaultValue="Renovation" /><span className="choice-card-content"><i className="ph ph-hammer" /><span>Renovation</span></span></label>
                      <label className="choice-card"><input type="checkbox" name="projectArea" defaultValue="Decor Styling" /><span className="choice-card-content"><i className="ph ph-lamp-pendant" /><span>Decor Styling</span></span></label>
                      <label className="choice-card"><input type="checkbox" name="projectArea" defaultValue="Vastu Consultation" /><span className="choice-card-content"><i className="ph ph-compass" /><span>Vastu</span></span></label>
                    </div>
                    <p id="areaError" className="choice-error" role="alert" aria-live="polite" />
                  </section>
                  <section className="form-section">
                    <div className="form-section-head">
                      <span className="form-step">03</span>
                      <div><h3 className="form-section-title">Property &amp; scope</h3><p className="form-section-copy">A few practical details help us plan the right consultation.</p></div>
                    </div>
                    <div className="field-grid">
                      <div className="field-group">
                        <label className="field-label" htmlFor="propertyType">Property type <span className="required">*</span></label>
                        <select id="propertyType" name="propertyType" className="form-field" required>
                          <option value selected disabled>Select property type</option>
                          <option>Apartment / Flat</option>
                          <option>Independent House / Villa</option>
                          <option>Builder Floor</option>
                          <option>Office / Commercial</option>
                          <option>Retail / Showroom</option>
                          <option>Restaurant / Hospitality</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="field-group">
                        <label className="field-label" htmlFor="projectStage">Current project stage <span className="required">*</span></label>
                        <select id="projectStage" name="projectStage" className="form-field" required>
                          <option value selected disabled>Select current stage</option>
                          <option>New construction</option>
                          <option>Under construction</option>
                          <option>Possession awaited</option>
                          <option>Ready to move</option>
                          <option>Occupied — needs renovation</option>
                        </select>
                      </div>
                      <div className="field-group">
                        <label className="field-label" htmlFor="serviceScope">Service required <span className="required">*</span></label>
                        <select id="serviceScope" name="serviceScope" className="form-field" required>
                          <option value selected disabled>Select service scope</option>
                          <option>Design consultation only</option>
                          <option>Design &amp; planning</option>
                          <option>Design with execution</option>
                          <option>Complete turnkey interiors</option>
                          <option>Decor &amp; styling</option>
                          <option>Vastu consultation</option>
                          <option>Not sure — need guidance</option>
                        </select>
                      </div>
                      <div className="field-group">
                        <label className="field-label" htmlFor="configuration">Configuration</label>
                        <select id="configuration" name="configuration" className="form-field">
                          <option value="Not specified">Select BHK / configuration</option>
                          <option>1 BHK</option><option>2 BHK</option><option>3 BHK</option><option>4 BHK</option><option>5+ BHK</option>
                          <option>Studio</option><option>Single commercial unit</option><option>Multiple floors / units</option>
                        </select>
                      </div>
                      <div className="field-group">
                        <label className="field-label" htmlFor="area">Approximate area</label>
                        <input id="area" name="area" className="form-field" type="text" placeholder="Example: 1,800 sq. ft." />
                      </div>
                      <div className="field-group">
                        <label className="field-label" htmlFor="floors">Number of floors</label>
                        <input id="floors" name="floors" className="form-field" type="number" min={1} max={50} placeholder="Example: 2" />
                      </div>
                    </div>
                  </section>
                  <section className="form-section">
                    <div className="form-section-head">
                      <span className="form-step">04</span>
                      <div><h3 className="form-section-title">Budget &amp; timeline</h3><p className="form-section-copy">An approximate range is enough for the first discussion.</p></div>
                    </div>
                    <div className="field-grid">
                      <div className="field-group">
                        <label className="field-label" htmlFor="budget">Estimated budget <span className="required">*</span></label>
                        <select id="budget" name="budget" className="form-field" required>
                          <option value selected disabled>Select budget range</option>
                          <option>Below ₹5 lakh</option>
                          <option>₹5–10 lakh</option>
                          <option>₹10–20 lakh</option>
                          <option>₹20–40 lakh</option>
                          <option>₹40 lakh–₹1 crore</option>
                          <option>₹1 crore+</option>
                          <option>Need guidance</option>
                        </select>
                      </div>
                      <div className="field-group">
                        <label className="field-label" htmlFor="timeline">Expected completion timeline</label>
                        <select id="timeline" name="timeline" className="form-field">
                          <option value="Not decided">Select timeline</option>
                          <option>Within 1 month</option>
                          <option>1–3 months</option>
                          <option>3–6 months</option>
                          <option>6–12 months</option>
                          <option>Flexible / exploring</option>
                        </select>
                      </div>
                      <div className="field-group field-span-2">
                        <label className="field-label" htmlFor="startDate">Preferred consultation / project start date</label>
                        <input id="startDate" name="startDate" className="form-field" type="date" />
                      </div>
                    </div>
                  </section>
                  <section className="form-section">
                    <div className="form-section-head">
                      <span className="form-step">05</span>
                      <div><h3 className="form-section-title">Your vision</h3><p className="form-section-copy">Tell us about your style, needs and any problems you want us to solve.</p></div>
                    </div>
                    <div className="field-grid">
                      <div className="field-group field-span-2">
                        <label className="field-label" htmlFor="stylePreference">Preferred design style</label>
                        <select id="stylePreference" name="stylePreference" className="form-field">
                          <option value="Open to suggestions">Open to suggestions</option>
                          <option>Modern / Contemporary</option><option>Luxury</option><option>Minimal</option><option>Classic</option>
                          <option>Indian / Traditional</option><option>Bohemian</option><option>Scandinavian</option><option>Mix of styles</option>
                        </select>
                      </div>
                      <div className="field-group field-span-2">
                        <label className="field-label" htmlFor="requirements">Project requirements <span className="required">*</span></label>
                        <textarea id="requirements" name="requirements" className="form-field" placeholder="Example: modular kitchen, living-room storage, lighting, colour palette, furniture planning, Vastu concerns, family needs or any specific ideas..." required defaultValue={""} />
                      </div>
                      <div className="field-group field-span-2">
                        <label className="field-label" htmlFor="referenceLink">Reference / floor-plan link</label>
                        <input id="referenceLink" name="referenceLink" className="form-field" type="url" placeholder="Google Drive, Pinterest or any shareable link" />
                      </div>
                    </div>
                  </section>
                  <label className="consent-row">
                    <input id="consent" name="consent" type="checkbox" required />
                    <span>I agree that Space Decor Belle may contact me regarding this consultation request. <strong className="text-gray-500">*</strong></span>
                  </label>
                  <button type="submit" className="submit-button">Send Consultation Request <i className="ph ph-whatsapp-logo text-lg" /></button>
                  <p id="formStatus" className="form-status" role="status" aria-live="polite" />
                </form>
              </div>
              <aside className="consultation-sidebar reveal-up" aria-label="Consultation information">
                <p className="section-eyebrow text-gray-500 mb-4">A thoughtful start</p>
                <h3 className="font-serif-chic text-[36px] leading-[1.05]">Every beautiful space begins with the right questions.</h3>
                <div className="sidebar-list">
                  <div className="sidebar-item"><i className="ph ph-clock" /><div><h4>Quick response</h4><p>Our team will review your brief and contact you as soon as possible.</p></div></div>
                  <div className="sidebar-item"><i className="ph ph-user-focus" /><div><h4>Personal attention</h4><p>Your requirements are discussed directly, not treated like a generic enquiry.</p></div></div>
                  <div className="sidebar-item"><i className="ph ph-shield-check" /><div><h4>Private details</h4><p>Your project information is used only to understand and respond to your request.</p></div></div>
                </div>
                <div className="sidebar-contact">
                  <p className="mb-3 text-gray-500 text-[9px] font-bold uppercase tracking-[.25em]">Prefer to speak directly?</p>
                  <a href="tel:+919654232327" className="font-serif-chic text-[24px]">(+91) 96542 32327</a>
                  <a href="mailto:info@spacedecorbelle.com">info@spacedecorbelle.com</a>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
}
