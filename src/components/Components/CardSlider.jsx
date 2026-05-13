import React from "react";
import "../../index.css";
import "./CardSlider.css";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import treesImage from "../../assets/trees.png";
import treesPointImage from "../../assets/trees_pointilism.png";

/* ── Reusable card visual components ────────────────── */

const MacBar = ({ filename }) => (
  <div className="cv-mac-bar">
    <span className="cv-dot cv-red" />
    <span className="cv-dot cv-yellow" />
    <span className="cv-dot cv-green" />
    {filename && <span className="cv-filename">{filename}</span>}
  </div>
);

const TerminalCard = ({ filename, lines, accent = '#4ADE80' }) => (
  <div className="cv-terminal">
    <MacBar filename={filename} />
    <div className="cv-terminal-body" style={{ '--accent': accent }}>
      {lines.map((line, i) => (
        <div key={i} className={`cv-line ${line.type || ''}`}>
          {line.type === 'cmd' && <span className="cv-prompt">$</span>}
          {line.text}
        </div>
      ))}
    </div>
  </div>
);

const BrowserCard = ({ url, bgColor, children }) => (
  <div className="cv-browser">
    <div className="cv-mac-bar cv-browser-bar">
      <span className="cv-dot cv-red" />
      <span className="cv-dot cv-yellow" />
      <span className="cv-dot cv-green" />
      <span className="cv-url-pill">{url}</span>
    </div>
    <div className="cv-browser-body" style={{ background: bgColor }}>
      {children}
    </div>
  </div>
);

const ChessCard = () => (
  <div className="cv-chess">
    <div className="cv-chess-board">
      {Array.from({ length: 16 }).map((_, i) => (
        <div
          key={i}
          className={`cv-sq ${(Math.floor(i / 4) + i % 4) % 2 === 0 ? 'cv-sq-l' : 'cv-sq-d'}`}
        />
      ))}
    </div>
    <div className="cv-chess-pieces">♜ ♛ ♞ ♟</div>
    <div className="cv-chess-label">C++ OOP Engine</div>
  </div>
);

