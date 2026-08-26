/* Deccan Heritage Table: contemporary Indian editorial warmth, roasted-clove / turmeric-brass / rice-ivory palette, asymmetric hosted-table layouts, DM Serif Display + Manrope typography, restrained tactile motion. */
import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Check, ChevronDown, Edit3, Instagram, Mail, MapPin, Menu, MessageCircle, Phone, Plus, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const PHONE = "9494302748";
const WHATSAPP = `https://wa.me/91${PHONE}?text=${encodeURIComponent("Hello FANCY CATERERS, I would like a quote for my event.")}`;

const baseGallery = [
  { src: "/manus-storage/fancy-table-arrangement_a86658a0.webp", label: "The hosted table", category: "Set-up" },
  { src: "/manus-storage/fancy-biryani-curries_fcaee8c0.webp", label: "The Hyderabad spread", category: "Menu" },
  { src: "/manus-storage/fancy-dessert-spread-gallery-classic_96e54e26.webp", label: "A sweet finish", category: "Desserts" },
  { src: "/manus-storage/fancy-gallery-venue-1-bright-classic_f0134f72.webp", label: "A classic hosted table", category: "Venue styling" },
  { src: "/manus-storage/fancy-gallery-venue-2-bright-classic_73c8256b.webp", label: "An evening well set", category: "Venue styling" },
  { src: "/manus-storage/fancy-gallery-venue-3-bright-classic_2a527b36.webp", label: "The long table", category: "Venue styling" },
  { src: "/manus-storage/fancy-gallery-venue-4-bright-classic_f5f57124.webp", label: "A table set to impress", category: "Venue styling" },
  { src: "/manus-storage/fancy-gallery-venue-5-bright-classic_0cfb8a2d.webp", label: "A classic evening setting", category: "Venue styling" },
];

const menuCards = [
  { number: "01", title: "Hyderabadi", copy: "Fragrant biryanis, slow-cooked gravies and the generous spice of the city we call home.", tags: ["Mutton biryani", "Chicken 65", "Haleem"] },
  { number: "02", title: "Mughlai", copy: "Rich, celebratory dishes made for long tables, warm conversation and second helpings.", tags: ["Kebabs", "Kormas", "Naan & breads"] },
  { number: "03", title: "Chinese", copy: "Bright, familiar favourites with the same attention to freshness, balance and clean execution.", tags: ["Wok specials", "Noodles", "Vegetarian mains"] },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="section-label"><span className="label-line" />{children}</div>;
}

