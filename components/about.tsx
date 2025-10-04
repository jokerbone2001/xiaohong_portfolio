"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.section
      ref={ref}
      className="mb-12 max-w-[45rem] text-center leading-8 sm:mb-12 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        With experience across both startups and established companies, I
        specialize in taking projects from initial concept through to
        deployment. I've built systems that serve hundreds of users daily,
        integrated complex APIs, and led cross-functional teams to deliver
        scalable solutions. Notable projects include a warehouse management
        system at Batchship, legal workflow automation at LeGT.ai, a global
        hackathon platform at Hackhub, and currently a healthcare management
        platform at Axon Health.
      </p>
      <p className="mb-3">
        As a freelancer and entrepreneur, I have independently developed
        multiple projects: (1) Sonwly App—a WeChat mini-app and React Native
        mobile app for ski enthusiasts, (2) ProMatch—an AI-powered recruitment
        platform where I led a team, (3) a fitness ecosystem platform with
        calorie tracking and gym/trainer marketplace features, and (4) Website
        migration and SEO optimization services, helping local businesses
        migrate from Wix to cost-effective solutions while providing SEO
        optimization. I'm passionate about using technology to solve real-world
        problems and always eager to learn new tools and frameworks.
      </p>
      {!expanded && (
        <button
          className="mt-2 text-blue-600 hover:underline"
          onClick={() => setExpanded(true)}
        >
          View more
        </button>
      )}
      {expanded && (
        <>
          <p className="mb-3">
            Over time I realized my role in many projects has evolved beyond
            "just coding." I increasingly operate like a product owner: aligning
            with stakeholders, abstracting and prioritizing requirements, and
            delivering something adoptable and valuable under real constraints.
            As cloud services and AI tooling reduce pure technical friction,
            sustainable value now depends more on: identifying real pain points,
            structuring information and experience, and shipping solutions that
            can evolve.
          </p>
          <p className="mb-3">
            In the community space, I actively provide pro bono technical
            support for organizations and events. For the{" "}
            <span className="font-medium">Canadian Young Golf Association</span>{" "}
            I designed and built the official site—improving information
            hierarchy, clarity, and visual presentation. For the{" "}
            <span className="font-medium">EduHacks</span> hackathon, I created
            recruitment & promotional pages serving applicants, judges, and
            partners. I also helped build youth robotics educational/partnership
            sites that increased credibility and collaboration opportunities.
          </p>
          <p className="mb-3">
            These experiences shaped an emerging product framework I follow: (1)
            validate whether the problem is truly worth solving; (2) align fast
            using the smallest viable artifact (prototype / MVP / automation
            script); (3) iterate with real user feedback + data; (4) invest in
            architecture, performance, and observability only when timing and
            traction justify it—avoiding premature complexity.
          </p>
          <p className="mb-3">
            I now position myself as a product-minded engineer with strong
            execution, working toward becoming a macro-level{" "}
            <span className="font-medium">
              Product Manager / Technical Product Lead
            </span>
            —someone who understands both system constraints and business
            intent, and can convert ambiguous objectives into clear, measurable
            roadmaps.
          </p>
          <p className="mb-3">
            If you’re exploring how to validate an idea at low cost, productize
            a manual workflow, or turn scattered information into a structured,
            high-signal experience—I’d be happy to connect or collaborate.
          </p>
          <button
            className="mt-2 text-blue-600 hover:underline"
            onClick={() => setExpanded(false)}
          >
            Show less
          </button>
        </>
      )}
    </motion.section>
  );
}
