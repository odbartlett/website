import React from "react";
import "./Contact.css";

const links = [
  {
    label: "LinkedIn",
    sub: "Let's connect professionally",
    icon: "in",
    href: "https://www.linkedin.com/in/owen-bartlett-7a539729a",
    external: true,
  },
  {
    label: "GitHub",
    sub: "Browse my repositories",
    icon: "gh",
    href: "https://github.com/odbartlett",
    external: true,
  },
  {
    label: "Email",
    sub: "odbartlett1@gmail.com",
    icon: "✉",
    href: "mailto:odbartlett1@gmail.com",
    external: false,
  },
  {
    label: "Résumé",
    sub: "Download PDF",
    icon: "↓",
    href: "/OwenBartlett.pdf",
    external: true,
    highlight: true,
  },
];

const Contact = () => (
  <div className="contact-container" id="contact">
    <div className="contact-grid">
      {links.map(({ label, sub, icon, href, external, highlight }) => (
        <a
          key={label}
          href={href}
          className={`contact-card ${highlight ? 'contact-card-highlight' : ''}`}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          <span className="contact-card-icon">{icon}</span>
          <span className="contact-card-label">{label}</span>
          <span className="contact-card-sub">{sub}</span>
        </a>
      ))}
    </div>
  </div>
);

export default Contact;
