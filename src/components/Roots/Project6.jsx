import React from "react";
import "../../index.css";
import "./Projects.css";
import Header from "../Components/header";

const tags = ["React", "Node.js", "AWS Lambda", "CloudFormation", "DynamoDB", "S3", "RAG", "Voice Agents", "LLMs", "Full-Stack"];

const metrics = [
  { value: "~$5k", label: "Monthly Revenue" },
  { value: "~2,000", label: "Active Users" },
  { value: "5+", label: "Tickets/mo via AI Agent" },
  { value: "AWS CCP", label: "Certification Earned" },
];

function Project6() {
  return (
    <>
      <Header />

      <div style={{ textAlign: 'left', width: '100%', maxWidth: '1100px', margin: '80px auto 0', padding: '2rem 2rem 0' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, color: 'var(--coral)', marginBottom: '0.5rem', lineHeight: 1.1 }}>
          OnlineDraft
        </h1>
        <div className="h1-special">
          A generalized drafting platform generating ~$5,000/month across a userbase of ~2,000 — draft anything from fantasy leagues to award nominees.
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
              OnlineDraft is a full-stack generalized drafting service that gives users a flexible platform to
              draft <em>anything they desire</em> — fantasy sports teams, award nominees, draft picks, ranked
              lists, event lineups, and more. The platform has grown to a userbase of approximately 2,000
              users and generates roughly $5,000 in monthly revenue as a live product.
            </p>
            <p>
              The core insight: the draft format is universal, but existing platforms lock users into a single
              domain. OnlineDraft abstracts the drafting process into a domain-agnostic engine backed by
              scalable AWS cloud architecture and enriched with LLM-powered support agents.
            </p>
          </div>

          <div className="project-text">
            <h3 style={{ color: 'var(--coral)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>Core Features</h3>
            <ul>
              <li><strong>Universal Draft Engine:</strong> Category-agnostic drafting — any list of items can be converted into a live, multi-user draft room</li>
              <li><strong>RAG-Based Support Agent:</strong> Leveraged LLMs to build a custom RAG system that handles 5+ customer support tickets per month autonomously</li>
              <li><strong>Voice Agent:</strong> LLM-powered voice agent for hands-free drafting interactions</li>
              <li><strong>Cloud-Native Backend:</strong> AWS Lambda for serverless compute, CloudFormation for infrastructure-as-code, DynamoDB for sub-millisecond access, S3 for static assets</li>
              <li><strong>Full-Stack Implementation:</strong> React + Node.js across frontend and backend, with REST APIs tested in Postman</li>
              <li><strong>Revenue-Generating:</strong> Live product generating ~$5,000/month with real user subscriptions and transactions</li>
            </ul>
          </div>

          <div className="project-text">
            <h3 style={{ color: 'var(--coral)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>Technical Architecture</h3>
            <p>
              The system is built on a serverless AWS stack. Lambda functions handle all business logic
              via API Gateway. DynamoDB was chosen for single-digit millisecond reads — critical during
              live draft timers where pick windows are time-sensitive. CloudFormation manages all
              infrastructure as code, enabling repeatable deployments.
            </p>
            <p>
              The RAG support agent indexes the product's documentation and FAQ content, enabling it to
              answer user questions and resolve common issues without human intervention. This reduces
              support overhead while maintaining response quality. The voice agent extends this capability
              to spoken interactions during live draft sessions.
            </p>
            <p>
              I earned the AWS Cloud Practitioner Certification during this project, formalizing the AWS
              knowledge applied throughout the build.
            </p>
          </div>

          <div className="project-tags-row">
            {tags.map(t => <span key={t} className="project-tag">{t}</span>)}
          </div>
        </div>

        <a href="https://www.onlinedraft.com/" target="_blank" rel="noopener noreferrer" className="project-link">
          Visit OnlineDraft.com ↗
        </a>
      </div>
    </>
  );
}

export default Project6;
