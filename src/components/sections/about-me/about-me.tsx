import pinkHeart from "@/assets/icon-element/pinkHeart.png";
import githubLogo from "@/assets/app-logo/github.png";
import { Button } from "@/components/animate-ui/components/buttons/button";
import { aboutmeData as aboutmeDataAll } from "@/data/about-me-data";
import type { SkillLevel } from "@/types";
import { User, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

import { motion } from "framer-motion";

const levelConfig: Record<SkillLevel, { label: { en: string; th: string }; dot: string; badge: string }> = {
  beginner: {
    label: { en: "Beginner", th: "เริ่มต้น" },
    dot: "bg-slate-400",
    badge: "bg-slate-100 text-slate-500 border border-slate-200",
  },
  intermediate: {
    label: { en: "Intermediate", th: "ปานกลาง" },
    dot: "bg-sky-500",
    badge: "bg-sky-50 text-sky-600 border border-sky-200",
  },
  advanced: {
    label: { en: "Advanced", th: "ชำนาญ" },
    dot: "bg-pink-400",
    badge: "bg-pink-50 text-pink-600 border border-pink-200",
  },
};

export const AboutMe = () => {
  const { language } = useLanguage();
  const aboutmeData = aboutmeDataAll[language];

  return (
    <section id="about-me" className="container mx-auto px-6 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-8 lg:gap-16"
      >
        {/* Left Sidebar (Profile Info) */}
        <div className="w-full md:w-1/3 lg:w-[296px] shrink-0 flex flex-col items-center md:items-start">
          {/* Avatar */}
          <div className="relative w-64 h-64 md:w-full md:h-auto md:aspect-square mb-6">
            <img
              src={aboutmeData.profileImage}
              alt="Profile"
              className="w-full h-full object-cover rounded-full shadow-md border-2 border-slate-200"
            />
            <div className="absolute bottom-[8%] right-[8%] w-12 h-12 bg-white rounded-full shadow-md border border-slate-200 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
              <img
                src={pinkHeart}
                alt="Status"
                className="w-6 h-6 object-contain"
              />
            </div>
          </div>

          {/* Names */}
          <div className="w-full text-center md:text-left mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              {aboutmeData.title}
            </h1>
            <h3 className="text-xl font-medium text-slate-500 mt-1">
              {aboutmeData.subtitle}
            </h3>
          </div>

          {/* Action Buttons */}
          <div className="w-full flex flex-col gap-3 mb-6">
            <Button
              className="w-full bg-slate-800 hover:bg-slate-900 text-white font-semibold py-2.5 rounded-lg transition-all shadow-sm"
              onClick={() => window.open(aboutmeData.resumePath, "_blank")}
            >
              {language === "en"
                ? "Download Resume/CV"
                : " ดาวน์โหลด Resume/CV"}
            </Button>
            <Button
              className="w-full bg-slate-50 border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold py-2.5 rounded-lg transition-all"
              onClick={() =>
                window.open("https://github.com/findmelily", "_blank")
              }
            >
              <img
                src={githubLogo}
                alt="GitHub"
                className="w-5 h-5 inline-block -mt-1"
              />
              Github
            </Button>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 flex flex-col gap-8">
          {/* README style block */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-slate-500" />
              <span className="text-sm font-semibold text-slate-700 font-mono">
                Pinngam/README.md
              </span>
            </div>
            <div className="p-6 md:p-8">
              <div className="inline-flex items-center gap-4 bg-white/90 backdrop-blur-md border border-slate-100 shadow-sm px-6 py-2.5 rounded-2xl w-fit mb-6">
                <User className="w-6 h-6 text-sky-600" />
                <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-pink-300">
                  {language === "en" ? "About Me" : "เกี่ยวกับฉัน"}
                </h2>
              </div>
              <p className="text-slate-700 leading-relaxed text-lg">
                {aboutmeData.description}
              </p>
            </div>
          </div>

          {/* Pinned / Skills block */}
          <div>
            <h3 className="text-base font-semibold text-slate-800 mb-4 flex items-center gap-2">
              {language === "en" ? "Pinned Skills" : "ทักษะสำคัญ"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {aboutmeData.skills.map((skill, index) => {
                const cfg = levelConfig[skill.level];
                return (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col gap-2 shadow-sm hover:border-slate-300 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${cfg.dot}`} />
                        <span className="font-semibold text-slate-800 text-sm">
                          {skill.name}
                        </span>
                      </div>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full shrink-0 ${cfg.badge}`}>
                        {cfg.label[language]}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