export default function Home() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [quoteSent, setQuoteSent] = useState(false);
  const [gallery, setGallery] = useState(baseGallery);
  const [heroTitle, setHeroTitle] = useState("A table worth\ngathering around.");

  useEffect(() => {
    try {
      const savedTitle = localStorage.getItem("fancy-hero-title");
      const savedGallery = localStorage.getItem("fancy-gallery");
      if (savedTitle) setHeroTitle(savedTitle);
      if (savedGallery) {
        try {
          const savedItems = JSON.parse(savedGallery) as typeof baseGallery;
          if (Array.isArray(savedItems)) {
            const savedOnly = savedItems.filter((item) => !baseGallery.some((baseItem) => baseItem.src === item.src || (baseItem.label === item.label && baseItem.category === item.category)));
            setGallery([...baseGallery, ...savedOnly]);
          }
        } catch {
          localStorage.removeItem("fancy-gallery");
        }
      }
    } catch {
      // Local storage can be unavailable in strict privacy modes; the default content remains usable.
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("fancy-hero-title", heroTitle);
      localStorage.setItem("fancy-gallery", JSON.stringify(gallery));
    } catch {
      // The page remains usable when storage is blocked or full.
    }
  }, [heroTitle, gallery]);

  const openQuote = () => {
    setQuoteSent(false);
    setShowQuote(true);
  };

  const navItems = useMemo(() => [
    ["Our story", "story"], ["What we serve", "cuisine"], ["Gallery", "gallery"], ["Contact", "contact"],
  ], []);

  const addPhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setGallery((items) => [...items, { src: String(reader.result), label: file.name.replace(/\.[^/.]+$/, ""), category: "Your photo" }]);
    reader.readAsDataURL(file);
    event.target.value = "";
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="top-strip"><span>Serving Telangana with care</span><span className="strip-dot" /><span>Hyderabad · Since 2004</span><a href="https://mail.google.com/mail/?view=cm&fs=1&to=fancycateringhyd@gmail.com&su=Quote%20request%20for%20FANCY%20CATERERS" target="_blank" rel="noreferrer">fancycateringhyd@gmail.com</a></div>
      <header className="site-header">
        <button className="brand-lockup" onClick={() => scrollTo("top")} aria-label="FANCY CATERERS home">
          <img src="/manus-storage/fancy-brand-emblem_1d730ed2.webp" alt="" className="brand-mark" />
          <span><strong>FANCY</strong><small>CATERERS</small></span>
        </button>
        <nav className={mobileOpen ? "main-nav open" : "main-nav"} aria-label="Main navigation">
          {navItems.map(([label, id]) => <button key={id} onClick={() => id === "gallery" ? window.location.assign("/gallery") : scrollTo(id)}>{label}</button>)}
          <a className="nav-call" href={`tel:+91${PHONE}`}><Phone size={15} /> Call us</a>
        </nav>
        <button className="mobile-menu" onClick={() => setMobileOpen((value) => !value)} aria-label="Toggle navigation">{mobileOpen ? <X /> : <Menu />}</button>
      </header>

      <main id="main">
        <section id="top" className="hero-section">
          <img className="hero-image" src="/manus-storage/fancy-hero-indian-men-catering_d47eef15.webp" alt="A warmly lit wedding banquet prepared by FANCY CATERERS" loading="eager" fetchPriority="high" decoding="async" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="heritage-rail"><span>22</span><i /> <span>YEARS OF GATHERING</span></div>
            <div className="hero-copy">
              <div className="eyebrow light"><Sparkles size={13} /> Hyderabad hospitality, since 2004</div>
              <h1 contentEditable={isEditMode} suppressContentEditableWarning onBlur={(event) => setHeroTitle(event.currentTarget.innerText)}>{heroTitle}</h1>
              <p>Thoughtful catering for weddings, celebrations and everyday milestones — from 20 guests to a gathering of unlimited members</p>
              <div className="hero-actions"><Button className="button-brass" onClick={openQuote}>Plan your booking <ArrowUpRight size={17} /></Button><button className="text-link light-link" onClick={() => scrollTo("story")}>Discover our story <span>↓</span></button></div>
            </div>
          </div>
          <div className="hero-caption">Hyderabadi · Mughlai · Chinese<br /><span>Vegetarian & non-vegetarian</span></div>
        </section>

        <section id="story" className="story-section content-section">
          <div className="section-rail"><SectionLabel>01 — OUR STORY</SectionLabel></div>
          <div className="story-grid">
            <div className="story-heading"><p className="overline">A little more than food</p><h2>Made with the confidence of <em>22 years.</em></h2></div>
            <div className="story-copy"><p>FANCY CATERERS began in Hyderabad in 2004 with a simple promise: serve food that feels generous, honest and beautifully looked after. Two decades later, that promise still guides every menu, every table and every conversation.</p><p>We use top-quality ingredients, cook with care and price with reason. Our team works across Telangana to make your occasion feel effortless — whether it is an intimate family gathering or a celebration for thousands.</p><button className="text-link dark-link" onClick={openQuote}>Let’s talk about your occasion <ArrowUpRight size={16} /></button></div>
          </div>
          <div className="story-stat"><strong>20 → ∞</strong><span>unlimited Guests welcome</span></div>
        </section>

        <section id="cuisine" className="cuisine-section content-section dark-section"><div className="chapter-rail dark-rail"><span>02</span><i /><small>WHAT WE SERVE</small></div>
          <div className="cuisine-intro"><SectionLabel>What we serve</SectionLabel><h2>Familiar flavours.<br /><em>Exceptionally hosted.</em></h2><p>Menus that meet the moment, from an old-school Hyderabad wedding to a crisp corporate lunch.</p></div>
          <div className="menu-list">{menuCards.map((item) => <article className="menu-card" key={item.number}><span className="menu-number">{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p><div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div>
          <div className="cuisine-note"><Check size={16} /> Every menu is available in vegetarian and non-vegetarian options.</div><div className="menu-details"><div className="menu-detail-column"><span className="menu-detail-label">Vegetarian favourites</span><p>Paneer butter masala · Veg manchurian · Dal tadka · Vegetable biryani · Gobi 65 · Mixed vegetable curry</p></div><div className="menu-detail-column"><span className="menu-detail-label">Non-vegetarian favourites</span><p>Mutton biryani · Chicken curry · Chicken 65 · Mutton kebabs · Chicken manchurian · Haleem · Marag · Fish fry · Fish curry</p></div></div>
        </section>

        <section className="feature-section content-section">
          <div className="feature-image-wrap"><img src="/manus-storage/fancy-biryani-curries_fcaee8c0.webp" alt="Mutton biryani and chicken curry served in brass vessels" loading="eager" decoding="async" /><span className="image-stamp">Made<br />with care</span></div>
          <div className="feature-copy"><SectionLabel>The FANCY standard</SectionLabel><h2>Pure ingredients.<br /><em>Reasonable rates.</em></h2><p>We believe quality should be felt in every bite — and still make sense on the quote. That means careful sourcing, clean preparation and menus built around your people, not a one-size-fits-all package.</p><div className="feature-points"><span><strong>01</strong>Top quality ingredients</span><span><strong>02</strong>Clean, considered set-up</span><span><strong>03</strong>Fair, transparent quotes</span></div></div>
        </section>

        <section className="homepage-gallery-showcase" aria-labelledby="homepage-gallery-title">
          <div className="homepage-gallery-intro"><div className="homepage-gallery-rail"><span>03</span><i /><small>THE COMPLETE TABLE</small></div><div><p className="overline">The FANCY gallery</p><h2 id="homepage-gallery-title">Every gathering,<br /><em>beautifully set.</em></h2><p>For more than two decades, FANCY CATERERS has brought generous food and thoughtful presentation to celebrations across Telangana. Here is a closer look at the tables, details and flavours we prepare with care.</p></div></div>
          <div className="homepage-gallery-grid">{gallery.map((item, index) => <figure className="homepage-gallery-item" key={`homepage-${item.src}-${index}`}><img src={item.src} alt={item.label} loading="eager" decoding="async" /><figcaption><span>{item.category}</span><strong>{item.label}</strong></figcaption></figure>)}</div>
        </section>

        <section className="dessert-band"><img src="/manus-storage/fancy-dessert-spread_45a65d2f.webp" alt="Indian desserts arranged for a celebration" loading="eager" decoding="async" /><div><p className="overline light">End on a sweet note</p><h2>There is always room<br />for <em>something sweet.</em></h2><button className="text-link light-link" onClick={openQuote}>Ask about dessert menus <ArrowUpRight size={16} /></button></div></section>

        <section id="contact" className="contact-section content-section"><div className="chapter-rail contact-rail"><span>04</span><i /><small>YOUR OCCASION</small></div>
          <div className="contact-copy"><SectionLabel>Let’s plan it</SectionLabel><h2>Tell us the occasion.<br /><em>We’ll take care of the spread.</em></h2><p>Call or message us any time. Share your date, guest count and what you have in mind — our team will get back to you with the most reasonable quote.<br /><strong className="brand-tagline">Fancy  Caterers: Where lavish flavor meets real value.</strong></p></div>
          <div className="contact-actions menu-contact-cards"><a href={`tel:+91${PHONE}`} className="contact-card"><span className="contact-icon"><Phone /></span><span><small>Call us anytime</small><strong>+91 {PHONE}</strong></span><ArrowUpRight /></a><a href={WHATSAPP} target="_blank" rel="noreferrer" className="contact-card whatsapp"><span className="contact-icon"><MessageCircle /></span><span><small>Message on WhatsApp</small><strong>Start a conversation</strong></span><ArrowUpRight /></a><a href="https://mail.google.com/mail/?view=cm&fs=1&to=fancycateringhyd@gmail.com&su=Quote%20request%20for%20FANCY%20CATERERS" className="contact-card" target="_blank" rel="noreferrer"><span className="contact-icon"><Mail /></span><span><small>Email the team</small><strong>fancycateringhyd@gmail.com</strong></span><ArrowUpRight /></a></div>
        </section>
      </main>

      <footer className="site-footer"><div className="footer-brand"><img src="/manus-storage/fancy-brand-emblem_1d730ed2.webp" alt="" /><span><strong>FANCY</strong><small>CATERERS</small></span></div><p>Hyderabad hospitality, carried across Telangana.<br />© 2026 FANCY CATERERS. All rights reserved.</p><div className="footer-links"><a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp</a><a href="#top">Back to top ↑</a></div></footer>

      <button className="floating-whatsapp" aria-label="Message FANCY CATERERS on WhatsApp" onClick={() => window.open(WHATSAPP, "_blank")}><MessageCircle size={20} /><span>WhatsApp us</span></button>
      <button className={isEditMode ? "edit-toggle on" : "edit-toggle"} onClick={() => setIsEditMode((value) => !value)}><Edit3 size={15} /> {isEditMode ? "Finish updates" : "Owner updates"}</button>

      {showQuote && <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="quote-title" onClick={() => setShowQuote(false)}><div className="quote-modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setShowQuote(false)} aria-label="Close quote form"><X size={18} /></button>{quoteSent ? <div className="quote-success"><Check size={28} /><h2>We’ve got your note.</h2><p>Thanks for reaching out. The FANCY team will contact you shortly to understand the details and share a reasonable quote.</p><a href={WHATSAPP} target="_blank" rel="noreferrer" className="text-link dark-link">Continue on WhatsApp <ArrowUpRight size={16} /></a></div> : <><p className="overline">A few details</p><h2 id="quote-title">Let’s make a plan.</h2><p className="modal-intro">Share the basics and our team will follow up with the right questions.</p><form onSubmit={(event) => { event.preventDefault(); setQuoteSent(true); }}><label>Your name<Input required placeholder="Enter your name" /></label><div className="form-row"><label>Guest count<Input required type="number" min="20" placeholder="20+" /></label><label>Event date<Input required type="date" /></label></div><label>What are you planning?<Textarea required placeholder="Wedding, birthday, office lunch..." /></label><Button className="button-dark" type="submit">Request a quote <ArrowUpRight size={17} /></Button></form></>}</div></div>}
    </div>
  );
}
