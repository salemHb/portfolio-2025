import { ArrowUpRight, Box, Briefcase, CircuitBoard, Code2, Database, GitBranch, GraduationCap, KeyRound, MapPin, Network, Radio, Server, ShieldCheck, Workflow } from "lucide-react";

const projects = [
  { icon: Server, title: "Self-managed infrastructure lab", kind: "Infrastructure · 2026", description: "A Proxmox-based home lab for running and operating virtual machines, Linux containers, and self-hosted services.", details: "The environment includes Home Assistant, network management, NAS, media, video surveillance, and a Docker host. I’ve worked on secure remote access, GPU passthrough, troubleshooting, and planning backups and recovery across workloads.", tags: "Proxmox VE · KVM/QEMU · Linux · Docker · Tailscale" },
  { icon: Box, title: "Application hosting & staging", kind: "Infrastructure · 2026", description: "Isolated staging and production environments for a Laravel application.", details: "Operated containerized services with Docker Compose and Cloudflare Tunnel, configured a separate staging database and access, and troubleshot application and deployment issues.", tags: "Docker Compose · Laravel · MySQL · Cloudflare Tunnel" },
  { icon: Workflow, title: "Workflow automation", kind: "Automation · 2026", description: "API-connected workflows for content and publishing operations.", details: "Built and tested n8n workflows using triggers and APIs for Facebook and Instagram publishing, including external webhook access and integration troubleshooting.", tags: "n8n · APIs · Webhooks · Tailscale" },
  { icon: CircuitBoard, title: "Solar inverter connectivity", kind: "In progress · Hardware & infrastructure", description: "Connecting a solar inverter to the home network and exploring local monitoring.", details: "Working with a Wi-Fi data logger connected to a solar inverter, configuring its network connection and investigating how to access inverter data locally. The project brings together hardware connectivity, networking, and home automation.", tags: "Solar inverter · Wi-Fi data logger · Networking · Home Assistant" },
  { icon: CircuitBoard, title: "Modbus energy monitoring gateway", kind: "Planned · Hardware & software", description: "An edge device that turns industrial power measurements into a live energy dashboard.", details: "Build an ESP32-based gateway with an isolated RS-485 interface to read a Modbus RTU energy meter. Decode and validate register data, buffer readings during network outages, and publish telemetry over MQTT to a backend and dashboard with trends and alerts. Document the wiring and register map, test against a Modbus simulator and real hardware, and measure recovery from communication failures.", tags: "ESP32 · RS-485 · Modbus RTU · MQTT · Time-series data · Dashboard" },
  { icon: Network, title: "Multi-tenant deployment platform", kind: "Planned · Platform engineering", description: "A self-service platform for deploying isolated applications across environments.", details: "Build an API and worker that provision tenant environments, manage deployment lifecycles, and roll back failed releases. Add role-based access, audit logs, health checks, and a control-plane dashboard.", tags: "Go or TypeScript · PostgreSQL · Docker · Kubernetes · OpenTelemetry" },
  { icon: Radio, title: "Event-driven order processing system", kind: "Planned · Distributed systems", description: "A resilient service architecture for processing orders and payments asynchronously.", details: "Build independently deployable services with an event broker, transactional outbox, idempotent consumers, retries, and dead-letter queues. Document failure modes and test recovery under load.", tags: "Node.js or Go · PostgreSQL · Kafka or RabbitMQ · Docker" },
  { icon: KeyRound, title: "Identity and access gateway", kind: "Planned · Security", description: "A central authentication and authorization service for internal applications.", details: "Implement OAuth 2.0 and OpenID Connect integrations, short-lived sessions, role-based permissions, audit events, and rate limiting. Include threat modeling and automated security tests.", tags: "OAuth 2.0 · OpenID Connect · PostgreSQL · Redis" },
  { icon: Database, title: "Backup and recovery orchestrator", kind: "Planned · Infrastructure", description: "A service for managing and verifying backups across lab workloads.", details: "Build scheduled backup jobs, retention policies, encrypted storage, status reporting, and restore drills for virtual machines and application data. Document recovery objectives and test the restore process.", tags: "Linux · Proxmox API · Object storage · Automation" },
  { icon: GitBranch, title: "Production reliability toolkit", kind: "Planned · Observability", description: "An observability and incident-response stack for real services.", details: "Instrument a sample application with metrics, logs, and traces; define service-level objectives and actionable alerts. Add deployment checks, runbooks, failure injection, and an incident review.", tags: "OpenTelemetry · Prometheus · Grafana · CI/CD" },
];

const companyLogos: Record<string, string> = {
  "Food Innovation Studio": "/company-logos/food-innovation-studio.svg",
  "International Rescue Committee": "/company-logos/international-rescue-committee.png",
  "Tendu Solutions": "/company-logos/tendu.png",
  "Farmbid Africa": "/company-logos/farmbid.webp",
  "Hallmark Marketing Company": "/company-logos/hallmark.jpg",
};

