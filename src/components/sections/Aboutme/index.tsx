import pinngamImage from "@/assets/Pinngam.jpg";
import Resume from "@/assets/Resume.pdf";
import pinkHeart from "@/assets/icon-element/pinkHeart.png";
import { Button } from "@/components/animate-ui/components/buttons/button";

const title = "Title";
const subtitle = "Subtitle";
const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "CSS",
  "HTML",
  "Git",
  "TypeScript",
];

export const Aboutme = () => {
  return (
    <section
      id="about-me"
      className="bg-slate-50 rounded-2xl shadow-sm border border-slate-100 max-w-5xl mx-auto p-6 md:p-12 my-8"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="relative w-56 h-56 md:w-80 md:h-80 shrink-0">
          <img
            src={pinngamImage}
            alt="Profile"
            className="w-full h-full object-cover rounded-full shadow-md border-4 border-white"
          />

          <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full shadow-md border-2 border-white flex items-center justify-center">
            <img
              src={pinkHeart}
              alt="Pink Heart"
              className="w-6 h-6 md:w-8 md:h-8 object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col text-center md:text-left flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            {title}
          </h1>

          <div className="mt-6 space-y-6 text-slate-600 transition ease-in duration-500">
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {subtitle}
              </h3>
              <p className="leading-relaxed">{description}</p>

              <ul className="mt-4 backdrop-blur-sm  flex flex-wrap items-center justify-start gap-2 gap-y-3 [&>li]:border-2 [&>li]:border-[rgb(88,88,88)] [&>li]:px-3 [&>li]:py-1 [&>li]:rounded-[4px] [&>li]:transition-all [&>li]:duration-150 [&>li]:ease-in [&>li:hover]:scale-105 ">
                {skills.map((skill, index) => (
                  <li key={index} className="">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start mt-8 gap-4">
            <Button
              className="bg-slate-800 hover:bg-slate-900 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 shadow-sm flex items-center gap-2"
              aria-label="View Resume"
              onClick={() => window.open(Resume, "_blank")}
            >
              View Resume
            </Button>
            <Button
              className="bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 flex items-center gap-2"
              aria-label="View on GitHub"
            >
              GitHub Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
