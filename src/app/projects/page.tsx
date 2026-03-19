"use client";

import Image from "next/image";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "My Portfolio",
    description:
      "A modern 3D interactive portfolio showcasing my projects, skills, and creative work with smooth animations.",
    link: "https://3-d-interactive-portfolio-ije5-mz0ceat32-viks-projects-607b5d86.vercel.app/",
    images: [
      "/assets/projects-screenshots/myportfolio/landing.png",
      "/assets/projects-screenshots/myportfolio/projects.png",
      "/assets/projects-screenshots/myportfolio/project.png",
    ],
  },
  {
    id: 2,
    name: "Smart Job Tracker",
    description:
      "A full-stack job tracking application with Kanban board, status updates, and progress tracking.",
    link: "https://job-tracker-application-eight.vercel.app/",
    images: [
      "/assets/projects-screenshots/smartjobtracker/01.png",
      "/assets/projects-screenshots/smartjobtracker/02.png",
      "/assets/projects-screenshots/smartjobtracker/03.png",
    ],
  },
  {
    id: 3,
    name: "Movie Blog Website",
    description:
      "A movie blog platform where users can explore latest movies, trending posts, and categorized content.",
    link: "https://moviechudura.blogspot.com/",
    images: [
      "/assets/projects-screenshots/movieblog/01.png",
      "/assets/projects-screenshots/movieblog/02.png",
      "/assets/projects-screenshots/movieblog/03.png",
    ],
  },
  {
    id: 4,
    name: "Figma to Code Design",
    description:
      "A modern UI/UX design project created in Figma demonstrating real-world design-to-code workflow.",
    link: "https://www.figma.com/",
    images: [
      "/assets/projects-screenshots/figma/01.png",
      "/assets/projects-screenshots/figma/02.png",
    ],
  },
];

function Page() {
  return (
    <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
      <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>

      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around">
        {PROJECTS.map((project) => (
          <li
            key={project.id}
            className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600 hover:scale-105 transition-all duration-300"
            style={{ backdropFilter: "blur(2px)" }}
          >
            {/* Image Slider */}
            <div className="h-[200px]">
              <Splide
                options={{
                  type: "loop",
                  interval: 3000,
                  autoplay: true,
                  speed: 1500,
                  perMove: 1,
                  rewind: true,
                  arrows: false,
                }}
              >
                {project.images.map((image, index) => (
                  <SplideSlide key={index}>
                    <Image
                      src={image}
                      alt={project.name}
                      className="w-[300px] h-[200px] rounded-md bg-zinc-900 object-cover"
                      width={300}
                      height={200}
                    />
                  </SplideSlide>
                ))}
              </Splide>
            </div>

            {/* Content */}
            <div className="p-4">
              <h2 className="text-xl font-semibold">{project.name}</h2>

              <p className="mt-2 text-xs text-zinc-400 line-clamp-4">
                {project.description}
              </p>

              {/* Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm text-blue-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page;