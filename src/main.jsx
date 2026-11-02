import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  Menu,
  X,
  Code2,
  MonitorCog,
  Layers3,
  MapPin,
  Sparkles,
  Terminal,
  ExternalLink
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    number: "01",
    type: "WEB APPLICATION · REACT",
    title: "E-commerce experience",
    description: "A React storefront with product pages, cart and checkout flows, authentication, role-based dashboards, wishlists, and order management. Seller product data is persisted locally, with room to connect a Node.js and Express API as the backend evolves.",
    stack: ["React", "JavaScript", "Vite", "Context API", "Local storage"],
    mark: "shop",
    link: "#contact"
  },
  {
    number: "02",
    type: "WEB DEVELOPMENT · MAP UI",
    title: "Security company map",
    description: "An interactive map website concept for a security company, helping visitors explore client locations and reveal the relevant security contact when hovering over a marker.",
    stack: ["React", "JavaScript", "HTML", "CSS"],
    mark: "map",
    link: "#contact"
  },
  {
    number: "03",
    type: "FINTECH · FRONTEND APPLICATION",
    title: "NovaBank — Digital Banking Dashboard",
    description: "Designed and developed a modern banking dashboard featuring account overview, transaction history, spending analytics, virtual card interface, and interactive simulated transfers.",
    stack: ["React", "JavaScript", "CSS", "Vite"],
    mark: "bank",
    image: "/novabank.png.jpeg",
    link: "#contact"
  }
];

