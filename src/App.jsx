/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  Code2,
  Contact2,
  Cpu,
  Database,
  ExternalLink,
  FileText,
  Github,
  Home,
  Instagram,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Palette,
  Server,
  ShieldCheck,
  Sun,
  Terminal,
} from "lucide-react";
import "./index.css";
import asset1 from "./assets/asset1.png";
import arrow from "./assets/arrow.png";

const links = {
  email: "mailto:bimorajendraa@gmail.com",
  github: "https://github.com/bimorajendraa",
  linkedin: "https://www.linkedin.com/in/bimo-rajendra-64139a284",
  instagram:
    "https://www.instagram.com/bimo_rajendra_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
};

const heroCards = [
  {
    title: "Corporate Web Apps",
    meta: "Next js, Vite js",
    href: "#projects",
    color: "bg-cyan-100 dark:bg-cyan-950/85",
    text: "Secure workflows, AI API, RBAC",
    float: "float-a",
    rotate: -7,
    position: "lg:left-[2%] lg:top-[88px] lg:w-[270px]",
  },
  {
    title: "UI/UX Systems",
    meta: "Aksara, TreeLand, Tutor",
    href: "https://www.figma.com/design/AYqpWNFyWNtl0fosXMpn2q/HOLOGY?node-id=1-2&t=CXIgDgSRJI7vXqB2-1",
    color: "bg-lime-100 dark:bg-emerald-950/85",
    text: "Interfaces that turn messy flows into clear product screens",
    float: "float-b",
    rotate: 5,
    position: "lg:left-[23%] lg:top-[46px] lg:w-[260px]",
  },
  {
    title: "GRC + Security",
    meta: "Pentest reports and risk notes",
    href: "#documents",
    color: "bg-rose-100 dark:bg-rose-950/80",
    text: "OWASP ZAP, PortSwigger, validation-aware development",
    float: "float-c",
    rotate: -4,
    position: "lg:right-[23%] lg:top-[80px] lg:w-[260px]",
  },
  {
    title: "Infrastructure",
    meta: "Docker, EC2, Redis, Linux",
    href: "#skills",
    color: "bg-amber-100 dark:bg-stone-900",
    text: "Web servers, networking labs, deployment monitoring",
    float: "float-d",
    rotate: 6,
    position: "lg:right-[2%] lg:top-[36px] lg:w-[270px]",
  },
];
const coreSkills = [
  {
    icon: ShieldCheck,
    title: "Security-Aware Apps",
    description:
      "RBAC, authorization checks, input validation, secure API integration, and SQL injection risk mitigation.",
    tags: ["OWASP ZAP", "PortSwigger", "Auth", "Risk"],
    tone: "border-cyan-300 bg-cyan-50 dark:bg-cyan-950/40",
  },
  {
    icon: Layers,
    title: "Product + UI/UX",
    description:
      "Requirements, BPMN, SRS, Figma prototypes, usability flows, and interface QA from idea to handoff.",
    tags: ["Figma", "BPMN", "SRS", "QA"],
    tone: "border-lime-300 bg-lime-50 dark:bg-lime-950/30",
  },
  {
    icon: Server,
    title: "Infrastructure",
    description:
      "Docker, AWS EC2, Redis caching, Linux, web servers, computer networking, and monitoring fundamentals.",
    tags: ["Docker", "AWS EC2", "Redis", "Linux"],
    tone: "border-amber-300 bg-amber-50 dark:bg-amber-950/30",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Next.js, Vite, React, Tailwind CSS, Material UI, shadcn/ui, REST APIs, AI APIs, and debugging.",
    tags: ["React", "Next.js", "Tailwind", "API"],
    tone: "border-rose-300 bg-rose-50 dark:bg-rose-950/30",
  },
];

const techStack = [
  { name: "React", src: "/react.png" },
  { name: "Next.js", src: "/nextjs.png" },
  { name: "Tailwind CSS", src: "/tailwindcss.png" },
  { name: "Figma", src: "/figma.png" },
  { name: "Python", src: "/python.png" },
  { name: "C++", src: "/c++.png" },
  { name: "Vite", src: "/vite.png" },
];

const screenshotUrl = (href) =>
  `https://image.thum.io/get/width/1200/crop/760/noanimate/${href}`;

