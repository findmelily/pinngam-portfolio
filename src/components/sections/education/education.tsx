import { educationData as educationDataAll } from "@/data/education-data";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const Education = () => {
  const { language } = useLanguage();
  const educationData = educationDataAll[language];

  return (
    <section id="education" className="container mx-auto px-6 py-12 md:py-20">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col text-center md:text-left"
        >
          <div className="inline-flex items-center justify-center md:justify-start gap-4 bg-white/90 backdrop-blur-md border border-slate-100 shadow-sm px-6 py-3 md:px-8 md:py-4 rounded-2xl w-fit mx-auto md:mx-0">
            <GraduationCap className="w-10 h-10 md:w-12 md:h-12 text-sky-600" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-pink-300">
              {educationData.title}
            </h2>
          </div>
        </motion.div>

        <div className="relative w-full space-y-8">
          {educationData.items.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              style={{ willChange: "transform" }}
              className="group relative flex flex-col gap-6 bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-shadow duration-500"
            >
              {/* Header: Logo, University, Faculty + Period */}
              <div className="flex flex-col sm:flex-row items-start gap-5">
                {edu.logo && (
                  <div className="w-16 h-16 bg-slate-50 p-2.5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-center shrink-0">
                    <img
                      src={edu.logo}
                      alt={edu.university}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                    {edu.university}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-base text-slate-500 mt-2">
                    <span className="font-medium">{edu.faculty}</span>
                    <span className="hidden sm:inline text-slate-300">•</span>
                    <span className="inline-flex items-center gap-1.5 text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full text-sm">
                      <Calendar className="w-4 h-4 text-sky-600" />
                      {edu.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Degree + Honors Badge */}
              <div className="flex flex-wrap items-center gap-4 border-t border-slate-100 pt-5">
                <span className="text-xl font-semibold text-slate-800">
                  {edu.degree}
                </span>
                {edu.honors && (
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-bold bg-pink-50 text-pink-600 border border-pink-200/80 shadow-sm">
                    <Award className="w-4 h-4 text-pink-500 animate-pulse" />
                    {edu.honors}
                  </span>
                )}
              </div>

              {/* GPAX and TETET Stats */}
              <div className="grid grid-cols-2 gap-4 max-w-md">
                <div className="bg-sky-50/50 p-4 rounded-xl border border-sky-100 shadow-sm">
                  <span className="block text-xs md:text-sm text-sky-600 font-bold uppercase tracking-wider">
                    GPAX
                  </span>
                  <span className="block text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">
                    {edu.gpax}
                  </span>
                </div>
                <div className="bg-sky-50/50 p-4 rounded-xl border border-sky-100 shadow-sm">
                  <span className="block text-xs md:text-sm text-sky-600 font-bold uppercase tracking-wider">
                    {language === "en" ? "TETET Score" : "คะแนนสอบ TETET"}
                  </span>
                  <span className="block text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">
                    {edu.tetetScore}
                  </span>
                </div>
              </div>

              {/* Key Coursework */}
              <div className="mt-2">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
                  {language === "en" ? "Key Coursework" : "รายวิชาที่สำคัญ"}
                </h4>
                <ul className="flex flex-wrap items-center justify-start gap-2.5 [&>li]:bg-slate-50 [&>li]:border [&>li]:border-slate-200 [&>li]:text-slate-700 [&>li]:px-4 [&>li]:py-1.5 [&>li]:rounded-full [&>li]:transition-all [&>li]:duration-300 [&>li]:ease-in [&>li:hover]:bg-sky-50 [&>li:hover]:text-sky-700 [&>li:hover]:border-sky-200 [&>li:hover]:scale-105 text-sm md:text-base font-medium">
                  {edu.coursework.map((course, i) => (
                    <li key={i}>{course}</li>
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