const skills = [
  { icon: Code2, title: "Frontend development", text: "React, JavaScript, HTML, CSS, responsive layouts, reusable components" },
  { icon: Layers3, title: "Backend development", text: "Node.js, Express fundamentals, REST API concepts, server-side application logic" },
  { icon: MonitorCog, title: "IT support", text: "Laptop setup, troubleshooting, connectivity, user support, technical documentation" },
  { icon: Sparkles, title: "Creative problem-solving", text: "Clear communication, content tools, rapid learning, practical AI-assisted workflows" }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Gosaye home">
          <span className="brand-mark">G.</span><span>GOSAYE <i>MULUSEW</i></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>What I do</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO OPPORTUNITIES <span className="eyebrow-line" /></div>
            <h1>I build digital<br />experiences with <span className="accent-word">purpose.</span></h1>
            <p className="hero-sub">Software developer. Full-stack thinker. Curious by default.</p>
            <p className="hero-body">I’m Gosaye — a computer science graduate building responsive web experiences with React and JavaScript, while growing my backend skills with Node.js and Express. I care about clean interfaces, useful features, and code that solves real problems.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a>
              <a className="text-link" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={14} /> Addis Ababa, Ethiopia</span>
              <span className="meta-separator">/</span>
              <span>React · Node.js · Full-stack development</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Decorative code-inspired graphic">
            <div className="visual-top"><span>CREATIVE PROCESS / 001</span><span className="visual-cross">✳</span></div>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="visual-center"><span className="center-bracket">{"<"}</span><span className="center-g">G</span><span className="center-bracket">{"/>"}</span></div>
            <div className="floating-card card-code">
              <div className="window-dots"><b /><b /><b /></div>
              <code><span>const</span> idea = <em>"build"</em>;</code>
              <code><span>return</span> <strong>impact</strong>;</code>
            </div>
            <div className="floating-card card-label"><span className="label-star">✳</span><div><b>Curiosity first.</b><small>Always learning, always building.</small></div></div>
            <div className="visual-bottom"><span>DESIGN WITH INTENTION</span><span>° 09.03 N / 38.74 E</span></div>
          </div>
          <div className="hero-index"><span>SCROLL TO EXPLORE</span><div className="index-line" /><span>01 — 04</span></div>
        </section>

        <section className="ticker" aria-label="Areas of focus">
          <div className="ticker-track">
            {["REACT & WEB DEVELOPMENT", "IT SUPPORT", "BUILDING IN PUBLIC", "THOUGHTFUL UX", "CONTINUOUS LEARNING", "REACT & WEB DEVELOPMENT", "IT SUPPORT", "BUILDING IN PUBLIC"].map((item, i) => (
              <span key={i}>{item}<b>✳</b></span>
            ))}
          </div>
        </section>

        <section className="work section-wrap" id="work">
          <div className="section-heading">
            <div><div className="eyebrow"><span className="section-number">01</span> SELECTED WORK</div><h2>Ideas, meet <span className="serif-accent">execution.</span></h2></div>
            <p>A few projects that reflect how I learn, solve problems, and bring interfaces to life.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-row" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className={`project-art art-${project.mark}`}>
                  {project.mark === "shop" && <div className="shop-mock"><div className="mock-nav"><span>FORM / FUNCTION</span><span>SHOP&nbsp; ↗</span></div><div className="mock-product"><div className="product-orb" /><div className="product-copy"><small>OBJECT 001</small><b>Made for<br />everyday.</b><span>EXPLORE COLLECTION ↗</span></div></div><div className="mock-footer"><span>01 / ESSENTIALS</span><span>DESIGNED TO BE USEFUL</span></div></div>}
                  {project.mark === "map" && <div className="map-mock"><div className="map-grid" /><div className="map-route route-a" /><div className="map-route route-b" /><span className="map-pin pin-a">●<small>HQ</small></span><span className="map-pin pin-b">●<small>CLIENT 02</small></span><span className="map-pin pin-c">●<small>CLIENT 03</small></span><div className="map-tag"><span /> LIVE LOCATIONS</div></div>}
                  {project.mark === "bank" && (<div className="bank-mock"><img src={project.image} alt="NovaBank digital banking dashboard"/></div>)}
                </div>
                <div className="project-content">
                  <div className="project-type">{project.type}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <a className="project-link" href={project.link}>Discuss this project <ArrowUpRight size={16} /></a>
                </div>
              </article>
            ))}
          </div>
          <div className="work-note"><span className="note-symbol">✳</span><p>These projects show my hands-on approach to building and learning. I’m continuing to strengthen my full-stack skills, including how React interfaces connect to Node.js and Express backends.</p></div>
        </section>

        <section className="about section-wrap" id="about">
          <div className="about-left">
            <div className="eyebrow"><span className="section-number">02</span> A LITTLE ABOUT ME</div>
            <h2>Tech is the tool.<br /><span className="serif-accent">People are the point.</span></h2>
            <div className="about-stamp"><span>BUILT ON</span><b>Curiosity</b><span>REFINED BY PRACTICE</span></div>
          </div>
          <div className="about-copy">
            <p className="about-lead">I’m a computer science graduate focused on building useful web applications with React and JavaScript, and developing my full-stack capabilities with Node.js and Express.</p>
            <p>I enjoy turning product ideas into working interfaces: structuring components, managing application state, and building practical flows like carts, wishlists, authentication, and dashboards. My IT support experience at the African Union Commission has also strengthened my troubleshooting skills, patience, and ability to communicate technical information clearly.</p>
            <p>I’m now focused on growing as a software developer, especially across React, Node.js, and Express. I value readable code, dependable execution, clear communication, and learning by building real features.</p>
            <div className="experience-card"><div className="exp-icon"><MonitorCog size={20} /></div><div><b>IT Support · African Union Commission</b><span>Device setup, troubleshooting, connectivity and user support</span></div><ArrowUpRight size={17} className="exp-arrow" /></div>
          </div>
        </section>

        <section className="skills section-wrap" id="skills">
          <div className="section-heading">
            <div><div className="eyebrow"><span className="section-number">03</span> WHAT I BRING</div><h2>Useful skills.<br /><span className="serif-accent">Practical mindset.</span></h2></div>
            <p>My current focus is frontend development with React and strengthening the backend foundations needed to ship complete web applications.</p>
          </div>
          <div className="skill-grid">
            {skills.map(({ icon: Icon, title, text }, i) => <article className="skill-card" key={title}>
              <div className="skill-card-top"><span>0{i + 1}</span><Icon size={22} strokeWidth={1.6} /></div>
              <h3>{title}</h3><p>{text}</p><div className="skill-card-line" />
            </article>)}
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-kicker"><span className="status-dot" /> HAVE A PROJECT OR ROLE IN MIND?</div>
          <h2>Let’s make<br /><span className="serif-accent">something matter.</span></h2>
          <p>I’m looking for software development opportunities where I can contribute with React, keep growing with Node.js and Express, and work with people who care about building useful products. Have a role, project, or idea in mind? Let’s talk.</p>
          <a className="button button-primary contact-button" href="mailto:YOUR_EMAIL@example.com">Start a conversation <ArrowUpRight size={17} /></a>
          <div className="contact-foot"><span>GOOD WORK STARTS WITH A CONVERSATION.</span><span>ADDIS ABABA · ETHIOPIA</span></div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">G.</span><span>GOSAYE <i>MULUSEW</i></span></a>
        <span className="footer-copy">Designed with intention. Built with curiosity. © {new Date().getFullYear()}</span>
        <a className="back-top" href="#home">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);