export const PERSONAL_INFO = {
  name: "Steve Ducay",
  role: "Web Developer & Web Administrator",
  location: "San Mateo, Rizal, Philippines",
  phone: "+63 955 340 4738",
  emailPrimary: "williamsteveducay@live.com",
  emailSecondary: "mastahkillah21@gmail.com",
  bio: "Full-stack Web Developer and Web Operations Administrator with over 8 years of experience specializing in custom WordPress architecture, PHP themes, Elementor, and React/Next.js platforms, dedicated to delivering high-performance digital ecosystems with rigorous QA and operational reliability.",
  drivePortfolioUrl:
    "https://drive.google.com/drive/u/0/folders/0B_W6wEPPCj6XLWRfTHA0OXVQSFk?resourcekey=0-16GD75SggfU_s-rLt9XBuQ",
  resumePdfUrl:
    "https://drive.google.com/file/d/1DE3285AzQ59YetnX6wV7bGn_XfS6IpN9/view?usp=sharing",
};

export const ABOUT_ME = {
  headline: "Building web platforms, custom WordPress themes, and scalable frontend architectures.",
  focusAreas: [
    "Custom WordPress & PHP Development",
    "React.js & Next.js Ecosystems",
    "Web Operations & Server Deployment",
    "Performance Optimization & SEO",
  ],
  paragraphs: [
    "I am a Full-Stack Web Developer and Web Operations Administrator with over 8 years of specialized experience architecting custom WordPress ecosystems, high-performance PHP themes, Elementor implementations, and modern React/Next.js frontends.",
    "My professional journey is grounded in a Bachelor of Science in Information Technology from STI College, combined with extensive leadership in digital operations and project management. This background instills a rigorous, systems-oriented approach to debugging, server deployments, database optimization, and cross-functional technical management.",
    "Whether scaling agency funnels, managing cPanel/DigitalOcean infrastructure, or streamlining multilingual RTL platforms, I bridge the gap between technical code quality and seamless digital operations.",
  ],
};

export const SKILLS = [
  "WordPress & Custom PHP",
  "Elementor Pro & ACF",
  "LearnDash, Kajabi & GoHighLevel",
  "WooCommerce",
  "JavaScript (ES6+) & jQuery",
  "React.js & Next.js",
  "Node.js",
  "PostgreSQL & Prisma",
  "HTML5 / CSS3 / Tailwind",
  "cPanel, DigitalOcean & DNS",
  "Google Tag Manager & SEO",
  "Figma & Adobe Illustrator",
  "Web Operations & QA",
];

export const getFullPageScreenshot = (url: string) =>
  `https://api.microlink.io?url=${encodeURIComponent(
    url
  )}&screenshot=true&meta=false&embed=screenshot.url&screenshot.fullPage=true&screenshot.type=jpeg`;

