"use client";

import React from "react";
//
import { projectsData } from "@/constant/data";
import SectionHeading from "./SectionHeading";
import Project from "./Project";
import { useSectionInView } from "@/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} className="scroll-mt-28 mb-28" id="projects">
      <SectionHeading>My Projects</SectionHeading>
      {projectsData.map((project, index) => {
        return (
          <React.Fragment>
            <Project key={index} {...project} />
          </React.Fragment>
        );
      })}
    </section>
  );
}
