import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { HiOutlineLightBulb } from "react-icons/hi";
import sonwlyImg from "@/public/image/snowly.png";
import batchshipImg from "@/public/image/batchship2.png";
import promatchImg from "@/public/image/promatch.png";
import cygaImg from "@/public/image/cyga.png";
import hackhubkidImg from "@/public/image/hackhubkid.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
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
    location: "LeGT.ai",
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
    title: "Batchship Integration",
    description:
      "B2B warehouse dashboard for 100+ business clients, supporting multi-carrier shipping, cross-platform order management, batch uploads, and label printing",
    tags: ["MERN Stack", "Next.js", "Redux", "AWS", "CircleCI"],
    imageUrl: batchshipImg,
  },
  {
    title: "Sonwly App",
    description:
      "Ski community app with real-time resort data, social features, and e-commerce modules.",
    tags: ["React Native", "Spring Boot", "MySQL", "Redis", "AWS EC2"],
    imageUrl: sonwlyImg,
  },
  {
    title: "Promatch ATS",
    description:
      "AI-powered recruitment platform with automated interview and job management.",
    tags: ["Next.js", "Express.js", "MongoDB", "LLMs", "AI APIs"],
    imageUrl: promatchImg,
  },
  {
    title: "Canadian Young Golf Association Website",
    description:
      "Official site for CYGA, enhancing member engagement and event info.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: cygaImg,
  },
  {
    title: "Hackhub Kids Robotics Platform",
    description:
      "Static site for kids robotics program and hackathon event resources.",
    tags: ["React", "Bootstrap", "Vercel"],
    imageUrl: hackhubkidImg,
  },
] as const;
export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Express.js",
  "Spring Boot",
  "MyBatis",
  "C/C++",
  "Java",
  "Python",
  "Git",
  "Tailwind",
  "MongoDB",
  "MySQL",
  "Redis",
  "AWS",
  "Microsoft Azure",
  "JWT",
  "Redux",
  "REST APIs",
  "Prompt Engineering",
  "Selenium",
  "BeautifulSoup",
  "OpenAI API",
  "Qwen API",
  "Xfyun API",
  "Framer Motion",
] as const;
