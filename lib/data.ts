// Replace every value below with your own details.
export const profile = {
  name: "Krishan Kumar",
  role: "Software Engineer",
  subtitle: "Software Engineer",
  headline: "Building scalable full stack products with modern engineering and AI-driven solutions",
  tagline: "Full Stack Engineer specializing in scalable React ecosystems, backend development, cloud-ready applications, and AI-powered product development.",
  github: "https://github.com/KrishnKumar-95",
  linkedin: "https://www.linkedin.com/in/erkk",
  whatsapp: "https://wa.me/919518297071",
  email: "erkrishan@zohomail.in",
  resume: "/resume.pdf",
};

export const stats = [
  { value: "4+", label: "Years of Experience" },
  { value: "45%", label: "Performance Improvement" },
  { value: "8+", label: "Cross-Team Projects" },
  { value: "8+", label: "Successful Releases" },
];

export const marquee = [
  "React & Next.js Architecture", "Node.js & Express.js", "TypeScript Engineering", "Nest.js", "Microservices & Serverless", "GraphQL & REST APIs", "Database Design & Optimization",
  "Micro Frontend Systems", "Performance Optimization", "Design Systems",
  "CI/CD & Agile Delivery", "API Integration", "Amazon Web Services", "Docker & Containerization", "Cloud-Ready Deployment",
];

export const about = [
  {
    title: "Full-Stack Development",
    text: "Building scalable applications with React, Vue, Next.js, Node.js, and Spring Boot.",
  },
  {
    title: "Backend & Microservices",
    text: "Designing modular REST APIs and microservice-ready systems with Node.js and Spring Boot.",
  },
  {
    title: "Real-Time Systems",
    text: "Building high-concurrency features with WebSockets, Socket.IO, Redis, and Agora.",
  },
  {
    title: "Performance Engineering",
    text: "Optimizing queries, caching, queues, and APIs to improve system performance by up to 60%.",
  },
  {
    title: "Payments & Integrations",
    text: "Integrating Stripe, Razorpay, Cashfree, Twilio, Firebase, and usage-based billing workflows.",
  },
  {
    title: "Cloud & DevOps",
    text: "Deploying production systems with AWS, Docker, GitHub Actions, PM2, Redis, and S3.",
  },
];

export const experience = [
  {
    title: "Senior Software Engineer", company: "Ultrashield Technology", period: "Nov 2025 – Present",
    points: [
      "Built scalable Node.js/TypeScript and Java/Spring Boot services with modular architectures.",
      "Built real-time chat, queue, and audio calling using Socket.IO, WebSockets, and Agora.",
      "Implemented Redis-backed queues with Amazon ElastiCache, improving matchmaking response time by 40%.",
      "Integrated Stripe, Razorpay, and Cashfree with subscriptions, metered billing, and payment webhooks.",
      "Implemented JWT, OTP, rate limiting, brute-force protection, Helmet, and input sanitization.",
      "Built React/TypeScript admin dashboards with MUI and Redux Toolkit for CMS and analytics.",
      "Optimized production with PM2, BullMQ, MongoDB change streams, Redis, and AWS S3."
    ]
  },
  {
    title: "Software Engineer", company: "Shine Web Services", period: "May 2022 – Oct 2025",
    points: [
      "Built healthcare modules using Vue.js, Pinia, Vuetify, Bootstrap, and DevExtreme.",
      "Built appointment scheduling with DevExtreme, improving doctor-patient scheduling efficiency.",
      "Developed doctor and patient management modules for profiles, records, documents, tasks, and appointments.",
      "Implemented SSO-based patient login with simplified complaint submission workflows.",
      "Optimized MongoDB queries and advanced filters, reducing API response times by 60%.",
      "Built Node.js/TypeScript APIs with Socket.IO, Stripe, Twilio, and React for real-time application features.",
      "Integrated Stripe subscriptions, S3 uploads, Firebase notifications, and GitHub Actions CI/CD on AWS EC2."
    ]
  },
];

