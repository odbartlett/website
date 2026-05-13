import React from "react";
import "../../index.css";
import "./Projects.css";
import Header from "../Components/header";

const tags = ["React", "AWS S3", "CloudFront", "Lambda", "HTML Templates", "Static Gen", "CSS3", "Responsive Design"];

const metrics = [
  { value: "10+", label: "Managed Pages" },
  { value: "No-Code", label: "Non-Technical Editing" },
  { value: "CloudFront", label: "CDN Deployment" },
  { value: "SF", label: "Top Realtor Market" },
];

function Project7() {
  return (
    <>
      <Header />

      <div style={{ textAlign: 'left', width: '100%', maxWidth: '1100px', margin: '80px auto 0', padding: '2rem 2rem 0' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, color: 'var(--coral)', marginBottom: '0.5rem', lineHeight: 1.1 }}>
          BartlettRE.com
        </h1>
        <div className="h1-special">
          A custom static content generator for a top San Francisco realtor — 10+ pages, non-technical editing, hosted on AWS S3 and delivered via CloudFront.
        </div>
      </div>

      <div className="line" />

      <div className="project-display-container">
        <div className="project-content">

          {/* Metrics row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', width: '100%', margin: '0.5rem 0 0.5rem' }}>
            {metrics.map(({ value, label }) => (
              <div key={label} style={{
                background: 'var(--navy-card)',
                border: '1px solid var(--navy-border)',
                borderRadius: '12px',
                padding: '1.2rem 1rem',
                textAlign: 'center',
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 900, color: 'var(--coral)', lineHeight: 1 }}>{value}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--pink-dim)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '0.4rem' }}>{label}</div>
              </div>
            ))}
          </div>

          <div className="project-text">
            <h3 style={{ color: 'var(--coral)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>Project Overview</h3>
            <p>
              BartlettRE.com is a custom static content generator and professionally designed website
              built for a top-producing luxury realtor in San Francisco. The core challenge: build a
              system that a non-technical user can fully manage — adding new property listings, editing
              page content, and publishing updates — without touching code.
            </p>
            <p>
              The architecture uses Lambda functions with HTML templates to build static pages on demand,
              which are then pushed to S3 and distributed globally via CloudFront on a custom domain.
              The result is a fast, SEO-friendly site with zero server maintenance and instant global delivery.
            </p>
          </div>

          <div className="project-text">
            <h3 style={{ color: 'var(--coral)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>Design & Development</h3>
            <ul>
              <li><strong>Custom Static Generator:</strong> Lambda functions consume HTML templates and content inputs to generate fully static pages — no CMS, no runtime server</li>
              <li><strong>10+ Managed Pages:</strong> Built to scale with new listing pages added on demand through the same generator pipeline</li>
              <li><strong>Non-Technical Editing:</strong> Content management designed so the realtor (not a developer) can update listings, bios, testimonials, and market data</li>
              <li><strong>AWS S3 + CloudFront:</strong> Static assets hosted in S3 buckets, deployed to a custom domain via CloudFront for low-latency global delivery</li>
              <li><strong>Fully Custom Design:</strong> Bespoke UI — no templates. Typography, color system, layout hierarchy all designed for the SF luxury real estate audience</li>
              <li><strong>Responsive:</strong> Full mobile, tablet, and desktop layouts with fluid typography and adaptive image handling</li>
            </ul>
          </div>

          <div className="project-text">
            <h3 style={{ color: 'var(--coral)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>Infrastructure</h3>
            <p>
              The generation pipeline works as follows: a Lambda function reads structured content input
              (property details, agent info, market stats) and injects it into pre-built HTML templates.
              The resulting static HTML, CSS, and assets are written to an S3 bucket. CloudFront sits in
              front, handling CDN distribution, HTTPS, and custom domain routing.
            </p>
            <p>
              This approach gives the site the performance of a fully static deployment with the flexibility
              of dynamic content generation — every new listing triggers the generator, not a rebuild.
              The realtor can add an entire new property page by filling out a structured form.
            </p>
          </div>

          <div className="project-tags-row">
            {tags.map(t => <span key={t} className="project-tag">{t}</span>)}
          </div>
        </div>

        <a href="https://bartlettre.com" target="_blank" rel="noopener noreferrer" className="project-link">
          Visit BartlettRE.com ↗
        </a>
      </div>
    </>
  );
}

export default Project7;
