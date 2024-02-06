"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./styles.module.scss";
import gsap from "gsap";

interface Project {
  title: string;
  color: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Be Future Ready",
    color: "#F06318",
    link: "/future", // Adjust the link accordingly
  },
  {
    title: "Ghana Youth Leadership Academy",
    color: "#DCF018",
    link: "/gyla",
  },
  {
    title: "Empowering Women In Politics",
    color: "#18f06b",
    link: "/ewip",
  },
  {
    title: "Young People",
    color: "#18F0E8",
    link: "/youngpeople",
  },
  {
    title: "Parenting",
    color: "#8C0CF0",
    link: "/parents",
  },
  {
    title: "Educators",
    color: "#F0183C",
    link: "/educators",
  },
  {
    title: "Corporate Executives",
    color: "#F0BA18",
    link: "/corporate",
  },
];

export default function Home() {
  const router = useRouter();

  const manageMouseEnter = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    gsap.to(e.currentTarget, {
      top: "-0.5vw",
      backgroundColor: projects[index].color,
      duration: 0.3,
    });
  };

  const manageMouseLeave = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    gsap.to(e.currentTarget, {
      top: "0",
      backgroundColor: "white",
      duration: 0.3,
      delay: 0.1,
    });
  };

  const handleProjectClick = (project: Project) => {
    router.push(project.link);
  };

  return (
    <div className={`${styles.container} font-font`}>
      <div className={styles.projectContainer}>
        <h1 className="text-[3vw] pl-3 font-light">Our Programs</h1>
        <hr className="h-1 "/>
        {projects.map((project, index) => (
          <div
            key={index}
            onMouseEnter={(e) => manageMouseEnter(e, index)}
            onMouseLeave={(e) => manageMouseLeave(e, index)}
            onClick={() => handleProjectClick(project)}
          >
            <p className="md:text-[2vw] text-[5vw] ">{project.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
