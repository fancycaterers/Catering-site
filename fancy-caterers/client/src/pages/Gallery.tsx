/* Deccan Heritage Table: classic, spacious image-led showcase using the existing roasted-clove, rice-ivory, and turmeric-brass system. */
import { ArrowLeft, ArrowUpRight, MessageCircle, Phone } from "lucide-react";

const galleryItems = [
  { src: "/manus-storage/fancy-table-arrangement_a86658a0.webp", label: "The hosted table", category: "Set-up" },
  { src: "/manus-storage/fancy-biryani-curries_fcaee8c0.webp", label: "The Hyderabad spread", category: "Menu" },
  { src: "/manus-storage/fancy-dessert-spread-gallery-classic_96e54e26.webp", label: "A sweet finish", category: "Desserts" },
  { src: "/manus-storage/fancy-gallery-venue-1-bright-classic_f0134f72.webp", label: "A classic hosted table", category: "Venue styling" },
  { src: "/manus-storage/fancy-gallery-venue-2-bright-classic_73c8256b.webp", label: "An evening well set", category: "Venue styling" },
  { src: "/manus-storage/fancy-gallery-venue-3-bright-classic_2a527b36.webp", label: "The long table", category: "Venue styling" },
  { src: "/manus-storage/fancy-gallery-venue-4-bright-classic_f5f57124.webp", label: "A table set to impress", category: "Venue styling" },
  { src: "/manus-storage/fancy-gallery-venue-5-bright-classic_0cfb8a2d.webp", label: "A classic evening setting", category: "Venue styling" },
];

export default function Gallery() {
  return (
    <div className="gallery-page">
      <div className="top-strip"><span>Serving Telangana with care</span><span className="strip-dot" /><span>Hyderabad · Since 2004</span><a href="https://mail.google.com/mail/?view=cm&fs=1&to=fancycateringhyd@gmail.com&su=Quote%20request%20for%20FANCY%20CATERERS" target="_blank" rel="noreferrer">fancycateringhyd@gmail.com</a></div>
      <header className="gallery-page-header">
        <a className="gallery-back" href="/"><ArrowLeft size={15} /> Back to home</a>
        <a className="gallery-page-brand" href="/" aria-label="FANCY CATERERS home"><img src="/manus-storage/fancy-brand-emblem_1d730ed2.webp" alt="" /><span><strong>FANCY</strong><small>CATERERS</small></span></a>
        <a className="gallery-page-contact" href="tel:+919494302748"><Phone size={15} /> Call us</a>
      </header>

      <main>
        <section className="gallery-page-intro">
          <div className="gallery-page-rail"><span>03</span><i /><small>THE COMPLETE TABLE</small></div>
          <div className="gallery-page-copy"><p className="overline">The FANCY gallery</p><h1>Every gathering,<br /><em>beautifully set.</em></h1><p>For more than two decades, FANCY CATERERS has brought generous food and thoughtful presentation to celebrations across Telangana. Here is a closer look at the tables, details and flavours we prepare with care.</p><a className="gallery-page-explore" href="#gallery-grid">Explore the gallery <ArrowUpRight size={15} /></a></div>
        </section>

        <section id="gallery-grid" className="gallery-page-grid" aria-label="FANCY CATERERS gallery">
          {galleryItems.map((item, index) => <figure className={`gallery-page-item gallery-page-item-${index + 1}`} key={item.src}><img src={item.src} alt={item.label} loading="eager" decoding="async" /><figcaption><span>{item.category}</span><strong>{item.label}</strong></figcaption></figure>)}
        </section>

        <section className="gallery-page-footer"><p className="overline">Made for your occasion</p><h2>Have a table<br /><em>in mind?</em></h2><div><p>Tell us your date, guest count and what you have in mind. We’ll shape the menu and share a reasonable quote.</p><a className="gallery-quote-link" href="https://wa.me/919494302748?text=Hello%20FANCY%20CATERERS%2C%20I%20would%20like%20a%20quote%20for%20my%20event." target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight size={16} /></a></div></section>
      </main>

      <footer className="site-footer"><div className="footer-brand"><img src="/manus-storage/fancy-brand-emblem_1d730ed2.webp" alt="" /><span><strong>FANCY</strong><small>CATERERS</small></span></div><p>Hyderabad hospitality, carried across Telangana.<br />© 2026 FANCY CATERERS. All rights reserved.</p><div className="footer-links"><a href="https://wa.me/919494302748" target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp</a><a href="/">Back to home ↑</a></div></footer>
    </div>
  );
}
