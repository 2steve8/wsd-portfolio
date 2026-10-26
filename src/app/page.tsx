"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  ABOUT_ME,
  EDUCATION,
  EXPERIENCE,
  PERSONAL_INFO,
  PROJECTS,
  SKILLS
} from "@/data/portfolioData";
import { useGSAP } from "@gsap/react";
import { Analytics } from "@vercel/analytics/next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Briefcase,
  Code2,
  ExternalLink,
  FileText,
  FolderKanban,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  PhoneLog,
  Terminal,
} from "lucide-react";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function PortfolioPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Hero entrance animation using explicit fromTo()
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-badge",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 }
      )
        .fromTo(
          ".hero-title",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.25"
        )
        .fromTo(
          ".hero-bio",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.35"
        )
        .fromTo(
          ".hero-cta",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.12, duration: 0.5 },
          "-=0.3"
        );

      // 2. Skill pills stagger slide-up reveal
      gsap.fromTo(
        ".skill-pill",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#skills",
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      // 3. OCTANE-STYLE PINNED SPLIT-SCROLL (Desktop Only: min-width 1024px)
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const projectItems = gsap.utils.toArray<HTMLElement>(".project-item-right");
        const textPanels = gsap.utils.toArray<HTMLElement>(".project-text-panel");

        projectItems.forEach((item, index) => {
          ScrollTrigger.create({
            trigger: item,
            start: "top 55%",
            end: "bottom 55%",
            onEnter: () => setActiveProject(index),
            onEnterBack: () => setActiveProject(index),
          });
        });

        function setActiveProject(activeIndex: number) {
          textPanels.forEach((panel, i) => {
            if (i === activeIndex) {
              gsap.to(panel, {
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: "power2.out",
                pointerEvents: "auto",
              });
            } else {
              gsap.to(panel, {
                opacity: 0,
                y: i < activeIndex ? -15 : 15,
                duration: 0.3,
                ease: "power2.in",
                pointerEvents: "none",
              });
            }
          });
        }
      });

      // 4. Experience timeline items slide in from left
      const timelineItems = gsap.utils.toArray<HTMLElement>(".timeline-item");
      timelineItems.forEach((item) => {
        gsap.fromTo(
          item,
          { x: -40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.65,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Ensure ScrollTrigger recalculates positions after DOM layout
      ScrollTrigger.refresh();
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#070B14] text-slate-100 selection:bg-emerald-500 selection:text-slate-950 font-sans"
    >
      <Analytics />
      {/* Subtle Ambient Background Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <Header />

      <main className="relative z-10 max-w-6xl mx-auto px-6">
        {/* HERO SECTION */}
        <section className="py-24 md:py-32 border-b border-slate-800/80">
          <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for Web Development & Web Operations Roles
          </div>

          <h1 className="hero-title text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            {PERSONAL_INFO.name}
            <span
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #34d399 0%, #22d3ee 25%, #818cf8 50%, #22d3ee 75%, #34d399 100%)",
                backgroundSize: "200% auto",
                backgroundPosition: "0% center",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              className="hero-gradient-text block mt-2 text-2xl sm:text-4xl md:text-5xl font-bold pb-1"
            >
              {PERSONAL_INFO.role}
            </span>
          </h1>

          <p className="hero-bio max-w-3xl text-slate-400 text-lg sm:text-xl leading-relaxed mb-10">
            {PERSONAL_INFO.bio}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="hero-cta px-6 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition-colors flex items-center gap-2"
            >
              Live Projects
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.drivePortfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-medium hover:border-emerald-500/50 hover:text-emerald-300 transition-colors flex items-center gap-2"
            >
              <FolderKanban className="w-4 h-4 text-emerald-400" />
              Portfolio
            </a>

            <a
              href="#contact"
              rel="noopener noreferrer"
              className="hero-cta px-6 py-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 font-medium hover:border-slate-600 transition-colors flex items-center gap-2"
            >
              <PhoneLog className="w-4 h-4 text-cyan-400" />
              Get In Touch
            </a>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="py-24 border-b border-slate-800/80">
          <div className="flex items-center gap-2 text-emerald-400 text-sm font-mono uppercase tracking-wider mb-3">
            <Terminal className="w-4 h-4" />
            <span>Background & Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            About Me
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Core Focus & Philosophy Card (5 Cols) */}
            <div className="lg:col-span-5 rounded-3xl bg-linear-to-br from-slate-900/90 via-slate-900/50 to-emerald-950/20 border border-emerald-500/30 p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between shadow-2xl shadow-emerald-950/20">
              <div className="absolute -top-20 -left-20 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* Increased bottom margin below the badge */}
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-widest">
                    Core Philosophy & Focus
                  </span>
                </div>

                <blockquote className="text-xl sm:text-2xl font-semibold text-slate-100 leading-snug mb-8">
                  &ldquo;{ABOUT_ME.headline}&rdquo;
                </blockquote>

                {/* Bullet Focus List with clean bottom spacing */}
                <ul className="space-y-4 mb-8">
                  {ABOUT_ME.focusAreas.map((area, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 shadow-sm shadow-emerald-500/50" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 pb-1 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-emerald-400 font-medium">
                  Full-Stack & Web Ops
                </span>
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Right Column: Narrative & Stats Grid (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl bg-slate-900/40 border border-slate-800/80 p-8 sm:p-10">
              <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                {ABOUT_ME.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className={idx === 0 ? "text-slate-100 font-medium" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Mini Stats Bar */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 text-center sm:text-left">
                <div className="p-3 sm:p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="text-emerald-400 font-bold text-xl sm:text-2xl">8+</div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">Years Exp.</div>
                </div>
                <div className="p-3 sm:p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="text-cyan-400 font-bold text-xl sm:text-2xl">BSIT</div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">STI College</div>
                </div>
                <div className="p-3 sm:p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="text-emerald-400 font-bold text-xl sm:text-2xl">100%</div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">Precision QA</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL ARSENAL / SKILLS */}
        <section id="skills" className="py-20 border-b border-slate-800/80">
          <div className="flex items-center gap-2 text-emerald-400 text-sm font-mono uppercase tracking-wider mb-3">
            <Code2 className="w-4 h-4" />
            <span>Technical Stack & Operations</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            Core Technologies & Tools
          </h2>

          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="skill-pill px-4 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-200 text-sm font-medium hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* FEATURED PROJECTS (Octane Split Scroller on Desktop, Standard Cards on Mobile) */}
        <section id="projects" className="py-24 border-b border-slate-800/80">
          <div className="max-w-6xl mx-auto px-6">

            {/* Header: Common to both views */}
            <div className="mb-12 lg:mb-0">
              <p className="text-emerald-400 text-xs sm:text-sm font-mono uppercase tracking-widest mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Production Systems & Architecture
              </p>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
                Featured Web Projects
              </h2>
              <p className="text-slate-400 text-sm max-w-md lg:hidden">
                Production platforms, custom WordPress themes, e-commerce architectures, and medical clinic portals.
              </p>
            </div>

            {/* --- DESKTOP VIEW (lg:grid): Octane-Style Pinned Split Scroller --- */}
            <div className="hidden lg:grid grid-cols-12 gap-16 items-start mt-8">
              {/* Left Column: Pinned Sticky Title & Dynamic Copy */}
              <div className="col-span-5 sticky top-28 z-20">
                <div className="relative min-h-95">
                  {PROJECTS.map((project, idx) => (
                    <div
                      key={project.title}
                      className={`project-text-panel transition-colors ${idx === 0
                        ? "opacity-100 relative pointer-events-auto"
                        : "opacity-0 absolute inset-0 pointer-events-none"
                        }`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full font-semibold">
                          {project.category}
                        </span>
                        <span className="text-xs font-mono text-slate-500">
                          {idx + 1} / {PROJECTS.length}
                        </span>
                      </div>

                      <h3 className="text-3xl font-bold text-slate-100 mb-4">
                        {project.title}
                      </h3>

                      <p className="text-slate-300 text-base leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono text-slate-300 bg-slate-900 px-3 py-1 rounded-md border border-slate-800"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-950/40"
                      >
                        <span>Visit {project.title}</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Scrolling Screenshots */}
              <div className="col-span-7 space-y-24">
                {PROJECTS.map((project) => (
                  <div
                    key={project.title}
                    className="project-item-right rounded-3xl bg-slate-900/60 border border-slate-800 overflow-hidden shadow-2xl transition-all duration-300 hover:border-emerald-500/40"
                  >
                    <div className="flex items-center justify-between px-5 py-3 bg-slate-900 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-xs font-mono text-slate-400 truncate max-w-65 bg-slate-950 px-3 py-0.5 rounded border border-slate-800">
                        {project.url.replace(/^https?:\/\//, "")}
                      </span>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-emerald-400 transition-colors"
                        aria-label={`Visit ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative aspect-16/10 overflow-hidden bg-slate-950 group/img"
                    >
                      {/* Interactive Scrollable Screenshot Frame */}
                      <div className="relative aspect-[16/10] bg-slate-950 overflow-y-auto overflow-x-hidden no-scrollbar overscroll-contain select-none group/scroll">
                        <img
                          src={project.image}
                          alt={`${project.title} preview`}
                          loading="lazy"
                          className="w-full h-auto object-cover object-top block"
                        />

                        {/* Interactive Scroll Hint Badge (fades out once user hovers) */}
                        <div className="absolute bottom-3 right-3 pointer-events-none opacity-80 group-hover/scroll:opacity-0 transition-opacity duration-300">
                          <span className="text-[10px] font-mono text-slate-300 bg-slate-900/90 border border-slate-700/80 px-2.5 py-1 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Scroll to explore
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* --- MOBILE VIEW (lg:hidden): Normal, Clean Vertical Stacked Cards --- */}
            <div className="lg:hidden space-y-8 mt-6">
              {PROJECTS.map((project, idx) => (
                <div
                  key={project.title}
                  className="rounded-2xl bg-slate-900/70 border border-slate-800 overflow-hidden shadow-xl"
                >
                  {/* Browser Bar */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 truncate max-w-45 bg-slate-950 px-2.5 py-0.5 rounded border border-slate-800">
                      {project.url.replace(/^https?:\/\//, "")}
                    </span>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-emerald-400 p-1"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Image */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative aspect-[16/10] overflow-hidden bg-slate-950"
                  >
                    {/* Mobile Interactive Scrollable Image */}
                    <div className="relative aspect-[16/10] bg-slate-950 overflow-y-auto overflow-x-hidden no-scrollbar overscroll-contain">
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        loading="lazy"
                        className="w-full h-auto object-cover object-top block"
                      />
                    </div>
                  </a>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full font-semibold">
                        {project.category}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500">
                        {idx + 1} / {PROJECTS.length}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-100 mb-2">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center justify-between"
                      >
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-4 h-4 text-emerald-400 shrink-0" />
                      </a>
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono text-slate-300 bg-slate-950 px-2 py-0.5 rounded border border-slate-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-semibold text-xs hover:bg-emerald-400 transition-colors"
                    >
                      <span>Visit {project.title}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* GOOGLE DRIVE MASTER ARCHIVE BANNER */}
        <section id="archive" className="py-20 border-b border-slate-800/80">
          <div
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(16, 185, 129, 0.16) 0%, rgba(15, 23, 42, 0.92) 50%, rgba(6, 182, 212, 0.16) 100%)",
            }}
            className="relative overflow-hidden rounded-3xl border border-emerald-500/30 p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-2xl shadow-emerald-950/20"
          >
            {/* Subtle corner glow accent */}
            <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-emerald-500/15 blur-3xl" />

            <div className="relative z-10 max-w-xl">
              <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-3">
                <FolderKanban className="w-4 h-4" />
                Master Asset Repository
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                Portfolio & Case Study Archive
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Looking for full UI/UX mockups, graphic design deliverables,
                landing page layouts, and my complete curriculum vitae? Browse
                my organized archive directly.
              </p>
            </div>

            <div className="relative z-10 flex flex-col gap-3.5 w-full lg:w-72 shrink-0">
              <a
                href={PERSONAL_INFO.drivePortfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-4 rounded-xl bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2 text-sm shadow-lg shadow-emerald-950/40"
              >
                <FolderKanban className="w-4 h-4 shrink-0" />
                <span>View Portfolio</span>
              </a>
              <a
                href={PERSONAL_INFO.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-4 rounded-xl bg-slate-950/90 border border-slate-700 text-slate-200 font-medium hover:border-emerald-400 transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <FileText className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>View Resume</span>
              </a>
            </div>
          </div>
        </section>

        {/* WORK HISTORY & EDUCATION TIMELINE */}
        <section id="experience" className="py-24 border-b border-slate-800/80">
          <div className="mb-12">
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-mono uppercase tracking-wider mb-2">
              <Briefcase className="w-4 h-4" />
              <span>Career</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Work History
            </h2>
          </div>

          <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-10">
            {EXPERIENCE.map((exp, idx) => (
              <div
                key={idx}
                className="timeline-item relative group rounded-2xl bg-slate-900/40 border border-slate-800/80 p-6 hover:border-emerald-500/40 transition-colors"
              >
                {/* Timeline Dot */}
                <span className="absolute -left-[33px] sm:-left-[49px] top-8 w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-emerald-400 group-hover:scale-125 transition-transform" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    {/* Company Logo Container */}
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-white p-2 flex items-center justify-center shrink-0 border border-slate-700 shadow-sm hover:scale-105 transition-transform"
                      title={exp.company}
                    >
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </a>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-100 leading-snug">
                        {exp.role}
                      </h3>
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline text-sm font-medium inline-flex items-center gap-1"
                      >
                        {exp.company}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-center">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-full">
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-slate-300 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>

          {/* Education Card with STI College Logo */}
          <div className="mt-14 rounded-2xl bg-slate-900/50 border border-slate-800 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-emerald-500/40 transition-colors">
            <div className="flex items-center gap-4">
              <a
                href={EDUCATION.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-xl bg-white p-2 flex items-center justify-center shrink-0 border border-slate-700 shadow-sm hover:scale-105 transition-transform"
                title={EDUCATION.school}
              >
                <img
                  src={EDUCATION.logo}
                  alt={`${EDUCATION.school} logo`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </a>
              <div>
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-1">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Education</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-100">
                  {EDUCATION.degree}
                </h3>
                <a
                  href={EDUCATION.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition-colors text-sm inline-flex items-center gap-1"
                >
                  {EDUCATION.school}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-lg">
              {EDUCATION.graduated}
            </span>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24">
          <div className="max-w-3xl">
            <p className="text-emerald-400 text-sm font-mono uppercase tracking-wider mb-2">
              Get In Touch
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              Let&apos;s build or scale your next web platform.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mb-10">
              Whether you need a custom WordPress architecture, a dedicated Web
              Operations Administrator, or a modern Next.js frontend, reach out
              directly via email or phone.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`mailto:${PERSONAL_INFO.emailPrimary}`}
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-colors flex items-center gap-4"
              >
                <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="overflow-hidden">
                  <div className="text-xs text-slate-400">Primary Email</div>
                  <div className="text-sm font-medium text-slate-100 truncate">
                    {PERSONAL_INFO.emailPrimary}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.emailSecondary}`}
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-colors flex items-center gap-4"
              >
                <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                <div className="overflow-hidden">
                  <div className="text-xs text-slate-400">Gmail</div>
                  <div className="text-sm font-medium text-slate-100 truncate">
                    {PERSONAL_INFO.emailSecondary}
                  </div>
                </div>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-colors flex items-center gap-4"
              >
                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xs text-slate-400">Phone / WhatsApp</div>
                  <div className="text-sm font-medium text-slate-100">
                    {PERSONAL_INFO.phone}
                  </div>
                </div>
              </a>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-4">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-xs text-slate-400">Location</div>
                  <div className="text-sm font-medium text-slate-100">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}