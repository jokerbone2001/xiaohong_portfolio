import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { HiOutlineLightBulb } from "react-icons/hi";
import sonwlyImg from "@/public/corpcomment.png";
import batchshipImg from "@/public/rmtdev.png";
import promatchImg from "@/public/wordanalytics.png";

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
    date: "2019 - 2024",
  },
  {
    title: "M.Eng in Systems Design Engineering",
    location: "University of Waterloo, Waterloo, ON",
    description:
      "Currently pursuing Master's degree focusing on system design, AI applications and advanced software engineering principles.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - Present (Expected 2025)",
  },
  {
    title: "Full-Stack Engineer Intern",
    location: "Batchship.Inc. (MERN Stack, Nextjs, Redux, JWT, AWS)",
    description:
      "Integrated APIs from UPS, USPS, Amazon, GLS, FedEx for shipping service support in warehouse management system used by 50+ clients. Developed single/batch order uploads, rate calculations, Stripe online payments, and order sync with Shipstation/TikTok, reducing task time by 60%. Collaborated on responsive landing page design. Built secure, scalable APIs for carrier integrations and resolved technical issues including failed shipments and API challenges.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 - Nov 2024",
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
    title: "Software Engineer Co-op",
    location: "Hackhub",
    description:
      "Developed responsive websites for robotics platform and hackathon competition. Enhanced and maintained full-stack platform supporting 500+ contestants across dual-location events in USA and China.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2023 - Jan 2024",
  },
  {
    title: "Full Stack Developer (Freelance)",
    location: "Remote",
    description:
      "Currently pursuing Master's degree in Systems Design Engineering at University of Waterloo while working on freelance projects including Sonwly App and Promatch.",
    icon: React.createElement(FaReact),
    date: "Sep 2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Sonwly App",
    description:
      "Full-stack WeChat mini-app and React Native mobile app displaying 10+ ski resort data with real-time group chats, social features (follow/like/posts), and e-commerce platform with merchant dashboards. Implemented Spring Boot/MyBatis backend with JWT/OAuth security, MySQL/MongoDB databases, Redis caching, and FCM push notifications. Automated ski condition extraction from 10+ resorts using Selenium/BeautifulSoup on AWS EC2, serving 1,000+ users in BC and California.",
    tags: ["React Native", "Spring Boot", "MySQL", "Redis", "AWS EC2"],
    imageUrl: sonwlyImg,
  },
  {
    title: "Batchship Integration",
    description:
      "Integrated APIs from multiple carriers and developed features for a warehouse management system used by 50+ clients. Implemented order upload, rate calculations, and online payments with Stripe.",
    tags: ["MERN Stack", "Next.js", "Redux", "AWS", "CircleCI"],
    imageUrl: batchshipImg,
  },
  {
    title: "Promatch ATS",
    description:
      "Led team of 2 developers building AI-powered ATS with Qwen API for interview analysis and Xfyun API for speech-to-text. Designed end-to-end solutions with backend AI logic and prompt engineering. Implemented features for generating job descriptions, interview questions, and automated email templates. Developed AI-driven interview system with real-time transcription and automated scoring of candidate responses.",
    tags: ["Next.js", "Express.js", "MongoDB", "LLMs", "AI APIs"],
    imageUrl: promatchImg,
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
