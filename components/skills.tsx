"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const [showAll, setShowAll] = useState(false);
  const initialSkillCount = 35;

  const visibleSkills = showAll
    ? skillsData
    : skillsData.slice(0, initialSkillCount);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {visibleSkills.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>

      {skillsData.length > initialSkillCount && (
        <motion.button
          className="mt-8 flex items-center gap-2 mx-auto bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-white/20 transition"
          onClick={() => setShowAll(!showAll)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.05 * initialSkillCount }}
        >
          <span>{showAll ? "Show Less" : "View More"}</span>
          {showAll ? <FaChevronUp /> : <FaChevronDown />}
        </motion.button>
      )}
    </section>
  );
}
