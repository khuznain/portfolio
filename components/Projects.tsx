import React from "react";
//
import { projectsData } from "@/constant/data";
import SectionHeading from "./SectionHeading";
import Project from "./Project";

export default function Projects() {
  return (
    <section className="scroll-mt-28 mb-28" id="projects">
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