const getProjectDomain = (href) => {
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return href;
  }
};

const appProjects = [
  {
    title: "Aksara",
    type: "Mobile App",
    href: "https://github.com/bimorajendraa/aksara",
    summary:
      "Application build connected to product design work, focused on usable flows and maintainable frontend structure.",
    tags: ["Flutter", "Dart", "GitHub", "Supabase"],
    accent: "from-lime-200 via-white to-cyan-100",
    short: "AKS",
  },
  {
    title: "LISSA",
    type: "Corporate Platform",
    href: "https://lissa-app.anargya.fun/",
    summary:
      "Internal web application with database-backed workflows, AI API integration, and security-conscious access controls.",
    tags: ["RBAC", "Database", "Secure Web"],
    accent: "from-cyan-200 via-white to-sky-100",
    short: "LIS",
  },
  {
    title: "BESTIE",
    type: "Corporate Platform",
    href: "https://bestie-app.anargya.fun/",
    summary:
      "Web platform contribution across architecture choices, feature development, validation, and application workflows.",
    tags: ["Web App", "API", "Auth", "Workflow"],
    accent: "from-rose-200 via-white to-amber-100",
    short: "BES",
  },
  {
    title: "Conation",
    type: "UMKM Platform",
    href: "https://www.conation.co.id/",
    summary:
      "Converted UI designs into responsive pages, integrated required flows, and resolved functional/UI bugs with Beta-U.",
    tags: ["Next.js", "Tailwind", "API", "QA"],
    accent: "from-zinc-200 via-white to-lime-100",
    short: "CON",
  },
  {
    title: "Study at SAC",
    type: "Corporate Platform",
    href: "https://studyatsac.com/",
    summary:
      "Built responsive and interactive interfaces with Vite, Tailwind CSS, Material UI, and backend API collaboration.",
    tags: ["Vite", "Material UI", "Tailwind", "API"],
    accent: "from-amber-200 via-white to-cyan-100",
    short: "SAC",
  },
  {
    title: "RDK ITS",
    type: "Organization Platform",
    href: "https://www.rdk-its.com/",
    summary:
      "Public-facing web delivery with responsive implementation, troubleshooting, and cross-team coordination.",
    tags: ["Frontend", "Responsive", "Deployment"],
    accent: "from-slate-200 via-white to-rose-100",
    short: "RDK",
  },
  {
    title: "HMSI Eksternal",
    type: "Organization Platform",
    href: "https://eksternal.hmsi-its.my.id/",
    summary:
      "External-facing HMSI ITS platform for organization communication, public information, and stakeholder access.",
    tags: ["Frontend", "HMSI ITS", "Responsive", "Deployment"],
    accent: "from-blue-200 via-white to-lime-100",
    short: "HMS",
  },
  {
    title: "Asuka Trainee",
    type: "Corporate Platform",
    href: "https://asukatrainee-fe.vercel.app/",
    summary:
      "Frontend implementation for committee/product needs with clean navigation, component structure, and deployment.",
    tags: ["Vercel", "Frontend", "UI"],
    accent: "from-lime-200 via-white to-amber-100",
    short: "ASK",
  },
  {
    title: "TEDx ITS 2025",
    type: "Event Website",
    href: "https://tedxits2025-frontend.vercel.app/",
    summary:
      "Implemented responsive pages, animations, bug fixes, and API-based dashboard/detail flows for an event platform.",
    tags: ["Next.js", "shadcn/ui", "Animation", "Dashboard"],
    accent: "from-red-200 via-white to-zinc-100",
    short: "TED",
  },
  {
    title: "MUN 2025",
    type: "Event Website",
    href: "https://mun2025-fe.vercel.app/",
    summary:
      "Frontend delivery for an event experience, keeping content structured, responsive, and ready for public access.",
    tags: ["Frontend", "Vercel", "Event"],
    accent: "from-cyan-200 via-white to-rose-100",
    short: "MUN",
  },
  {
    title: "Petrolida 2025",
    type: "Event Website",
    href: "https://petrolida2025-fe.vercel.app/",
    summary:
      "Contributed UI slicing, debugging, and integrations while collaborating with cross-functional event teams.",
    tags: ["Next.js", "Tailwind", "Integration"],
    accent: "from-amber-200 via-white to-lime-100",
    short: "PET",
  },
];

