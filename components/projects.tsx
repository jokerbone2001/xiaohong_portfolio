"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [expanded, setExpanded] = useState(false);

  // 展示前三个项目，展开后展示全部
  const visibleProjects = expanded ? projectsData : projectsData.slice(0, 3);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {visibleProjects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      {projectsData.length > 3 && (
        <button
          className="mt-4 text-blue-600 hover:underline mx-auto block"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "Show less" : "View more"}
        </button>
      )}
    </section>
  );
}
