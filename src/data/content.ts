export interface ProjectItem {
  title: string;
  status: 'Building' | 'Growing' | 'Active' | 'Completed';
  description: string;
  tags: string[];
  website?: string;
  image: string;
}

export interface ClientItem {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

export interface BeliefItem {
  title: string;
  description: string;
  icon: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  isFuture?: boolean;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const FOUNDER_CONTENT = {
  hero: {
    name: "Najrudin Ansari",
    headline: "Building Products, Communities, and Opportunities.",
    subheadline: "I'm a Computer Science student, aspiring entrepreneur, and community builder passionate about creating products and ecosystems that help people learn, build, collaborate, and grow together.",
    photoPortrait: "/images/najrudin-portrait.jpg",
    photoSetup: "/images/najrudin-setup.png",
    ctaPrimary: { label: "View Projects", href: "#projects" },
    ctaSecondary: { label: "Connect With Me", href: "#contact" }
  },
  about: {
    title: "About Me",
    intro: "I am a B.Tech Computer Science student, aspiring entrepreneur, and passionate builder.",
    mission: "I believe that meaningful impact cannot be created alone. My mission is to build products, communities, and ecosystems that empower people to learn, collaborate, and create.",
    passions: [
      "Startups",
      "Technology",
      "Artificial Intelligence",
      "Product Building",
      "Community Building",
      "Entrepreneurship",
      "Public Engagement"
    ],
    vision: "My long-term vision is to create communities and products that help people turn ideas into reality."
  },
  philosophy: {
    title: "What I Believe",
    items: [
      {
        title: "Build Things",
        description: "Ideas become valuable only when they are built.",
        icon: "Hammer"
      },
      {
        title: "Build Communities",
        description: "Great things happen when passionate people collaborate.",
        icon: "Users"
      },
      {
        title: "Build Impact",
        description: "Technology should create meaningful change.",
        icon: "Zap"
      },
      {
        title: "Keep Learning",
        description: "Learning never stops.",
        icon: "BookOpen"
      }
    ] as BeliefItem[]
  },
  projects: {
    title: "What I'm Building",
    items: [
      {
        title: "Printizo",
        status: "Building",
        description: "A platform for printing businesses that helps automate workflows, manage orders, and improve operations.",
        tags: ["SaaS", "Marketplace", "Automation", "Startup"],
        image: "/images/printizo.jpg"
      },
      {
        title: "LinkMyDream",
        status: "Growing",
        description: "A community network to connect with everyone—builders, students, founders, and creators. Apply for connection, collaborate, and grow together.",
        tags: ["Community", "Builders", "Founders", "Networking"],
        website: "https://linkmydream.com",
        image: "/images/linkmydream.jpg"
      },
      {
        title: "LinkMyTech",
        status: "Active",
        description: "A platform where I experiment with products, startups, and technical solutions.",
        tags: ["Products", "Experiments", "Development"],
        website: "https://linkmytech.net",
        image: "/images/linkmytech.jpg"
      }
    ] as ProjectItem[]
  },
  clientWork: {
    title: "Client Projects",
    items: [
      {
        name: "Margosa Dental",
        description: "Website and business platform designed for clinic management, patient interaction, and streamlined appointments.",
        image: "/images/margosa.jpg",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
        link: "#"
      },
      {
        name: "InnoDent",
        description: "Advanced appointment booking and dental service platform providing real-time scheduling and automated reminders.",
        image: "/images/innodent.jpg",
        technologies: ["React", "Node.js", "Express", "MongoDB"],
        link: "#"
      }
    ] as ClientItem[]
  },
  vision: {
    title: "Why I Build",
    text: "I don't want to build products only for myself. I want to create communities, ecosystems, and opportunities that help others build meaningful things. I believe the future belongs to builders, creators, founders, and communities working together."
  },
  community: {
    title: "Building Communities",
    description: "Creating vibrant ecosystems where aspiring entrepreneurs, tech enthusiasts, and creators unite.",
    locations: ["Pune", "India", "Global Builders"],
    initiatives: [
      { name: "Meetups", icon: "Users" },
      { name: "Workshops", icon: "Wrench" },
      { name: "Hackathons", icon: "Code" },
      { name: "Founder Gatherings", icon: "Coffee" },
      { name: "Student Communities", icon: "GraduationCap" },
      { name: "Startup Ecosystems", icon: "Globe" }
    ]
  },
  timeline: {
    title: "The Journey So Far",
    items: [
      { year: "Phase 1", title: "Started Coding in School", description: "Discovered the magic of software and writing lines of code that bring ideas to life on a screen." },
      { year: "Phase 2", title: "Entered Engineering", description: "Enrolled in B.Tech Computer Science to master computational theory, systems, and modern software architecture." },
      { year: "Phase 3", title: "Started Building Products", description: "Moved beyond classroom tutorials to design, ship, and iterate on real-world projects and technical experiments." },
      { year: "Phase 4", title: "Started Working With Clients", description: "Delivered high-value business platforms and web solutions for clients like Margosa Dental and InnoDent." },
      { year: "Phase 5", title: "Started LinkMyDream", description: "Launched a collaborative networking community connecting ambitious students, creators, and young founders." },
      { year: "Phase 6", title: "Started Printizo", description: "Begun architecting a dedicated SaaS workflow automation and order management platform for printing businesses." },
      { year: "Phase 7", title: "Started Building Communities", description: "Organizing meetups, student developer circles, and startup gatherings across Pune, India, and globally." },
      { year: "Future Vision", title: "Build Ecosystems", description: "Create self-sustaining platforms and venture networks that fund, mentor, and accelerate the next generation of builders.", isFuture: true }
    ] as TimelineItem[]
  },
  skills: {
    title: "Founder & Tech Stack",
    categories: [
      {
        name: "Frontend",
        skills: ["React", "Next.js", "Tailwind"]
      },
      {
        name: "Backend",
        skills: ["Node.js", "NestJS", "Express"]
      },
      {
        name: "Database",
        skills: ["PostgreSQL", "MySQL", "MongoDB"]
      },
      {
        name: "Cloud & DevOps",
        skills: ["Docker", "Linux", "Cloudflare"]
      },
      {
        name: "Founder & Other",
        skills: ["AI", "Product Design", "Entrepreneurship", "Community Building"]
      }
    ] as SkillCategory[]
  },
  contact: {
    title: "Let's Build Something Meaningful",
    subtitle: "Whether you want to talk startups, collaborate on a project, or join our community initiatives, my inbox is always open.",
    email: "connect@najrudin.com.np",
    links: [
      { name: "LinkedIn", href: "https://linkedin.com/in/najrudinan", icon: "Linkedin" },
      { name: "GitHub", href: "https://github.com/najrudinan", icon: "Github" },
      { name: "X / Twitter", href: "https://x.com/najrudinan", icon: "Twitter" },
      { name: "Instagram", href: "https://instagram.com/itsnajrudin", icon: "Instagram" },
      { name: "Email", href: "mailto:connect@najrudin.com.np", icon: "Mail" }
    ]
  },
  footer: {
    quote: "Alone we can build fast. Together we can build far.",
    copyright: `© ${new Date().getFullYear()} Najrudin Ansari. Built with Next.js, Tailwind & Framer Motion.`
  }
};