const uiUxProjects = [
  {
    title: "Aksara",
    href: "https://www.figma.com/design/AYqpWNFyWNtl0fosXMpn2q/HOLOGY?node-id=1-2&t=CXIgDgSRJI7vXqB2-1",
    description:
      "Product interface exploration for a polished learning/product flow.",
  },
  {
    title: "TreeLand",
    href: "https://www.figma.com/design/8o7JFvg33wggqgaKVArxzk/TreeLand?node-id=1-3&t=kinPA32VDJ29YDgU-1",
    description:
      "UI concept with playful visual hierarchy and clear interaction states.",
  },
  {
    title: "Tutor",
    href: "https://www.figma.com/design/IZ6TgLQP0c3m1ZRsnwPlqr/TUTOR-PPPL?node-id=3125-668&t=rHrMaIfbz1pHJfEu-1",
    description: "Education-oriented design system and user flow prototype.",
  },
];

const documentProjects = [
  {
    title: "Pentesting",
    href: "https://docs.google.com/document/d/1p0E67x-X7_JSC9v1oCYz7LesBsoKb9r0p5JDA_Av4kU/edit?usp=sharing",
    icon: ShieldCheck,
  },
  {
    title: "Mobile App",
    href: "https://docs.google.com/document/d/1LQaw5zjzEI1K4dhBISfURmD4p2TnBld40bEohMH0LJw/edit?usp=sharing",
    icon: Cpu,
  },
  {
    title: "Software Development",
    href: "https://docs.google.com/document/d/1Deql-M_Grpn2yaTMJpgsxJTA813vrWmP7Rpvflay96Y/edit?usp=sharing",
    icon: Terminal,
  },
  {
    title: "Monitoring IT",
    href: "https://docs.google.com/document/d/17OeNOoJII7WYVFI-VtC9sICWBrr13yfSezNepQDMzfI/edit?usp=sharing",
    icon: Server,
  },
  {
    title: "ETL",
    href: "https://docs.google.com/document/d/1Sv2YT4RtqzORGMKRY3PuhPZaG0MUIT9jHfe1gWU9NEI/edit?usp=sharing",
    icon: Database,
  },
];

const algorithmProjects = [
  {
    title: "Market Predict",
    href: "https://github.com/bimorajendraa/market-predict",
    description:
      "Prediction-oriented repository for algorithm and data experimentation.",
  },
  {
    title: "Routing Optimization",
    href: "https://github.com/HuSand/TugasSCRouting",
    description: "Routing and optimization work for soft-computing coursework.",
  },
  {
    title: "Cyber Security",
    href: "https://github.com/bimorajendraa/cysec",
    description: "Cybersecurity learning repository with practical exercises.",
  },
  {
    title: "Graf",
    href: "https://github.com/bimorajendraa/graf",
    description: "Graph and algorithm practice with implementation.",
  },
];