export const projects = [
  {
    title: "Curotiva",
    summary:
      "A wellness platform enabling therapist booking, real-time communication, queue management, and usage-based billing.",
    impact:
      "Scaled real-time communication to 50,000+ users and reduced matchmaking response time by 40%.",
    challenge:
      "Building reliable real-time chat and queue systems while handling high concurrency and accurate per-minute billing.",
    highlights: [
      "Built WebSocket architecture for real-time chat and queue updates.",
      "Implemented Redis-backed queue management using Amazon ElastiCache.",
      "Built therapist booking and real-time queue assignment workflows.",
      "Implemented usage-based billing with 35% improved billing accuracy.",
      "Delivered production-ready Agora audio calling for high concurrency.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "WebSockets",
      "MongoDB",
      "Redis",
      "Amazon ElastiCache",
      "Agora",
      "Twilio",
      "Cashfree",
    ],
    link: "https://play.google.com/store/apps/details?id=com.curotiva.support",
  },

  {
    title: "Pleezr",
    summary:
      "A feature-rich dating application with subscriptions, gamification, messaging, notifications, and user verification.",
    impact:
      "Reduced API response times by 60% through MongoDB query optimization and advanced filtering.",
    challenge:
      "Optimizing data-heavy APIs while supporting payments, real-time communication, media uploads, and engagement features.",
    highlights: [
      "Optimized MongoDB queries and advanced filters for 60% faster responses.",
      "Implemented Stripe subscriptions, metered billing, and payment webhooks.",
      "Built gamification, referrals, profile boosts, and verification workflows.",
      "Integrated Socket.IO, Twilio, Firebase notifications, and AWS S3.",
      "Configured AWS EC2 deployment with GitHub Actions CI/CD.",
    ],
    stack: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "React",
      "Socket.IO",
      "Stripe",
      "Twilio",
      "AWS EC2",
      "AWS S3",
      "GitHub Actions",
    ],
    link: "https://play.google.com/store/apps/details?id=com.pleezr.app",
  },
  {
    title: "TukTukLove",
    summary:
      "A scalable dating platform with real-time matching, messaging, voice calling, subscriptions, and gamification.",
    impact:
      "Built 20+ modular backend components with Redis caching, real-time communication, and scalable production infrastructure.",
    challenge:
      "Designing real-time matching, messaging, queue processing, and subscription workflows while maintaining performance and security.",
    highlights: [
      "Built real-time messaging and voice calling with Socket.IO and Agora.",
      "Implemented Redis caching, BullMQ queues, and MongoDB change streams.",
      "Integrated Stripe, Razorpay, and Cashfree subscription workflows.",
      "Implemented JWT, OTP, rate limiting, brute-force protection, and input sanitization.",
      "Built React admin dashboards with analytics, CMS, verification, and support workflows.",
    ],
    stack: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "React",
      "Socket.IO",
      "Agora",
      "Stripe",
      "Razorpay",
      "Cashfree",
      "AWS S3",
      "BullMQ",
    ],
    link: "",
  },
  {
    title: "HealthCore",
    summary:
      "A patient management platform supporting appointment scheduling, doctor workflows, patient records, and secure interactions.",
    impact:
      "Improved healthcare workflows by simplifying appointment scheduling and patient management.",
    challenge:
      "Designing intuitive healthcare workflows for doctors and patients while managing complex scheduling and medical data.",
    highlights: [
      "Built appointment scheduling using DevExtreme.",
      "Developed doctor management for records, documents, and appointments.",
      "Built patient portals for profiles, tasks, and medical history.",
      "Implemented SSO authentication and simplified complaint workflows.",
      "Created responsive interfaces using Vue.js, Vuetify, and Bootstrap.",
    ],
    stack: [
      "Vue.js",
      "Pinia",
      "Vuetify",
      "Bootstrap",
      "DevExtreme",
      "SSO",
    ],
    link: "https://healthcoretech.com",
  },

  {
    title: "Genic Assets",
    summary:
      "An asset management platform for managing inventory and streamlining asset-related business operations.",
    impact:
      "Improved database query performance by 50% and enabled 40% smoother inventory management.",
    challenge:
      "Processing complex asset data efficiently while maintaining fast database queries across large datasets.",
    highlights: [
      "Built asset management workflows using the MERN stack.",
      "Optimized MongoDB queries using Mongoose and aggregation pipelines.",
      "Improved database query performance by 50%.",
      "Enhanced inventory workflows for smoother asset management.",
      "Contributed to improvements that increased customer satisfaction.",
    ],
    stack: [
      "MongoDB",
      "Mongoose",
      "Express.js",
      "React",
      "Node.js",
      "Aggregation Pipeline",
    ],
    link: "https://genicassets.com",
  },
];

