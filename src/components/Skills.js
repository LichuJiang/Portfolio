import React from "react";
import { skills } from "../data";

function Skills() {

    return (
        <section id="skills">
          <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                Skills &amp; Technologies
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                Many skills do not overwhelm the body
              </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              {skills.map((skill) => (
                <div key={skill} className="p-2 sm:w-auto w-full">
                  <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                        <div className="text-white text-3xl">{skill.name}</div>
                        <div>
                            <img
                            className="skill object w-10"
                            alt="skill"
                            src={skill.icon}
                            />
                        </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}

export default Skills;