const experiences = [
  {
    role: "Web Application Developer / Part-time",
    company: "PLN",
    period: "Mar 2026 - Present",
    description:
      "Built BESTIE and LISSA features, selected architecture, integrated AI APIs, and implemented RBAC, authorization checks, validation, and safer database workflows.",
  },
  {
    role: "Frontend Developer / Contract",
    company: "Beta-U",
    period: "Mar 2025 - Present",
    description:
      "Handled Conation frontend development by converting UI designs into responsive pages, integrating backend APIs, and resolving delivery bugs.",
  },
  {
    role: "Information System Department Intern",
    company: "PT Sucofindo",
    period: "Jan 2026 - Feb 2026",
    description:
      "Created SRS documentation, mapped business processes, and designed UI/UX concepts for a project monitoring system.",
  },
  {
    role: "Frontend Developer / Part-time",
    company: "PT SAC Inspirasi",
    period: "Aug 2025 - Jan 2026",
    description:
      "Built responsive web interfaces with Vite, Tailwind CSS, and Material UI while supporting API integration and frontend performance.",
  },
  {
    role: "Assistant Lecturer, IT Infrastructure",
    company: "Institut Teknologi Sepuluh Nopember",
    period: "Aug 2025 - Dec 2025",
    description:
      "Prepared practicum modules for Linux, web servers, IoT, and networking, then guided students through hands-on troubleshooting.",
  },
  {
    role: "Research Technology Application Expert Staff",
    company: "HMSI ITS",
    period: "Jan 2026 - Present",
    description:
      "Maintained HMSI platforms, deployed apps with Docker on AWS EC2, and used Redis caching to reduce loading delays.",
  },
  {
    role: "IT Development Vice Director",
    company: "ISE! 2025",
    period: "Sep 2025 - Dec 2025",
    description:
      "Led IT development for a 16,000+ user event platform, including architecture, tech stack decisions, QA, ticketing, and delivery workflow.",
  },
  {
    role: "Head of Web Development",
    company: "Imajas ITS",
    period: "Oct 2024 - Oct 2025",
    description:
      "Led frontend implementation, bug fixing, optimization, integration, deployment, and cross-division coordination.",
  },
  {
    role: "IT Development Expert Staff",
    company: "TEDx ITS 2025 and Ini Lho ITS 2025",
    period: "Sep 2024 - May 2025",
    description:
      "Implemented responsive pages with Next.js, Tailwind CSS, shadcn/ui, animation libraries, and API-based dashboard flows.",
  },
];

