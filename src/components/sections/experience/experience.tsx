import { experienceData as experienceDataAll } from "@/data/experience-data";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Experience = () => {
  const { language } = useLanguage();
  const experienceData = experienceDataAll[language];

  return (
    <section id="experience" className="container mx-auto px-6 py-12 md:py-20">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col text-center md:text-left"
        >
          <div className="inline-flex items-center justify-center md:justify-start gap-4 bg-white/90 backdrop-blur-md border border-slate-100 shadow-sm px-6 py-3 md:px-8 md:py-4 rounded-2xl w-fit mx-auto md:mx-0">
            <Briefcase className="w-10 h-10 md:w-12 md:h-12 text-sky-600" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-pink-300">
              {experienceData.title}
            </h2>
          </div>
        </motion.div>

        <div className="space-y-8">
          {experienceData.workHistory.map((work, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              style={{ willChange: "transform" }}
              className="group relative flex flex-col bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-shadow duration-500"
            >
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                  {work.role}
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-base text-slate-500 mt-2 mb-5">
                  <span className="text-lg font-semibold text-sky-600">{work.company}</span>
                  <span className="hidden sm:inline text-slate-300">•</span>
                  <span className="inline-flex items-center gap-1.5 text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full text-sm">
                    <Calendar className="w-4 h-4 text-sky-600" />
                    {work.period}
                  </span>
                </div>
                
                <ul className="text-slate-600 leading-relaxed mb-6 space-y-3 text-base md:text-lg
                [&>li]:relative [&>li]:pl-9 [&>li]:before:content-[''] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-1/2 [&>li]:before:-translate-y-1/2 [&>li]:before:w-3 [&>li]:before:h-3 [&>li]:before:bg-sky-600 [&>li]:before:rounded-full
                ">
                  {work.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
                
                <ul className="flex flex-wrap items-center justify-start gap-2.5 [&>li]:bg-slate-50 [&>li]:border [&>li]:border-slate-200 [&>li]:text-slate-700 [&>li]:px-4 [&>li]:py-1.5 [&>li]:rounded-full [&>li]:transition-all [&>li]:duration-300 [&>li]:ease-in [&>li:hover]:bg-sky-50 [&>li:hover]:text-sky-700 [&>li:hover]:border-sky-200 [&>li:hover]:scale-105 text-sm md:text-base font-medium">
                  {work.skills.map((skill, i) => (
                    <li key={i}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
