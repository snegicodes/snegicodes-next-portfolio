import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "SCSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Angular" },
  { skill: "Tailwind CSS" },
  { skill: "Material UI" },
  { skill: "Bootstrap CSS" },
  { skill: "Node JS" },
  { skill: "Express JS" },
  { skill: "MongoDB" },
  { skill: "MySQL" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "GitLab" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Sarthak and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-taught"}</span> and
              <span className="font-bold">{" driven"}</span> Software Engineer
              based in Greater Noida, India.
            </p>
            <br />
            <p>
              I am a final year undergrad pursuing{" "}
              <span className="font-bold">B.Tech</span> in{" "}
              <span className="font-bold">Computer Science</span> from AKTU
              University and I have worked in a{" "}
              <span className="font-bold">B2B SaaS Startup</span> based in USA,{" "}
              <span className="font-bold  text-teal-500">JobTwine</span> as a{" "}
              <span className="font-bold  text-teal-500">
                Software Developer Intern.
              </span>
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling to making YouTube videos,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🚀
            </p>
          </div>
          <div className="text-center justify-center flex flex-col md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row  z-10">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/neogpic.png"
              alt=""
              width={170}
              height={170}
              className="hidden md:block md:relative md:bottom-4 md:z-0 md:mt-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
