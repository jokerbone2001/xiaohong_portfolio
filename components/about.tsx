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
        I have hands-on experience as a{" "}
        <span className="font-medium">full-stack engineer</span> and{" "}
        <span className="font-medium">web developer</span> at both startups and
        established teams. My work covers API integration, building scalable web
        platforms, automating workflows, and leading projects from concept to
        deployment. Notable projects include a warehouse management system at
        Batchship, legal workflow automation at LeGT.ai, and a global hackathon
        platform at Hackhub.
      </p>
      <p className="mb-3">
        As a freelancer, I independently developed and launched the Sonwly App—a
        WeChat mini-app and React Native mobile app for ski enthusiasts—and led
        a team to build ProMatch, an AI-powered recruitment platform. I am
        passionate about using technology to solve real-world problems and
        always eager to learn new tools and frameworks.
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
            In addition to my academic and professional journey, I am actively
            involved in community and volunteer work. As a web developer and
            event organizer for the{" "}
            <span className="font-medium">Canadian Young Golf Association</span>
            , I collaborated with a team to develop the official
            website—boosting user experience and online engagement—and led the
            planning and execution of golf competitions, managing logistics and
            volunteers to ensure smooth events and strengthen my leadership
            skills.
          </p>

          <p className="mb-3">
            Outside of tech, I am passionate about skiing—which inspired me to
            create the Sonwly App for the ski community. I also enjoy golf,
            video games, and exploring emerging fields such as AI products,
            brain-computer interfaces, robotics, and Web3. I love keeping up
            with the latest trends in technology and am always curious about how
            these innovations can shape the future.
          </p>
          <p className="mb-3">
            I enjoy exploring new technologies and building products that
            connect people. Currently, I am independently developing a fitness
            social app that aims to bring together fitness enthusiasts and help
            them achieve their goals. If you’re interested in learning more or
            want to collaborate, feel free to reach out!
          </p>
          <p>
            I believe in continuous learning and giving back to the community.
            My experiences have taught me the value of teamwork, adaptability,
            and clear communication. Looking ahead, I am eager to further
            develop my skills in AI and cloud computing, and to contribute to
            projects that make a real impact.
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