export const services = [
  {
    title: "Full-Stack Development",
    text: "Scalable web applications using React, Vue, Next.js, Node.js, and Spring Boot.",
  },

  {
    title: "Backend & API Engineering",
    text: "Secure REST APIs, modular services, microservices, authentication, and integrations.",
  },

  {
    title: "Real-Time Applications",
    text: "High-concurrency chat, queues, notifications, and calling with WebSockets and Socket.IO.",
  },

  {
    title: "Performance Optimization",
    text: "Query optimization, Redis caching, queues, and backend improvements for faster systems.",
  },

  {
    title: "Payments & Integrations",
    text: "Subscription, billing, webhook, and third-party integrations with Stripe, Razorpay, and Cashfree.",
  },

  {
    title: "Cloud & DevOps",
    text: "AWS deployments, Docker, CI/CD, PM2, S3, ElastiCache, and production infrastructure.",
  },
];

export interface SkillGroup {
  title: string;
  skills: {
    name: string;
    icon: string;
  }[];
}

export const credibility = {
  eyebrow: "Engineering Credibility",

  title: "Building scalable systems with measurable outcomes",

  description:
    "4+ years of experience building full-stack applications, real-time systems, backend services, and cloud-ready solutions.",

  impactTitle: "Impact Highlights",

  impactSubtitle:
    "Engineering decisions focused on performance, scalability, reliability, and business outcomes.",

  impactHighlights: [
    "Reduced API response times by up to 60% through query optimization and advanced filtering.",
    "Scaled real-time communication architecture to support 50,000+ users.",
    "Reduced matchmaking response time by 40% using Redis-backed queue management.",
    "Improved billing accuracy by 35% with real-time usage-based billing.",
    "Improved database query performance by 50% using MongoDB aggregation pipelines.",
    "Improved code maintainability and development velocity by 40% through backend modularization.",
  ],

  stackTitle: "Engineering Stack",

  stackSubtitle:
    "Production-ready capabilities across frontend, backend, real-time systems, data, delivery, and cloud infrastructure.",

  skillGroups: [
    {
      title: "Core Frontend",
      skills: [
        {
          name: "JavaScript (ES6+)",
          icon: "/tech-icons/JavaScript.svg",
        },
        {
          name: "TypeScript",
          icon: "/tech-icons/TypeScript.svg",
        },
        {
          name: "React.js",
          icon: "/tech-icons/React.svg",
        },
        {
          name: "Next.js",
          icon: "/tech-icons/Next.js.svg",
        },
        {
          name: "Next.js (App Router)",
          icon: "/tech-icons/Next.js.svg",
        },
        {
          name: "Vue.js",
          icon: "/tech-icons/Vue.js.svg",
        },
        {
          name: "Nuxt",
          icon: "/tech-icons/Nuxt-JS.svg",
        },
        {
          name: "HTML5",
          icon: "/tech-icons/HTML5.svg",
        },
        {
          name: "CSS3",
          icon: "/tech-icons/CSS3.svg",
        },
        {
          name: "Vite",
          icon: "/tech-icons/Vite.svg",
        },
      ],
    },

    {
      title: "State Management",
      skills: [
        {
          name: "Redux Toolkit",
          icon: "/tech-icons/Redux.svg",
        },
        {
          name: "Redux",
          icon: "/tech-icons/Redux.svg",
        },
        {
          name: "React Query",
          icon: "/tech-icons/React.svg",
        },
        {
          name: "TanStack Query",
          icon: "/tech-icons/React.svg",
        },
        {
          name: "Context API",
          icon: "/tech-icons/React.svg",
        },
        {
          name: "Pinia",
          icon: "/tech-icons/Vue.js.svg",
        },
        {
          name: "Vuex",
          icon: "/tech-icons/Vue.js.svg",
        },
      ],
    },

    {
      title: "UI Styling",
      skills: [
        {
          name: "Material UI",
          icon: "/tech-icons/Material-UI.svg",
        },
        {
          name: "Shadcn UI",
          icon: "/tech-icons/React.svg",
        },
        {
          name: "SASS",
          icon: "/tech-icons/Sass.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "/tech-icons/Tailwind-CSS.svg",
        },
        {
          name: "Bootstrap",
          icon: "/tech-icons/Bootstrap.svg",
        },
        {
          name: "Vuetify",
          icon: "/tech-icons/Veutify.svg",
        },
        {
          name: "Responsive Design",
          icon: "/tech-icons/CSS3.svg",
        },
        {
          name: "Component Design Systems",
          icon: "/tech-icons/Storybook.svg",
        },
        {
          name: "DevExtreme",
          icon: "/tech-icons/React-Bootstrap.svg",
        },
        {
          name: "ApexCharts",
          icon: "/tech-icons/D3.js.svg",
        },
      ],
    },

    {
      title: "Architecture",
      skills: [
        {
          name: "Code Splitting",
          icon: "/tech-icons/Webpack.svg",
        },
        {
          name: "Lazy Loading",
          icon: "/tech-icons/Webpack.svg",
        },
        {
          name: "Micro Frontends",
          icon: "/tech-icons/Microservices.svg",
        },
        {
          name: "SPA Development",
          icon: "/tech-icons/React.svg",
        },
        {
          name: "Core Web Vitals Optimization",
          icon: "/tech-icons/Chrome.svg",
        },
        {
          name: "Modular Frontend Architecture",
          icon: "/tech-icons/Webpack.svg",
        },
        {
          name: "Scalable Application Architecture",
          icon: "/tech-icons/Architecture.svg",
        },
        {
          name: "Microservices",
          icon: "/tech-icons/Moleculer.svg",
        },
        {
          name: "Modular Backend Architecture",
          icon: "/tech-icons/Nest.js.svg",
        },
      ],
    },

    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: "/tech-icons/Node.js.svg",
        },
        {
          name: "Express.js",
          icon: "/tech-icons/Express.svg",
        },
        {
          name: "NestJS",
          icon: "/tech-icons/Nest.js.svg",
        },
        {
          name: "Java",
          icon: "/tech-icons/Java.svg",
        },
        {
          name: "Spring Boot",
          icon: "/tech-icons/Spring.svg",
        },
        {
          name: "REST APIs",
          icon: "/tech-icons/OpenAPI.svg",
        },
        {
          name: "REST Services",
          icon: "/tech-icons/OpenAPI.svg",
        },
        {
          name: "JWT Authentication",
          icon: "/tech-icons/Okta.svg",
        },
        {
          name: "WebSockets",
          icon: "/tech-icons/Socket.io.svg",
        },
        {
          name: "Socket.IO",
          icon: "/tech-icons/Socket.io.svg",
        },
        {
          name: "API Integrations",
          icon: "/tech-icons/OpenAPI.svg",
        },
        {
          name: "Backend Development",
          icon: "/tech-icons/Node.js.svg",
        },
        {
          name: "Authentication & Authorization",
          icon: "/tech-icons/Okta.svg",
        },
        {
          name: "Swagger",
          icon: "/tech-icons/Swagger.svg",
        },
        {
          name: "OTP Authentication",
          icon: "/tech-icons/Okta.svg",
        },
        {
          name: "Rate Limiting",
          icon: "/tech-icons/NGINX.svg",
        },
        {
          name: "Input Sanitization",
          icon: "/tech-icons/ESLint.svg",
        },
        {
          name: "NoSQL Injection Prevention",
          icon: "/tech-icons/MongoDB.svg",
        },
        {
          name: "XSS Prevention",
          icon: "/tech-icons/Chrome.svg",
        },
      ],
    },

    {
      title: "Database & Data",
      skills: [
        {
          name: "SQL",
          icon: "/tech-icons/SQL-Developer.svg",
        },
        {
          name: "PostgreSQL",
          icon: "/tech-icons/PostgresSQL.svg",
        },
        {
          name: "MongoDB",
          icon: "/tech-icons/MongoDB.svg",
        },
        {
          name: "MySQL",
          icon: "/tech-icons/MySQL.svg",
        },
        {
          name: "Redis",
          icon: "/tech-icons/Redis.svg",
        },
        {
          name: "Mongoose",
          icon: "/tech-icons/Mongoose.js.svg",
        },
        {
          name: "Data Validation",
          icon: "/tech-icons/JSON.svg",
        },
        {
          name: "Data Comparison",
          icon: "/tech-icons/JSON.svg",
        },
        {
          name: "Data Quality",
          icon: "/tech-icons/JSON.svg",
        },
        {
          name: "Query Optimization",
          icon: "/tech-icons/SQL-Developer.svg",
        },
        {
          name: "MongoDB Aggregation",
          icon: "/tech-icons/MongoDB.svg",
        },
        {
          name: "Aggregation Pipelines",
          icon: "/tech-icons/MongoDB.svg",
        },
      ],
    },

    {
      title: "AI & Automation",
      skills: [
        {
          name: "Python",
          icon: "/tech-icons/Python.svg",
        },
        {
          name: "Generative AI",
          icon: "/tech-icons/PyTorch.svg",
        },
        {
          name: "GenAI",
          icon: "/tech-icons/PyTorch.svg",
        },
        {
          name: "RAG",
          icon: "/tech-icons/GraphQL.svg",
        },
        {
          name: "LangChain",
          icon: "/tech-icons/Python.svg",
        },
        {
          name: "Prompt Engineering",
          icon: "/tech-icons/Python.svg",
        },
        {
          name: "AI Integrations",
          icon: "/tech-icons/Python.svg",
        },
        {
          name: "LLM Applications",
          icon: "/tech-icons/PyTorch.svg",
        },
      ],
    },

    {
      title: "Cloud & DevOps",
      skills: [
        {
          name: "AWS",
          icon: "/tech-icons/AWS.svg",
        },
        {
          name: "AWS EC2",
          icon: "/tech-icons/EC2.svg",
        },
        {
          name: "AWS S3",
          icon: "/tech-icons/S3.svg",
        },
        {
          name: "Amazon ElastiCache",
          icon: "/tech-icons/ElastiCache.svg",
        },
        {
          name: "AWS Route 53",
          icon: "/tech-icons/Route53.svg",
        },
        {
          name: "AWS Secrets Manager",
          icon: "/tech-icons/SecretsManager.svg",
        },
        {
          name: "AWS IAM",
          icon: "/tech-icons/IAM.svg",
        },
        {
          name: "AWS ECS",
          icon: "/tech-icons/ECS.svg",
        },
        {
          name: "Docker",
          icon: "/tech-icons/Docker.svg",
        },
        {
          name: "Kubernetes",
          icon: "/tech-icons/Kubernetes.svg",
        },
        {
          name: "CI/CD",
          icon: "/tech-icons/GitHub-Actions.svg",
        },
        {
          name: "Jenkins",
          icon: "/tech-icons/Jenkins.svg",
        },
        {
          name: "GitHub Actions",
          icon: "/tech-icons/GitHub-Actions.svg",
        },
        {
          name: "PM2",
          icon: "/tech-icons/Node.js.svg",
        },
        {
          name: "Terraform",
          icon: "/tech-icons/HashiCorp-Terraform.svg",
        },
        {
          name: "Nginx",
          icon: "/tech-icons/NGINX.svg",
        },
      ],
    },

    {
      title: "Tooling",
      skills: [
        {
          name: "Git",
          icon: "/tech-icons/Git.svg",
        },
        {
          name: "GitHub",
          icon: "/tech-icons/GitHub.svg",
        },
        {
          name: "GitLab",
          icon: "/tech-icons/GitLab.svg",
        },
        {
          name: "VS Code",
          icon: "/tech-icons/Visual-Studio-Code-(VS-Code).svg",
        },
        {
          name: "Postman",
          icon: "/tech-icons/Postman.svg",
        },
        {
          name: "Chrome DevTools",
          icon: "/tech-icons/Chrome.svg",
        },
        {
          name: "Firebase",
          icon: "/tech-icons/Firebase.svg",
        },
        {
          name: "Jest",
          icon: "/tech-icons/Jest.svg",
        },
        {
          name: "React Testing Library",
          icon: "/tech-icons/React.svg",
        },
        {
          name: "Vitest",
          icon: "/tech-icons/Vite.svg",
        },
        {
          name: "Vite",
          icon: "/tech-icons/Vite.svg",
        },
        {
          name: "Webpack",
          icon: "/tech-icons/Webpack.svg",
        },
        {
          name: "Jira",
          icon: "/tech-icons/Jira.svg",
        },
        {
          name: "Figma",
          icon: "/tech-icons/Figma.svg",
        },
        {
          name: "Turborepo",
          icon: "/tech-icons/Node.js.svg",
        },
        {
          name: "pnpm Workspace",
          icon: "/tech-icons/PNPM.svg",
        },
      ],
    },

    {
      title: "Real-Time & Communication",
      skills: [
        {
          name: "WebSockets",
          icon: "/tech-icons/Socket.io.svg",
        },
        {
          name: "Socket.IO",
          icon: "/tech-icons/Socket.io.svg",
        },
        {
          name: "Agora",
          icon: "/tech-icons/Agora.svg",
        },
        {
          name: "Twilio",
          icon: "/tech-icons/Twilio.svg",
        },
        {
          name: "Firebase Admin",
          icon: "/tech-icons/Firebase.svg",
        },
        {
          name: "Real-Time Queues",
          icon: "/tech-icons/RabbitMQ.svg",
        },
        {
          name: "Real-Time Notifications",
          icon: "/tech-icons/Firebase.svg",
        },
        {
          name: "Real-Time Communication",
          icon: "/tech-icons/Socket.io.svg",
        },
        {
          name: "STUN/TURN",
          icon: "/tech-icons/WebRTC.svg",
        },
        {
          name: "Janus",
          icon: "/tech-icons/WebRTC.svg",
        },
        {
          name: "Mediasoup",
          icon: "/tech-icons/WebRTC.svg",
        },
      ],
    },

    {
      title: "Payments & Integrations",
      skills: [
        {
          name: "Stripe",
          icon: "/tech-icons/Stripe.svg",
        },
        {
          name: "Razorpay",
          icon: "/tech-icons/Razorpay.svg",
        },
        {
          name: "Cashfree",
          icon: "/tech-icons/Cashfree.svg",
        },
        {
          name: "Payment Webhooks",
          icon: "/tech-icons/GraphQL.svg",
        },
        {
          name: "Subscription Billing",
          icon: "/tech-icons/Stripe.svg",
        },
        {
          name: "Metered Usage",
          icon: "/tech-icons/Stripe.svg",
        },
      ],
    },

    {
      title: "Testing & Quality",
      skills: [
        {
          name: "Jest",
          icon: "/tech-icons/Jest.svg",
        },
        {
          name: "React Testing Library",
          icon: "/tech-icons/React.svg",
        },
        {
          name: "Vitest",
          icon: "/tech-icons/Vite.svg",
        },
        {
          name: "Unit Testing",
          icon: "/tech-icons/JUnit.svg",
        },
        {
          name: "Integration Testing",
          icon: "/tech-icons/Selenium.svg",
        },
        {
          name: "API Testing",
          icon: "/tech-icons/Postman.svg",
        },
        {
          name: "Chrome DevTools",
          icon: "/tech-icons/Chrome.svg",
        },
      ],
    },
  ] satisfies SkillGroup[],
};

export const education = [
  // { level: "Postgraduate", degree: "Master of Computer Applications", school: "University Name", score: "CGPA: 0.00 / 10" },
  {
    level: "Undergraduate",
    degree: "Bachelor of Computer Application (BCA)",
    school: "Kurukshetra University, HR",
    duration: "2016 – 2019",
  },
];

export const recommendations = [
  { quote: "Add a real recommendation from a colleague or client here.", name: "Reviewer Name", role: "Their Role", team: "Their Team" },
];
