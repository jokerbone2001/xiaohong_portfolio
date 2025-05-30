import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { HiOutlineLightBulb } from "react-icons/hi";
import sonwlyImg from "@/public/image/snowly.png";
import sonwlyImg2 from "@/public/image/snowly_image/weather-list.png";
import sonwlyImg3 from "@/public/image/snowly_image/admin-shop.png";

import batchshipImg from "@/public/image/batchship2.png";
import batchshipImg2 from "@/public/image/batchship.png";

import promatchImg from "@/public/image/promatch.png";
import cygaImg from "@/public/image/cyga.png";
import hackhubkidImg from "@/public/image/hackhubkid.png";
import hackhub from "@/public/hackhub.png";
import eduhack from "@/public/image/hackhub-edu.png";

import promatchdemo1 from "@/public/image/promatch-demo1.png";
import promatchdemo2 from "@/public/image/promatch-demo2.png";

export const links = [
  {
    name: "Home",
    hash: "/#home",
  },
  {
    name: "About",
    hash: "/#about",
  },
  {
    name: "Projects",
    hash: "/#projects",
  },
  {
    name: "Skills",
    hash: "/#skills",
  },
  {
    name: "Experience",
    hash: "/#experience",
  },
  {
    name: "Contact",
    hash: "/#contact",
  },
] as const;
export const experiencesData = [
  {
    title: "B.Sc. in Computer Science",
    location: "Simon Fraser University, Burnaby, BC",
    description:
      "Completed my bachelor's degree in Computer Science, building a strong foundation in software development and computer science principles.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2019 - Jun 2024",
  },
  {
    title: "Software Engineer Co-op",
    location: "Hackhub, Vancouver, BC",
    description:
      "Developed responsive websites for robotics platform and hackathon competition. Enhanced and maintained full-stack platform supporting 500+ contestants across dual-location events in USA and China.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2023 - Jan 2024",
  },
  {
    title: "Web Developer & Event Organizer (Volunteer)",
    location: "Canadian Young Golf Association, Vancouver, BC",
    description:
      "Collaborated with a team to develop the association's official website, improving user experience and boosting online engagement. Led the planning and execution of golf competitions, managing logistics and volunteers, and enhancing leadership and organizational skills.",
    icon: React.createElement(HiOutlineLightBulb),
    date: "Jul 2023 - Present",
  },
  {
    title: "Web Developer Intern",
    location: "LeGT.ai, USA · Remote",
    description:
      "Automated H1B visa application process reducing manual effort by 50%. Integrated ChatGPT API to streamline O-1 visa template generation for legal professionals.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2023 - Feb 2024",
  },
  {
    title: "Full-Stack Engineer Intern",
    location: "Batchship.Inc. Santa Fe Springs, CA, USA · Remote",
    description:
      "Integrated APIs from UPS, USPS, Amazon, GLS, FedEx to support B2B shipping services for a warehouse management system used by 100+ business clients. Developed single/batch order uploads, rate calculations, Stripe online payments, and order sync with Shipstation/TikTok, reducing task time by 60%. Collaborated on responsive landing page design. Built secure, scalable APIs for carrier integrations and resolved technical issues including failed shipments and API challenges.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 - Nov 2024",
  },
  {
    title: "Full Stack Developer (Freelance)",
    location: "Sonwly App / Promatch / Remote",
    description:
      "Independently developed and launched the Sonwly App (WeChat mini-app & React Native mobile app for ski enthusiasts). Led a team to build ProMatch, an AI-powered recruitment platform. Built scalable backends, integrated real-time features, and automated data pipelines.",
    icon: React.createElement(FaReact),
    date: "Sep 2024 - April 2025",
  },
  {
    title: "M.Eng in Systems Design Engineering",
    location: "University of Waterloo, Waterloo, ON",
    description:
      "Currently pursuing Master's degree focusing on system design, AI applications and advanced software engineering principles.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2024 - Present (Expected Sep 2025)",
  },
  {
    title: "Indie Developer (In Progress)",
    location: "Fitness WeChat Mini App, Remote",
    description:
      "Currently independently developing a fitness social app to connect fitness enthusiasts and help them achieve their goals. If you’re interested in learning more or want to collaborate, feel free to reach out!",
    icon: React.createElement(FaReact),
    date: "April 2025 - Present",
  },
] as const;
export const projectsData = [
  {
    id: "batchship",
    title: "Batchship",
    description:
      "B2B warehouse dashboard for 100+ business clients, supporting multi-carrier shipping, cross-platform order management, batch uploads, and label printing",
    tags: ["MERN Stack", "Next.js", "Redux", "AWS", "CircleCI"],
    imageUrl: batchshipImg,
    detailedDescription:
      "Batchship is a comprehensive B2B warehouse management platform that revolutionizes shipping operations for businesses. The system provides a centralized dashboard where clients can compare shipping rates across multiple carriers, process orders in batch, and streamline their entire fulfillment workflow. The platform handles complex logistics tasks including address validation, rate optimization, label generation, and cross-platform order synchronization. With both direct client interfaces and API services, Batchship enables businesses of all sizes to access enterprise-level shipping capabilities through a unified, intuitive interface.",
    contributions: [
      "Led the development of critical API integrations with major carriers including UPS, USPS, Amazon, GLS, and FedEx, meticulously studying developer documentation and navigating complex requirements for each service.",

      "Engineered sophisticated data transformation pipelines to normalize varied carrier API formats, implementing extensive validation logic to ensure successful transactions across different shipping platforms.",

      "Developed both single and batch order processing systems, optimizing for performance with large volume shipments, and built automated rate comparison algorithms allowing clients to select the most cost-effective shipping options.",

      "Independently implemented Stripe payment integration for seamless online account funding, creating a secure and user-friendly payment experience.",

      "Collaborated to create cross-platform order synchronization with Shipstation and TikTok, enabling clients to manage orders from multiple sales channels through a single interface.",

      "Created comprehensive API documentation and developer resources for external partners integrating with our platform, and provided technical support for clients encountering integration challenges.",
    ].join("\n\n"),
    companyUrl: "https://batchship.com/",
    coverImg: batchshipImg2,
    videos: [
      {
        coverImage: batchshipImg,
        videoUrl: "https://youtu.be/Hi9ZnKF1bdo",
      },
    ],
  },
  {
    id: "snowly",
    title: "Snowly App",
    description:
      "Ski community app with real-time resort data, social features, and e-commerce modules.",
    tags: ["React Native", "Spring Boot", "MySQL", "Redis", "AWS EC2"],
    imageUrl: sonwlyImg,
    detailedDescription:
      "Snowly is a comprehensive platform for ski enthusiasts providing real-time data from 10+ major North American western ski resorts including Whistler Blackcomb, Snow Valley, Stevens Pass, and more. Beyond weather conditions and snow reports, the app features a rich social ecosystem allowing users to share trip experiences, photos, and organize group skiing events. The platform includes a robust notification system for snow alerts, event reminders, and resort news. The integrated marketplace connects users with ski equipment, lift tickets, and resort packages from verified vendors. Built with scalability in mind, Snowly handles peak traffic during winter seasons while ensuring fast, reliable data access across different client platforms.",
    contributions: [
      "Significantly expanded an existing ski platform (est. 2017) by developing robust social features for the WeChat mini-program including dynamic content sharing, like/follow systems, and real-time chat functionality.",

      "Completely overhauled the data collection system by replacing legacy JavaScript static scrapers with automated Python-based solutions using Chrome WebDriver and Selenium, implementing daily scheduled scraping of 10+ North American ski resorts.",

      "Grew the platform to 4000+ active Chinese-speaking users by enhancing data accuracy and implementing a notification system for snow alerts, event reminders, and resort news.",

      "Currently independently developing a React Native mobile app version that extends beyond the WeChat ecosystem, introducing a new e-commerce marketplace for ski equipment, lift tickets, and resort packages.",

      "Built a multi-tier architecture with specialized backends: WebSocket-powered chat service for real-time communication, Express.js REST API for resort data delivery, and Spring Boot microservice with Redis caching for the e-commerce platform.",

      "Developed a comprehensive admin dashboard using React admin templates to manage users, comments, products, posts, and chat interactions. Currently optimizing the interface with product and order management modules already implemented.",

      "Designed a hybrid database architecture utilizing MongoDB for flexible document storage (user profiles, resort data, chat messages) and MySQL for relational e-commerce data (product inventory, orders, transactions).",
    ].join("\n\n"),
    companyUrl: "https://www.snowly.com/",
    coverImg: sonwlyImg,
    videos: [
      {
        coverImage: sonwlyImg2,
        videoUrl: "https://www.loom.com/share/466ef64a97fd4f688a3280820527c58b",
        isMobile: true,
      },
      {
        coverImage: sonwlyImg3,
        videoUrl: "https://www.loom.com/share/7ac6d2c3a7ce4a7b8cc75e394236ae1d",
      },
    ],
  },
  {
    id: "promatch",
    title: "Promatch ATS",
    description:
      "AI-powered recruitment platform with automated interview and job management.",
    tags: ["Next.js", "Express.js", "MongoDB", "LLMs", "AI", "Mailgun"],
    imageUrl: promatchImg,
    detailedDescription:
      "Promatch is an innovative AI-powered Applicant Tracking System (ATS) that revolutionizes recruitment through conversational interfaces. For HR professionals, the platform offers a natural language interface to manage the entire recruitment cycle - from creating job descriptions and screening applicants to scheduling interviews and generating feedback - all through simple text commands without complex menus. The system features an advanced AI assistant that understands context and handles complex recruiting tasks through sophisticated language processing. For candidates, Promatch delivers automated interviews that simulate authentic human interactions, using speech-to-text technology for real-time response analysis. Built with a multi-tier architecture, the system employs scoring algorithms to evaluate technical skills, communication abilities, and job-specific competencies. This approach reduces hiring time by 60% while improving candidate quality through standardized assessment protocols that can process hundreds of applications simultaneously.",
    contributions: [
      "Led full-stack development team through successful waterfall methodology implementation, delivering a complex AI-powered ATS platform on deadline while managing both frontend engineer and backend intern resources.",

      "Architected a custom AI interaction system without reliance on frameworks (pre-LangChain era), featuring natural language processing capabilities that enabled HR users to manage job descriptions, interviews, and candidate data entirely through conversational interface.",

      "Designed and implemented an innovative end-to-end automated interview experience where candidates engage with a simulated HR environment, featuring real-time speech-to-text processing that captures responses for LLM analysis and scoring.",

      "Engineered sophisticated prompt engineering techniques including chain-of-thought reasoning, context management, and function calling that transformed natural language inputs into structured API operations with 90%+ accuracy.",

      "Established robust API contracts and data flows between frontend and backend components while serving as the technical bridge between product management requirements and implementation strategies.",

      "Developed streaming response handling for real-time AI interactions, coupled with MongoDB schema design optimized for storing complex candidate assessment data and interview transcripts.",
    ].join("\n\n"),
    companyUrl: "https://www.promatchai.com/en",
    coverImg: promatchdemo2,
    videos: [
      {
        coverImage: promatchdemo1,
        videoUrl: "https://www.promatchai.com/en",
      },
    ],
  },
  {
    id: "hackhub",
    title: "Hackhub",
    description:
      "Developed two key platforms: an educational robotics site and a dual-location hackathon platform supporting 500+ contestants.",
    tags: ["React", "Bootstrap", "Vercel", "SendGrid", "Firebase"],
    imageUrl: hackhub,
    detailedDescription:
      "During my time as a Software Engineer at Hackhub, I independently developed two significant web platforms. The first was the Hackhub Kids Robotics Platform (hackhub.io), an educational website focused on introducing children to robotics and programming concepts, providing learning resources and project guides. The second project involved creating the EduHacks 2023 hackathon website (2023.eduhacks.com), which served as the front-facing platform for a major competition held simultaneously in the US and China with over 500 participants. Additionally, I contributed to the company's full-stack hackathon management platform, though due to company policy and operational considerations, I cannot demonstrate this proprietary system in my portfolio.",
    contributions: [
      "Designed and developed two responsive websites: an educational platform for youth robotics programming and an international hackathon site that supported dual-location events in the US and China.",

      "Implemented a custom event registration system with SendGrid email integration that processed over 500 contestant applications for the international hackathon competition.",

      "Provided critical technical support during the 2023 EduHacks hackathon event, maintaining both frontend and backend systems in real-time to ensure uninterrupted service for participants across US and China locations.",

      "Collaborated with UX designers to create a bilingual interface (English/Chinese) that maintained consistent branding while adapting to cultural differences in each market.",

      "Enhanced backend systems for the company's proprietary hackathon management platform, improving data processing efficiency and reducing administrative workload by 40%.",
    ].join("\n\n"),
    companyUrl: "https://www.hackhub.com/",
    coverImg: hackhub,
    videos: [
      {
        coverImage: eduhack,
        videoUrl: "https://2023.eduhacks.com/en/",
      },
      {
        coverImage: hackhubkidImg,
        videoUrl: "https://www.hackhub.io/",
      },
    ],
  },
  {
    id: "cyga",
    title: "Canadian Young Golf Association Website",
    description:
      "Official site for CYGA, enhancing member engagement and event management for 140+ members.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    imageUrl: cygaImg,
    detailedDescription:
      "Developed the official website for the Canadian Young Golf Association in 2023, a non-profit organization dedicated to promoting golf among young Canadians. The site serves as a central hub for tournament information, membership management, and educational resources for over 140 active members. Using vanilla front-end technologies without relying on AI code generation tools, I created a clean, functional platform that significantly improved the organization's digital presence and member engagement.",
    contributions: [
      "Collaborated with a design team to create an intuitive, responsive website that improved user experience and boosted online engagement by 20%.",

      "Built the entire site using vanilla front-end technologies (HTML, CSS, JavaScript) without reliance on AI code generation tools implemented responsive designs ensuring optimal viewing across devices, resulting in a 10% increase in mobile user engagement.",

      "Served as Golf Competition Organizer, leading a team of 10 volunteers to coordinate events for 50+ participants across 3 local golf clubs.",

      "Developed event registration systems and marketing strategies that increased community engagement by 20% and event participation by 15%.",
    ].join("\n\n"),
    companyUrl: "https://www.cyga.ca/",
    coverImg: cygaImg,
    videos: [
      {
        coverImage: cygaImg,
        videoUrl: "https://www.cyga.ca/",
      },
    ],
  },
] as const;
export const skillsData = [
  // Frontend
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Redux",
  "Tailwind",
  "Bootstrap",
  "Material UI",
  "Responsive Design",

  // Backend
  "Node.js",
  "Express.js",
  "Spring Boot",
  "MyBatis",
  "REST APIs",
  "GraphQL",
  "WebSockets",
  "JWT",
  "OAuth",

  // Programming Languages
  "C/C++",
  "Java",
  "Python",

  // Databases
  "MongoDB",
  "MySQL",
  "Redis",
  "PostgreSQL",

  // Cloud & DevOps
  "AWS",
  "AWS S3",
  "AWS Lambda",
  "Microsoft Azure",
  "Firebase",
  "Vercel",
  "Docker",
  "CircleCI",
  "GitHub Actions",
  "CI/CD",

  // Testing
  "Jest",
  "React Testing Library",
  "Cypress",
  "JUnit",

  // Version Control
  "Git",

  // AI & Data
  "Prompt Engineering",
  "OpenAI API",
  "Qwen API",
  "Xfyun API",
  "LLMs",

  // Web Scraping
  "Selenium",
  "BeautifulSoup",
  "Chrome WebDriver",

  // Other
  "Stripe API",
  "SendGrid",
  "i18n/Localization",
  "WebPack/Vite",
] as const;