export const PROJECTS = [
  {
    title: "Jayden McGinlay",
    category: "Entertainment & Artist Platform",
    url: "https://jaydenmcginlay.com",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fjaydenmcginlay.com?w=1920&h=5000",
    tech: ["WordPress", "Responsive Media", "Custom UI", "Video & Audio Integration"],
    description:
      "Official website and digital portfolio for actor, performer, and musician Jayden McGinlay. Features interactive screen and stage project archives, video showreel showcases, press galleries, and high-performance media delivery.",
  },
  {
    title: "ThinkCreativePlus",
    category: "Agency Platform & Service Funnels",
    url: "https://thinkcreativeplus.com",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fthinkcreativeplus.com?w=1920&h=5000",
    tech: ["WordPress", "Custom PHP", "Elementor", "JavaScript", "CSS3"],
    description:
      "Full digital agency platform featuring custom service funnels, interactive client ordering flows, dynamic portfolio showcases, and speed optimization.",
  },
  {
    title: "Lulu Aesthetica",
    category: "Medical Aesthetics & Skin Health",
    url: "https://luluaesthetica.com.au",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fluluaesthetica.com.au?w=1920&h=5000",
    tech: ["WordPress", "Custom CSS", "Appointment Booking", "Responsive UI", "Healthcare SEO"],
    description:
      "Premier Australian medical aesthetics and clinical skin health clinic platform (Bella Vista & Camperdown). Features bespoke treatment catalogues, online booking integration, interactive skin consultation flows, and responsive aesthetic galleries.",
  },
  {
    title: "Cleon Clinic",
    category: "Medical Aesthetics Platform",
    url: "https://cleonclinic.com",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fcleonclinic.com?w=1920&h=5000",
    tech: ["WordPress", "Responsive CSS", "SEO Architecture", "UI/UX"],
    description:
      "Medical aesthetics platform engineered with custom responsive CSS components (including custom referral CTA banners) and SEO-optimized clinical procedure galleries.",
  },
  {
    title: "Youthful by Rosie",
    category: "Cosmetic Aesthetics & Skin Clinic",
    url: "https://www.youthfulbyrosie.com.au",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.youthfulbyrosie.com.au?w=1920&h=5000",
    tech: ["Wix Studio / Editor", "Wix Bookings", "Custom Styling", "Responsive Layout", "Aesthetic UI"],
    description:
      "Bespoke cosmetic injectable and dermal skin clinic platform built on Wix for Youthful by Rosie (Australia). Features tailored aesthetic service menus, seamless Wix Bookings integration, client consultation funnels, and mobile-optimized visual branding.",
  },
  {
    title: "Heal Nutrition",
    category: "E-Commerce & Nutrition Platform",
    url: "https://my.healnutrition.co",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fmy.healnutrition.co?w=1920&h=5000",
    tech: ["Shopify", "Liquid", "E-Commerce Architecture", "Conversion Rate Optimization", "Responsive UI"],
    description:
      "Direct-to-consumer health and protein supplement e-commerce storefront powered by Shopify. Engineered with custom product bundles, subscription checkout funnels, mobile-first navigation, and optimized product discovery.",
  },
  {
    title: "Verso Biosense",
    category: "Medical Technology & Clinical Trials",
    url: "https://www.versobiosense.com",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.versobiosense.com?w=1920&h=5000",
    tech: ["WordPress", "Custom Layouts", "Responsive Media", "Clinical Showcase", "Healthcare UI"],
    description:
      "Pioneering medical technology platform for Verso Biosense's intrauterine sensor and clinical health monitoring ecosystem. Engineered to showcase continuous biomarker data platforms, UK clinical trials registration, thought leadership resources, and medical product architecture.",
  },
  {
    title: "Axelis Staging & Web Architecture",
    category: "Staging Environment & UI Systems",
    url: "https://staging.axelis.co",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fstaging.axelis.co?w=1920&h=5000",
    tech: [
      "WordPress",
      "Custom PHP",
      "Elementor",
      "Staging & QA",
      "Responsive UI",
    ],
    description:
      "Dedicated pre-production staging environment engineered for full-site architecture development, custom UI component testing, layout responsiveness, and quality assurance workflows.",
  },
  {
    title: "SlideStudio",
    category: "On-Demand Presentation Platform",
    url: "https://slidestudio.io",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fslidestudio.io?w=1920&h=5000",
    tech: ["JavaScript", "Interactive Calculator", "WordPress", "Custom UI"],
    description:
      "On-demand presentation design platform engineered with an interactive four-step quote calculator and filterable template library.",
  },
  {
    title: "cometis AG",
    category: "Financial Communications & IR Platform",
    url: "https://www.cometis.de",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.cometis.de?w=1920&h=5000",
    tech: ["WordPress", "Multilingual (DE/EN)", "Custom Architecture", "SEO & Compliance"],
    description:
      "Corporate web platform for leading German financial communications and investor relations consultancy cometis AG. Features multilingual (German/English) content architecture, capital market and ESG advisory service funnels, and optimized corporate performance.",
  },
  {
    title: "Marketing-Club Aachen",
    category: "Event & Membership Portal",
    url: "https://marketingclub-aachen.de",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fmarketingclub-aachen.de?w=1920&h=5000",
    tech: [
      "WordPress",
      "Multilingual Architecture",
      "Event Management",
      "Performance",
    ],
    description:
      "Professional regional portal maintained for event management and membership registration, focusing on multilingual content architecture and core web vitals.",
  },
  {
    title: "Dr. Roseann",
    category: "Medical & Healthcare Platform",
    url: "https://www.drroseann.com",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.drroseann.com?w=1920&h=5000",
    tech: ["WordPress", "Elementor", "Responsive UI", "Healthcare SEO"],
    description:
      "Professional medical and healthcare practice platform featuring clean responsive layout architecture, patient resource galleries, and service scheduling workflows.",
  },
];

