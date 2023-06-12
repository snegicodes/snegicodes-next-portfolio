import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Make Me Fit",
    description:
      "MakeMeFit is a Gym Assistance MERN stack app which lets you add and store your workouts along with the amount of weight and number of reps.",
    image: "/2.png",
    github: "https://github.com/snegicodes/MakeMeFit-frontend",
    link: "https://snegigym.netlify.app/",
  },
  {
    name: "KingKart Shopping Cart",
    description:
      "A minimal shopping cart implementation in React using Faker Js for dummy data and Context API + useReducer Hook for State Management. ",
    image: "/10.png",
    github: "https://github.com/snegicodes/KingKart-App",
    link: "https://snegicodeskingkart.netlify.app/",
  },
  {
    name: "CodeIT QR",
    description:
      "A simple web app that helps you generate and download QR code to your given URLs. ",
    image: "/1.png",
    github: "https://github.com/snegicodes/CodeIT-QRGenerator",
    link: "https://snegiqr.netlify.app/",
  },
  {
    name: "Vanilla Portfolio",
    description:
      "This project consists of a custom component library and a portfolio made out of that components of that library.",
    image: "/5.png",
    github: "https://github.com/snegicodes/Snegicodes-Portfolio",
    link: "https://snegicodes.netlify.app/",
  },
  {
    name: "Triangle Trivia",
    description:
      "A simple web app made using HTML, CSS and JS which contains different activities to test your knowledge about triangles. ",
    image: "/3.png",
    github: "https://github.com/snegicodes/mark12-FunWithTriangles",
    link: "https://snegitriangle.netlify.app/",
  },
  {
    name: "Movies For You",
    description:
      "A beautiful web app made using ReactJs that recommends you with movies according to the category that you choose.  ",
    image: "/4.png",
    github: "https://github.com/snegicodes/mark09-MovieRecommendor",
    link: "https://snegimovie.netlify.app/",
  },
  {
    name: "Cash Register Manager",
    description:
      "A web app made using HTML, CSS and JS which lets you calculate the number of different denominations you need to give for a particular amount of change.",
    image: "/6.png",
    github: "https://github.com/snegicodes/mark10-CashRegisterManager",
    link: "https://snegicash.netlify.app/",
  },
  {
    name: "Card Flip Game",
    description:
      "A simple and beautiful game made using ReactJS to test out your memory by flipping and matching the pair of cards.",
    image: "/9.png",
    github: "https://github.com/Sarthaknegigit/flip-game",
    link: "https://steady-begonia-483d18.netlify.app/",
  },
  {
    name: "Vanilla Weather App",
    description:
      "A minimalistic Weather app made using VanillaJS to illustrate the use of Asynchronous Javascript. ",
    image: "/7.png",
    github: "https://github.com/Sarthaknegigit/VanillaWeatherApp",
    link: "https://sarthaknegigit.github.io/VanillaWeatherApp/",
  },
  {
    name: "Nike Store Page",
    description: "A simple mock landing page for Nike Shoes E-commerce",
    image: "/8.png",
    github: "https://github.com/Sarthaknegigit/NikeStore",
    link: "https://sarthaknegigit.github.io/NikeStore/",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto mt-4 mb-10 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