const CryptoCard = () => {
  const heights = [55, 80, 42, 95, 60, 72, 88, 38, 65, 90, 50, 78];
  const isDown  = [true, false, true, false, false, true, false, true, false, false, true, false];
  return (
    <div className="cv-crypto">
      <div className="cv-crypto-header">
        <span className="cv-ticker">BTC / USDT</span>
        <span className="cv-exchange">Binance API</span>
      </div>
      <div className="cv-chart">
        {heights.map((h, i) => (
          <div key={i} className={`cv-candle ${isDown[i] ? 'cv-down' : 'cv-up'}`} style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="cv-crypto-footer">
        <span className="cv-tag-small">HMAC-SHA256</span>
        <span className="cv-tag-small">Automated</span>
        <span className="cv-tag-small">Backtesting</span>
      </div>
    </div>
  );
};

const ImageSplitCard = () => (
  <div className="cv-split">
    <div className="cv-split-half cv-split-l" style={{ backgroundImage: `url(${treesImage})` }}>
      <span className="cv-split-label">Original</span>
    </div>
    <div className="cv-split-half cv-split-r" style={{ backgroundImage: `url(${treesPointImage})` }}>
      <span className="cv-split-label">Pointillism</span>
    </div>
    <div className="cv-split-divider" />
    <div className="cv-split-icon">↔</div>
  </div>
);

/* ── Project data ────────────────────────────────────── */
const projects = [
  {
    visual: (
      <BrowserCard url="onlinedraft.com" bgColor="#0F1E3D">
        <div className="cv-draft">
          <div className="cv-draft-icon">📋</div>
          <div className="cv-draft-headline">Draft Anything</div>
          <div className="cv-draft-sub">~2,000 users · ~$5k/mo revenue</div>
          <div className="cv-draft-bars">
            <div className="cv-bar-placeholder" />
            <div className="cv-bar-placeholder cv-bp-short" />
          </div>
          <div className="cv-tag-row">
            <span className="cv-tag-small">AWS</span>
            <span className="cv-tag-small">DynamoDB</span>
            <span className="cv-tag-small">React</span>
          </div>
        </div>
      </BrowserCard>
    ),
    title: "OnlineDraft",
    description: "Generalized drafting service — ~2,000 users, ~$5k/mo revenue, RAG-based voice & support agents",
    link: "/online-draft",
    tags: ["React", "AWS", "Full-Stack"]
  },
  {
    visual: (
      <BrowserCard url="bartlettre.com" bgColor="#F5F0E8">
        <div className="cv-re">
          <div className="cv-re-icon">🏠</div>
          <div className="cv-re-headline" style={{ color: '#2C1810' }}>San Francisco</div>
          <div className="cv-re-sub" style={{ color: '#8B6F4E' }}>Luxury Real Estate · 10+ pages</div>
          <div className="cv-re-bars">
            <div className="cv-bar-placeholder" style={{ background: 'rgba(139,111,78,0.3)' }} />
            <div className="cv-bar-placeholder cv-bp-short" style={{ background: 'rgba(139,111,78,0.2)' }} />
          </div>
          <div className="cv-tag-row">
            <span className="cv-tag-small cv-tag-warm">Static Gen</span>
            <span className="cv-tag-small cv-tag-warm">CloudFront</span>
            <span className="cv-tag-small cv-tag-warm">S3</span>
          </div>
        </div>
      </BrowserCard>
    ),
    title: "BartlettRE.com",
    description: "Static content generator for a top SF realtor — 10+ pages, AWS S3 + CloudFront, no-code editing",
    link: "/bartlett-re",
    tags: ["React", "AWS S3", "CloudFront"]
  },
  {
    visual: <CryptoCard />,
    title: "Crypto Trading Bot",
    description: "Automated platform interfacing with the Binance API — market & limit orders, HMAC-SHA256 auth, backtesting",
    link: "/crypto-trading-bot",
    tags: ["Python", "Binance API", "Fintech"]
  },
  {
    visual: (
      <TerminalCard
        filename="kvstore.c"
        accent="#4ADE80"
        lines={[
          { text: './kvstore --port 8080', type: 'cmd' },
          { text: 'Server listening on :8080', type: 'dim' },
          { text: 'SET user:1 "Owen"', type: 'cmd' },
          { text: '→ OK', type: 'ok' },
          { text: 'GET user:1', type: 'cmd' },
          { text: '→ "Owen"', type: 'ok' },
          { text: 'INCR session_count', type: 'cmd' },
          { text: '→ 1', type: 'ok' },
        ]}
      />
    ),
    title: "Key/Value Store",
    description: "Distributed client-server KV store with pthread concurrency, transactions, and atomic rollbacks",
    link: "/key-value",
    tags: ["C", "Sockets", "Multithreading"]
  },
  {
    visual: <ImageSplitCard />,
    title: "Image Manipulation",
    description: "C program performing pixel-level transformations — blur, pointillism, grayscale, rotate, and blend",
    link: "/image-manip",
    tags: ["C", "Pixel Manipulation", "CLI"]
  },
  {
    visual: (
      <TerminalCard
        filename="csim.cpp"
        accent="#22D3EE"
        lines={[
          { text: './csim -s 8 -E 4 -b 16', type: 'cmd' },
          { text: 'Policy : LRU  ·  Write-back', type: 'dim' },
          { text: '', type: '' },
          { text: 'hits:   847     92.1 %', type: 'ok' },
          { text: 'misses:  72      7.9 %', type: 'warn' },
          { text: 'evicts:  24', type: 'dim' },
          { text: 'cycles:  4,291', type: 'dim' },
        ]}
      />
    ),
    title: "Cache Simulator",
    description: "C++ simulator modeling LRU, FIFO, write-back & write-through cache policies with performance metrics",
    link: "/cache-sim",
    tags: ["C++", "Systems", "Architecture"]
  },
  {
    visual: <ChessCard />,
    title: "Chess Engine",
    description: "Full two-player C++ chess with OOP architecture, check & checkmate detection, and castling",
    link: "/chess",
    tags: ["C++", "OOP", "Game Logic"]
  },
];

/* ── Component ───────────────────────────────────────── */
const CardSlider = () => {
  const slideLeft  = () => { document.getElementById("slider").scrollLeft += 360; };
  const slideRight = () => { document.getElementById("slider").scrollLeft -= 360; };

  return (
    <div id="main-slider-container">
      <MdChevronLeft  size={38} className="slider-icon left"  onClick={slideRight} />
      <MdChevronRight size={38} className="slider-icon right" onClick={slideLeft}  />
      <div id="slider">
        {projects.map((project, index) => (
          <a href={project.link} key={index} className="slider-card-link">
            <div className="slider-card">
              <div className="slider-card-visual">
                {project.visual}
              </div>
              <div className="slider-card-info">
                <p className="slider-card-title">{project.title}</p>
                <p className="slider-card-description">{project.description}</p>
                <div className="slider-card-tags">
                  {project.tags.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
