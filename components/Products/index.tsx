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
    link: "/be-future-ready", // Adjust the link accordingly
  },
  {
    title: "Ghana Youth Leadership Academy",
    color: "#DCF018",
    link: "/ghana-youth-leadership-academy",
  },
  {
    title: "Empowering Women In Politics",
    color: "#18f06b",
    link: "/ghana-youth-leadership-academy",
  },
  {
    title: "Young People",
    color: "#18F0E8",
    link: "/young-people",
  },
  {
    title: "Parenting",
    color: "#8C0CF0",
    link: "/parenting",
  },
  {
    title: "Educators",
    color: "#F0183C",
    link: "/educators",
  },
  {
    title: "Corp. Executive",
    color: "#F0BA18",
    link: "/corp-executive",
  },
];

export default function Home() {
  const router = useRouter();

  const manageMouseEnter = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    gsap.to(e.currentTarget, {
      top: "-2vw",
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
        {projects.map((project, index) => (
          <div
            key={index}
            onMouseEnter={(e) => manageMouseEnter(e, index)}
            onMouseLeave={(e) => manageMouseLeave(e, index)}
            onClick={() => handleProjectClick(project)}
          >
            <p className="md:text-[4vw] text-[8vw]">{project.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