export const EXPERIENCE = [
  {
    role: "Web Operations Administrator",
    company: "BruntWork",
    website: "https://www.bruntwork.co",
    logo: "https://www.google.com/s2/favicons?domain=bruntwork.co&sz=128",
    period: "2026",
    type: "Web Operations",
    description:
      "Managed end-to-end web operations, site maintenance, deployment workflows, and technical administration for international client platforms.",
  },
  {
    role: "Senior Online Course Specialist",
    company: "Outsourced Doers",
    website: "https://outsourceddoers.com",
    logo: "https://www.google.com/s2/favicons?domain=outsourceddoers.com&sz=128",
    period: "Aug 2025 – Dec 2025",
    type: "LMS & Web Architecture",
    description:
      "Architected scalable online learning environments using WordPress, LearnDash, Kajabi, and GoHighLevel. Engineered automated drip schedules, dynamic quizzes, and certification workflows, while developing responsive Elementor/PHP portals and managing cPanel migrations and database optimization.",
  },
  {
    role: "Web Developer",
    company: "Gamut Ascent",
    website: "https://gamutascent.com",
    logo: "https://www.google.com/s2/favicons?domain=gamutascent.com&sz=128",
    period: "Oct 2024 – Aug 2025",
    type: "Web Development & WordPress",
    description:
      "Engineered bespoke WordPress functionality utilizing Advanced Custom Fields (ACF), custom post types, and PHP hooks/filters. Designed reusable Elementor component libraries, optimized WooCommerce storefronts, increased Google PageSpeed scores by 37%, and led production QA and cross-browser debugging.",
  },
  {
    role: "Web Developer",
    company: "Ascendion formerly Collabera Digital",
    website: "https://collaberadigital.com",
    logo: "https://www.google.com/s2/favicons?domain=collaberadigital.com&sz=128",
    period: "2023",
    type: "Web Development",
    description:
      "Developed and maintained responsive enterprise web interfaces, custom WordPress implementations, and frontend components.",
  },
  {
    role: "Web Developer",
    company: "Holum Studio",
    website: "https://www.holumstudio.com",
    logo: "https://www.google.com/s2/favicons?domain=holumstudio.com&sz=128",
    period: "2022",
    type: "Web Development",
    description:
      "Built custom client websites, converted Figma/Illustrator designs into pixel-perfect responsive layouts, and optimized site performance.",
  },
  {
    role: "Web Developer",
    company: "Stacked Site",
    website: "https://stackedsites.com",
    logo: "https://www.google.com/s2/favicons?domain=stackedsites.com&sz=128",
    period: "2021 – 2022",
    type: "Web Development",
    description:
      "Engineered custom WordPress themes, WooCommerce stores, custom shortcodes, and managed cPanel/DigitalOcean server deployments.",
  },
  {
    role: "Web Developer",
    company: "Affinity Express Philippines",
    website: "https://affinityx.com/",
    logo: "https://www.google.com/s2/favicons?domain=affinityx.com&sz=128",
    period: "2017 – 2018",
    type: "Web Development",
    description:
      "Produced high-volume web assets, landing pages, CMS builds, and digital graphics for global agency partners.",
  },
];

export const EDUCATION = {
  degree: "Bachelor of Science in Information Technology",
  school: "STI College Marikina",
  website: "https://www.sti.edu",
  logo: "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.sti.edu&size=256",
  graduated: "March 2012",
};