const experience = [
  { role: "Digital Infrastructure Lead", company: "Food Innovation Studio", period: "Jan 2026 – Present", description: "Lead digital infrastructure, backend systems, web platforms, and data workflows. Work across architecture, integrations, security practices, monitoring, automation, and documentation." },
  { role: "Full-Stack Developer", company: "Tendu Solutions", period: "Jan 2024 – Oct 2025", description: "Built web applications and backend services, integrated APIs, supported AWS and Azure solutions, and automated business workflows." },
  { role: "Consultant Research Assistant", company: "International Rescue Committee", period: "Jun 2024 – Dec 2024", description: "Coordinated community programmes and stakeholder reporting, supporting more than 160 participants weekly." },
  { role: "IT Support Officer", company: "Farmbid Africa", period: "Sep 2022 – Jan 2024", description: "Administered servers and enterprise applications, supported cloud migration and CI/CD, and documented infrastructure and security practices." },
  { role: "IT Intern", company: "Hallmark Marketing Company", period: "Jan 2020 – Apr 2021", description: "Supported analytics, reporting, monitoring, and web performance improvements using SQL and JavaScript." },
];

export default function Home() {
  return (
    <main className="portfolio" id="top">
      <div className="portfolio-inner">
        <header className="intro">
          <p className="eyebrow"><span className="status-dot" /> SOFTWARE · INFRASTRUCTURE · SECURITY</p>
          <h1>Hussein Salim<span className="accent">.</span></h1>
          <p className="intro-role">Senior Software &amp; Infrastructure Engineer <span className="separator">/</span> <span className="location"><MapPin size={15} aria-hidden="true" /> Kenya</span></p>
          <p className="intro-copy">With six years of experience, I build software and run the systems behind it. My work spans backend engineering, cloud infrastructure, automation, and security-minded operations.</p>
          <p className="current"><span className="status-dot" /> Digital Infrastructure Lead at Food Innovation Studio</p>
          <div className="social-links">
            <a href="https://github.com/salemHb" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
            <a href="https://www.linkedin.com/in/hussein-salim-619007b8/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a>
          </div>
        </header>

        <nav className="portfolio-nav" aria-label="On this page">
          <a href="#top">Home</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#education">Education</a><a href="/blog">Writing ↗</a>
        </nav>

        <section id="projects" className="portfolio-section">
          <div className="section-heading"><div><p className="section-kicker">THE THINGS I BUILD &amp; RUN</p><h2>Selected work</h2></div><span>01 / PROJECTS</span></div>
          <p className="section-intro">Hands-on infrastructure work and ambitious builds on my roadmap. Planned projects are ideas I intend to implement; select any project for the scope.</p>
          <div className="project-list">
            {projects.map((project) => {
              const Icon = project.icon;
              return <details className="project-row" key={project.title}>
                <summary><span className="item-icon"><Icon size={19} /></span><span className="row-main"><strong>{project.title}</strong><span>{project.description}</span></span><span className="row-kind">{project.kind}</span><span className="chevron" aria-hidden="true">⌄</span></summary>
                <div className="project-detail"><p>{project.details}</p><p className="project-tags">{project.tags}</p></div>
              </details>;
            })}
          </div>
        </section>

        <section id="experience" className="portfolio-section">
          <div className="section-heading"><div><p className="section-kicker">WHERE I’VE CONTRIBUTED</p><h2>Experience</h2></div><span>02 / WORK</span></div>
          <div className="experience-list">{experience.map((item) => <article className="experience-row" key={item.company}><span className="item-icon company-logo">{companyLogos[item.company] ? <img className={item.company === "Farmbid Africa" ? "farmbid-logo" : undefined} src={companyLogos[item.company]} alt="" /> : <Briefcase size={18} />}</span><div className="row-main"><h3>{item.role} <span>at {item.company}</span></h3><p>{item.description}</p></div><p className="row-kind">{item.period}</p></article>)}</div>
        </section>

        <section id="skills" className="portfolio-section">
          <div className="section-heading"><div><p className="section-kicker">HOW I WORK</p><h2>Tools &amp; practice</h2></div><span>03 / SKILLS</span></div>
          <div className="skill-list">
            <div><Code2 size={18} /><strong>Software</strong><p>PHP, Laravel, Node.js, TypeScript, React, REST APIs, MySQL, PostgreSQL</p></div>
            <div><Server size={18} /><strong>Infrastructure</strong><p>Linux, Windows Server, Proxmox, Docker, AWS, Azure, CI/CD</p></div>
            <div><ShieldCheck size={18} /><strong>Security &amp; operations</strong><p>Secure access, system hardening, monitoring, troubleshooting, backups, documentation</p></div>
          </div>
        </section>

        <section id="education" className="portfolio-section education-section">
          <div className="section-heading"><div><p className="section-kicker">THE FOUNDATION</p><h2>Education</h2></div><span>04 / EDUCATION</span></div>
          <div className="education-row"><span className="item-icon"><GraduationCap size={19} /></span><div className="row-main"><h3>BSc, Computer Science</h3><p>Moi University</p></div><span className="row-kind">2016 – 2020</span></div><div className="education-row"><span className="item-icon"><GraduationCap size={19} /></span><div className="row-main"><h3>Kanga School</h3><p>Secondary education</p></div><span className="row-kind">2011 – 2014</span></div>
        </section>
        <footer className="portfolio-footer"><p>Interested in working together? <a href="mailto:husseinsalim419@gmail.com">Get in touch <ArrowUpRight size={14} /></a></p><span>© {new Date().getFullYear()} Hussein Salim</span></footer>
      </div>
    </main>
  );
}