const stats = [
  { value: "3.74", label: "GPA, Information Systems ITS" },
  { value: "16K+", label: "users supported in event platform" },
  { value: "10+", label: "web apps and public launches" },
  { value: "2026", label: "PLN internal app work" },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeader({ eyebrow, title, description, align = "center" }) {
  return (
    <motion.div
      className={`mx-auto mb-12 max-w-3xl ${
        align === "left" ? "text-left" : "text-center"
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={reveal}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="inline-flex rounded-full bg-black px-4 py-1 text-sm font-semibold text-white dark:bg-zinc-800 dark:text-zinc-100">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-4xl font-black text-zinc-950 dark:text-zinc-50 md:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

function ExternalAnchor({ href, className, children, label }) {
  const isExternal = href?.startsWith("http");

  return (
    <a
      aria-label={label}
      className={className}
      href={href}
      rel={isExternal ? "noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      {children}
    </a>
  );
}

function HeroCard({ card }) {
  const titleSize =
    card.title.length > 13
      ? "lg:text-[1.45rem] 2xl:text-2xl"
      : "lg:text-2xl 2xl:text-[1.7rem]";

  return (
    <div
      className={`floating-card ${card.float} relative z-10 lg:absolute ${card.position}`}
    >
      <motion.a
        className={`${card.color} block min-h-[178px] w-full rounded-lg border border-black/10 p-5 text-zinc-950 shadow-[0_22px_48px_rgba(0,0,0,.12)] transition-colors dark:border-white/10 dark:text-zinc-100 dark:shadow-[0_24px_60px_rgba(0,0,0,.28)] lg:min-h-[190px]`}
        href={card.href}
        rel={card.href.startsWith("http") ? "noreferrer" : undefined}
        style={{ rotate: card.rotate / 2 }}
        target={card.href.startsWith("http") ? "_blank" : undefined}
        whileHover={{ rotate: 0, scale: 1.08, y: -10 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 310, damping: 16, mass: 0.8 }}
      >
        <div className="flex items-start justify-between gap-4">
          <span className="max-w-[80%] rounded-md bg-white/70 px-3 py-1 text-xs font-bold uppercase leading-4 text-zinc-700 dark:bg-white/10 dark:text-zinc-100">
            {card.meta}
          </span>
          <ExternalLink className="h-4 w-4 shrink-0" />
        </div>
        <h3
          className={`mt-7 text-2xl font-black uppercase leading-tight ${titleSize}`}
        >
          {card.title}
        </h3>
        <p className="mt-3 text-sm font-semibold leading-6 text-zinc-700 dark:text-zinc-300">
          {card.text}
        </p>
      </motion.a>
    </div>
  );
}

function ProjectPreview({ project }) {
  const image = project.image || screenshotUrl(project.href);
  const domain = getProjectDomain(project.href);

  return (
    <div
      className={`relative h-52 overflow-hidden rounded-md border border-black/10 bg-gradient-to-br ${project.accent}`}
    >
      <img
        alt={`${project.title} preview`}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.opacity = "0";
        }}
        src={image}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/25 to-zinc-950/5" />
      <div className="absolute left-4 top-4 flex max-w-[calc(100%-2rem)] items-center gap-2 rounded-md border border-white/25 bg-white/85 px-3 py-1 text-xs font-black text-zinc-950 shadow-sm backdrop-blur">
        <span className="h-2 w-2 shrink-0 rounded-full bg-lime-400" />
        <span className="truncate">{domain}</span>
      </div>
      <div className="absolute bottom-5 left-5 right-5">
        <p className="text-xs font-black uppercase text-white/70">
          {project.type}
        </p>
        <p className="mt-1 text-4xl font-black uppercase leading-none text-white">
          {project.title}
        </p>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="group rounded-lg border border-zinc-200 bg-white p-3 shadow-sm transition-colors hover:border-zinc-950 dark:border-white/10 dark:bg-zinc-900/80 dark:hover:border-white/60"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={reveal}
      transition={{
        delay: Math.min(index * 0.04, 0.22),
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8 }}
    >
      <ExternalAnchor href={project.href} label={`Open ${project.title}`}>
        <ProjectPreview project={project} />
      </ExternalAnchor>
      <div className="p-2 pt-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase text-zinc-500">
              {project.type}
            </p>
            <h3 className="mt-1 text-2xl font-black text-zinc-950 dark:text-white">
              {project.title}
            </h3>
          </div>
          <ExternalAnchor
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-white transition-transform group-hover:scale-110 dark:bg-white dark:text-zinc-950"
            href={project.href}
            label={`Open ${project.title}`}
          >
            <ExternalLink className="h-4 w-4" />
          </ExternalAnchor>
        </div>
        <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          {project.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-700 dark:bg-white/10 dark:text-zinc-200"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function CompactLinkCard({ item, icon: Icon = ExternalLink }) {
  const CardIcon = item.icon || Icon;

  return (
    <motion.a
      className="group flex h-full flex-col justify-between rounded-lg border border-zinc-200 bg-white p-5 text-left shadow-sm transition-colors hover:border-zinc-950 dark:border-white/10 dark:bg-zinc-900/80 dark:hover:border-white/60"
      href={item.href}
      rel="noreferrer"
      target="_blank"
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 280, damping: 20 }}
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <CardIcon className="h-5 w-5 text-zinc-950 dark:text-white" />
          <ExternalLink className="h-4 w-4 text-zinc-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        <h3 className="mt-5 text-xl font-black text-zinc-950 dark:text-white">
          {item.title}
        </h3>
        {item.description ? (
          <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            {item.description}
          </p>
        ) : null}
      </div>
    </motion.a>
  );
}

function DockIcon({ item, isDark, onThemeToggle }) {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;
  const commonClass =
    "relative inline-flex h-9 w-9 items-center justify-center rounded-full text-zinc-700 transition-colors hover:bg-zinc-950 hover:text-white dark:text-zinc-200 dark:hover:bg-white dark:hover:text-zinc-950 sm:h-11 sm:w-11";
  const isExternal = item.href?.startsWith("http");

  const content = (
    <>
      <AnimatePresence>
        {hovered ? (
          <motion.span
            className="pointer-events-none absolute -top-11 whitespace-nowrap rounded-md border border-zinc-200 bg-white px-3 py-1 text-xs font-bold text-zinc-900 shadow-lg dark:border-white/10 dark:bg-zinc-800 dark:text-white"
            initial={{ opacity: 0, y: 8, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.16 }}
          >
            {item.label}
          </motion.span>
        ) : null}
      </AnimatePresence>
      {item.type === "theme" ? (
        isDark ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )
      ) : (
        <Icon className="h-4 w-4" />
      )}
    </>
  );

  return (
    <div className="relative flex h-9 w-9 shrink-0 items-center justify-center sm:h-11 sm:w-11">
      {item.type === "theme" ? (
        <motion.button
          aria-label="Toggle theme"
          className={commonClass}
          onClick={onThemeToggle}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          type="button"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.94 }}
        >
          {content}
        </motion.button>
      ) : (
        <motion.a
          aria-label={item.label}
          className={commonClass}
          href={item.href}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          rel={isExternal ? "noreferrer" : undefined}
          target={isExternal ? "_blank" : undefined}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.94 }}
        >
          {content}
        </motion.a>
      )}
    </div>
  );
}

function DockNavigation({ isDark, onThemeToggle }) {
  const dockItems = [
    { label: "Home", href: "#home", icon: Home },
    { label: "Projects", href: "#projects", icon: Briefcase },
    { label: "Docs", href: "#documents", icon: BookOpen },
    { label: "GitHub", href: links.github, icon: Github },
    { label: "LinkedIn", href: links.linkedin, icon: Linkedin },
    { label: "Contact", href: "#contact", icon: Contact2 },
    { label: "Theme", type: "theme", icon: Sun },
  ];

  return (
    <motion.nav
      aria-label="Floating portfolio navigation"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 mx-auto flex h-24 items-end justify-center pb-4"
      initial={{ opacity: 0, y: 42 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 180, damping: 20, delay: 0.35 }}
    >
      <div className="dock-fade fixed inset-x-0 bottom-0 h-24" />
      <motion.div className="pointer-events-auto relative mx-auto flex max-w-[calc(100vw-1.5rem)] items-center gap-1 rounded-full border border-white/20 bg-white/75 px-2 py-2 shadow-[0_0_0_1px_rgba(0,0,0,.03),0_12px_30px_rgba(0,0,0,.12)] backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/85 dark:shadow-[0_18px_50px_rgba(0,0,0,.28)]">
        {dockItems.map((item, index) => (
          <React.Fragment key={item.label}>
            {index === 3 ? (
              <span className="mx-1 h-8 w-px bg-zinc-200 dark:bg-white/10" />
            ) : null}
            <DockIcon
              isDark={isDark}
              item={item}
              onThemeToggle={onThemeToggle}
            />
          </React.Fragment>
        ))}
      </motion.div>
    </motion.nav>
  );
}

function App() {
  const [isDark, setIsDark] = useState(() => {
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    if (storedTheme) return storedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    window.localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <>
      <main
        className="site-shell min-h-screen overflow-x-hidden bg-white text-zinc-950 transition-colors dark:bg-[#111113] dark:text-zinc-100"
        id="home"
      >
        <section className="relative px-5 pb-10 pt-5 sm:px-8 lg:min-h-[86vh] lg:px-12 lg:pb-16">
          <div className="mx-auto flex max-w-7xl items-start justify-between gap-6 text-xs font-bold uppercase text-zinc-500 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Jakarta Selatan / Surabaya
            </div>
            <a
              className="hidden transition-colors hover:text-zinc-950 dark:hover:text-white sm:inline-flex"
              href={links.email}
            >
              bimorajendraa@gmail.com
            </a>
          </div>

          <div className="mx-auto mt-8 max-w-7xl text-center lg:mt-6">
            <motion.div
              className="relative z-20 mx-auto max-w-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-sm font-black uppercase text-zinc-500 dark:text-zinc-400">
                Information Systems ITS - Software Engineering, UI/UX,
                Infrastructure, Product Management
              </p>
              <h1 className="mt-5 text-[2.35rem] font-black uppercase leading-none tracking-tight text-zinc-950 dark:text-white min-[400px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-[6.8rem]">
                Bimo Rajendra
                <span className="block text-zinc-300 dark:text-zinc-700">
                  Widyadhana
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-center text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg sm:leading-8">
                I build fun things with secure, useful web applications from
                requirements and product flows to deployment-ready interfaces.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-1 dark:bg-white dark:text-zinc-950"
                  href="#projects"
                >
                  View Projects <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/70 px-5 py-3 text-sm font-bold text-zinc-950 backdrop-blur transition-transform hover:-translate-y-1 dark:border-white/15 dark:bg-white/10 dark:text-white"
                  href="/Bimo-Rajendra-Widyadhana-CV.pdf"
                >
                  Open CV <FileText className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
            <div className="relative mx-auto mt-10 grid w-full max-w-2xl grid-cols-1 gap-8 md:gap-10 lg:mt-8 lg:block lg:h-[350px] lg:max-w-6xl">
              <motion.div
                className="relative z-30 mx-auto w-52 rounded-lg border border-black/10 bg-white p-4 shadow-[0_32px_70px_rgba(0,0,0,.13)] dark:border-white/10 dark:bg-zinc-900 lg:absolute lg:left-[calc(50%-110px)] lg:top-[54px] lg:w-[220px]"
                initial={{ opacity: 0, y: 24, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 160,
                  damping: 18,
                }}
                whileHover={{ y: -12, rotate: 2, scale: 1.04 }}
              >
                <img
                  alt="Bimo Rajendra Widyadhana portrait"
                  className="h-56 w-full rounded-md object-cover lg:h-40"
                  loading="lazy"
                  src="/me.jpeg"
                />
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      alt="Bimo cartoon"
                      className="h-10 w-10 rounded-full bg-lime-100 object-contain"
                      src={asset1}
                    />
                    <span className="text-left text-sm font-black">Bimo</span>
                  </div>
                  <img alt="" className="h-5 w-10 object-contain" src={arrow} />
                </div>
              </motion.div>
              <div className="grid gap-8 md:gap-10 lg:block">
                {heroCards.map((card) => (
                  <HeroCard card={card} key={card.title} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 lg:px-12" id="about">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <motion.div
              className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-zinc-900/80"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={reveal}
              transition={{ duration: 0.55 }}
            >
              <img
                alt="Bimo Rajendra Widyadhana"
                className="aspect-square w-full rounded-md object-cover"
                loading="lazy"
                src="/me.jpeg"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={reveal}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              <span className="inline-flex rounded-full bg-lime-200 px-4 py-1 text-sm font-black text-zinc-950">
                About
              </span>
              <h2 className="mt-4 text-4xl font-black text-zinc-950 dark:text-white md:text-6xl">
                Developer who loves think in systems, flows, and risks.
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                I am an Information Systems undergraduate at Institut Teknologi
                Sepuluh Nopember with experience in secure web application
                development, system analysis, IT infrastructure, and IT
                GRC/cybersecurity fundamentals. I enjoy translating user
                problems into requirements, BPMN, SRS, application architecture,
                database workflows, and interfaces that teams can ship
                confidently.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-white/10 dark:bg-white/5"
                    key={stat.label}
                  >
                    <p className="text-3xl font-black">{stat.value}</p>
                    <p className="mt-2 text-xs font-semibold uppercase leading-5 text-zinc-500 dark:text-zinc-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 lg:px-12" id="skills">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              description="A portfolio should show taste, but it should also show the operating system behind the work. These are the areas I keep sharpening."
              eyebrow="Core Stack"
              title="What I Bring"
            />

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {coreSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.article
                    className={`rounded-lg border p-5 ${skill.tone}`}
                    initial="hidden"
                    key={skill.title}
                    transition={{
                      delay: index * 0.06,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    variants={reveal}
                    viewport={{ once: true, amount: 0.25 }}
                    whileHover={{ y: -8 }}
                    whileInView="visible"
                  >
                    <Icon className="h-8 w-8 text-zinc-950 dark:text-white" />
                    <h3 className="mt-5 text-2xl font-black text-zinc-950 dark:text-white">
                      {skill.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                      {skill.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {skill.tags.map((tag) => (
                        <span
                          className="rounded-md bg-white/70 px-2.5 py-1 text-xs font-bold text-zinc-700 dark:bg-white/10 dark:text-zinc-200"
                          key={tag}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                );
              })}
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <motion.div
                  className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 shadow-sm dark:border-white/10 dark:bg-zinc-900"
                  key={tech.name}
                  whileHover={{ y: -5, scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  <img
                    alt={tech.name}
                    className="h-5 w-5 object-contain"
                    loading="lazy"
                    src={tech.src}
                  />
                  <span className="text-sm font-bold">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 lg:px-12" id="projects">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              description="A mix of internal tools, public event platforms, client work, and product experiments."
              eyebrow="My Projects"
              title="Latest Work"
            />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {appProjects.map((project, index) => (
                <ProjectCard
                  index={index}
                  key={project.title}
                  project={project}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 lg:px-12" id="design">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <SectionHeader
                align="left"
                description="Figma work that shows product thinking, information structure, and usable interface decisions."
                eyebrow="UI/UX"
                title="Design Work"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {uiUxProjects.map((item) => (
                <CompactLinkCard icon={Palette} item={item} key={item.title} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 lg:px-12" id="documents">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              description="Documentation matters when systems need to be understood, audited, and improved by more than one person."
              eyebrow="Documents"
              title="Analysis and Reports"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {documentProjects.map((item) => (
                <CompactLinkCard item={item} key={item.title} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 lg:px-12" id="algorithm">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
            <div className="grid gap-4 sm:grid-cols-2">
              {algorithmProjects.map((item) => (
                <CompactLinkCard icon={Github} item={item} key={item.title} />
              ))}
            </div>
            <div>
              <SectionHeader
                align="left"
                description="A smaller but important corner of the portfolio: algorithms, routing, cybersecurity practice, and graph work."
                eyebrow="Algorithm"
                title="Code Repositories"
              />
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 lg:px-12" id="experience">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              description="Selected roles from CV, organized around delivery, leadership, infrastructure, and security-aware development."
              eyebrow="Experience"
              title="Where I Have Built"
            />
            <div className="relative mx-auto max-w-5xl">
              <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-zinc-200 dark:bg-white/10 md:block" />
              <div className="space-y-5">
                {experiences.map((exp, index) => (
                  <motion.article
                    className="relative rounded-lg border border-zinc-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-zinc-900/80 md:ml-14"
                    initial="hidden"
                    key={`${exp.company}-${exp.period}`}
                    transition={{
                      delay: Math.min(index * 0.04, 0.24),
                      duration: 0.52,
                    }}
                    variants={reveal}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ x: 6 }}
                    whileInView="visible"
                  >
                    <span className="absolute -left-[3.45rem] top-6 hidden h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-sm font-black text-zinc-950 shadow-sm dark:border-white/10 dark:bg-zinc-950 dark:text-white md:flex">
                      {index + 1}
                    </span>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-xl font-black text-zinc-950 dark:text-white">
                          {exp.role}
                        </h3>
                        <p className="mt-1 font-bold text-zinc-500">
                          {exp.company}
                        </p>
                      </div>
                      <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-bold uppercase text-zinc-600 dark:bg-white/10 dark:text-zinc-300">
                        {exp.period}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                      {exp.description}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pb-32 pt-16 sm:px-8 lg:px-12" id="contact">
          <footer className="mx-auto max-w-7xl rounded-lg border border-zinc-200 bg-zinc-950 p-6 text-white shadow-[0_28px_90px_rgba(0,0,0,.18)] dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-50 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
              <div>
                <p className="text-sm font-black uppercase text-lime-300">
                  Contact
                </p>
                <h2 className="mt-3 text-4xl font-black md:text-6xl">
                  Let&apos;s build something reliable, usable, and fun.
                </h2>
                <p className="mt-5 max-w-2xl leading-8 text-white/70 dark:text-zinc-300">
                  Open for frontend, web app, UI/UX, documentation, System
                  Analyst, and infrastructure-focused collaborations.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-bold text-zinc-950 transition-transform hover:-translate-y-1 dark:bg-zinc-100 dark:text-zinc-950"
                  href={links.email}
                >
                  <Mail className="h-4 w-4" /> Email
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-1 dark:border-white/15 dark:text-zinc-100"
                  href="/Bimo-Rajendra-Widyadhana-CV.pdf"
                >
                  <FileText className="h-4 w-4" /> CV
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-1 dark:border-white/15 dark:text-zinc-100"
                  href={links.github}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-1 dark:border-white/15 dark:text-zinc-100"
                  href={links.linkedin}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-1 dark:border-white/15 dark:text-zinc-100"
                  href={links.instagram}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-5 text-sm font-semibold text-white/55 dark:border-white/10 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
              <p>Bimo Rajendra Widyadhana</p>
              <p>Jakarta Selatan - Surabaya - 2026</p>
            </div>
          </footer>
        </section>
      </main>
      <DockNavigation
        isDark={isDark}
        onThemeToggle={() => setIsDark((current) => !current)}
      />
    </>
  );
}

export default App;
