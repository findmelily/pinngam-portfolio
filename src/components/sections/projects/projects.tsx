import { useState, useEffect } from "react";
import { projectsData as projectsDataAll } from "@/data/projects-data";
import { FolderCode, Calendar, Code, ExternalLink, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";

export const Projects = () => {
  const { language } = useLanguage();
  const projectsData = projectsDataAll[language];
  const [selectedProject, setSelectedProject] = useState<typeof projectsData.items[0] | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  // Reset selected project when language changes to avoid state mismatch
  useEffect(() => {
    setSelectedProject(null);
  }, [language]);

  return (
    <section id="projects" className="container mx-auto px-6 py-12 md:py-20">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col text-center md:text-left"
        >
          <div className="inline-flex items-center justify-center md:justify-start gap-4 bg-white/90 backdrop-blur-md border border-slate-100 shadow-sm px-6 py-3 md:px-8 md:py-4 rounded-2xl w-fit mx-auto md:mx-0">
            <FolderCode className="w-10 h-10 md:w-12 md:h-12 text-sky-600" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-pink-300">
              {projectsData.title}
            </h2>
          </div>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full mt-4"
        >
          <CarouselContent className="-ml-4">
            {projectsData.items.map((project, index) => (
              <CarouselItem key={index} className="flex basis-full md:basis-full lg:basis-1/2">
                <div className="p-2 h-full w-full flex">
                  <motion.div
                    onClick={() => setSelectedProject(project)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="group cursor-pointer bg-white w-full rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-all duration-500 flex flex-col overflow-hidden"
                  >
              {project.image && (
                <div className="relative w-full h-48 md:h-56 shrink-0 overflow-hidden bg-slate-100">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-500" />
                </div>
              )}
              
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex flex-col mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight line-clamp-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-x-4 gap-y-2 text-sm text-slate-500 mt-3">
                    <span className="font-semibold text-sky-600 flex items-center gap-2">
                      <Code className="w-4 h-4 shrink-0" />
                      {project.role[0]} {project.role.length > 1 && `+${project.role.length - 1}`}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                      <Calendar className="w-4 h-4" />
                      {project.period.split("-")[0].trim()}
                    </span>
                  </div>
                </div>

                <div className="text-slate-600 leading-relaxed border-t border-slate-100 pt-5 flex-grow">
                  <p className="text-base line-clamp-3">
                    {project.description[0]}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100/60 flex items-center justify-between">
                  <ul className="flex items-center gap-2 [&>li]:bg-slate-50 [&>li]:border [&>li]:border-slate-200 [&>li]:text-slate-600 [&>li]:px-2.5 [&>li]:py-0.5 [&>li]:rounded-full text-xs font-medium overflow-hidden whitespace-nowrap">
                    {project.skills.slice(0, 3).map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                    {project.skills.length > 3 && (
                      <li>+{project.skills.length - 3}</li>
                    )}
                  </ul>
                  
                  <div className="text-sky-600 font-semibold flex items-center gap-1.5 text-sm group-hover:translate-x-1 transition-transform whitespace-nowrap shrink-0 ml-2">
                    {language === 'en' ? "View Details" : "ดูรายละเอียด"} <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
                </div>
              </CarouselItem>
            ))}

            {/* Coming Soon Card */}
            <CarouselItem className="flex basis-full md:basis-full lg:basis-1/2">
              <div className="p-2 h-full w-full flex">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="group w-full bg-slate-50/50 rounded-2xl shadow-sm border-2 border-dashed border-slate-200 hover:border-sky-300 hover:shadow-md transition-all duration-500 flex flex-col items-center justify-center text-center p-8 min-h-[400px]"
                >
                  <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-500">
                    <FolderCode className="w-10 h-10 text-sky-400 opacity-80" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-700 mb-3">
                    {language === 'en' ? "New Project in Progress" : "โปรเจกต์ใหม่กำลังพัฒนา"}
                  </h3>
                  <p className="text-slate-500 max-w-sm">
                    {language === 'en' 
                      ? "I'm currently working on something exciting! Stay tuned for updates on my latest endeavors."
                      : "ฉันกำลังพัฒนาผลงานใหม่ที่น่าตื่นเต้นอยู่! โปรดติดตามความคืบหน้าเร็วๆ นี้"}
                  </p>
                  <div className="mt-8 px-5 py-2 rounded-full bg-sky-50 text-sky-600 text-sm font-semibold tracking-wide uppercase">
                    {language === 'en' ? "Coming Soon" : "เร็วๆ นี้"}
                  </div>
                </motion.div>
              </div>
            </CarouselItem>

          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
          <CarouselDots />
        </Carousel>
      </div>
      
      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-4xl max-h-full rounded-2xl md:rounded-3xl shadow-2xl flex flex-col relative my-auto"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all shadow-sm"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              
              <div className="overflow-y-auto flex flex-col rounded-2xl md:rounded-3xl">
                {selectedProject.image && (
                  <div className="w-full h-64 md:h-[400px] shrink-0 bg-slate-100 relative">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  </div>
                )}
                
                <div className="p-6 sm:p-8 md:p-12 flex flex-col flex-grow bg-white">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                    {selectedProject.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-3 text-base text-slate-600 mb-8 pb-8 border-b border-slate-100">
                    <span className="font-semibold text-sky-600 flex items-center gap-2 bg-sky-50 px-4 py-2 rounded-full">
                      <Code className="w-5 h-5 shrink-0" />
                      {selectedProject.role.join(", ")}
                    </span>
                    <span className="inline-flex items-center gap-2 text-slate-600 font-medium bg-slate-100 px-4 py-2 rounded-full">
                      <Calendar className="w-5 h-5 text-sky-600" />
                      {selectedProject.period}
                    </span>
                  </div>

                  <div className="text-slate-600 leading-relaxed space-y-6 mb-10">
                    {selectedProject.description.map((desc: string, idx: number) => (
                      <p key={idx} className="text-lg md:text-xl font-medium text-slate-700">
                        {desc}
                      </p>
                    ))}
                  </div>

                  <div className="mt-auto pt-8 border-t border-slate-100 flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                        {language === 'en' ? "Technologies & Tools" : "เทคโนโลยี & เครื่องมือ"}
                      </h4>
                      <ul className="flex flex-wrap items-center gap-2 [&>li]:bg-slate-50 [&>li]:border [&>li]:border-slate-200 [&>li]:text-slate-700 [&>li]:px-4 [&>li]:py-2 [&>li]:rounded-full text-sm font-semibold">
                        {selectedProject.skills.map((skill: string, i: number) => (
                          <li key={i}>{skill}</li>
                        ))}
                      </ul>
                    </div>

                    {(selectedProject.githubUrl || selectedProject.liveUrl) && (
                      <div className="flex flex-wrap items-center gap-4 shrink-0">
                        {selectedProject.liveUrl && (
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5"
                          >
                            <ExternalLink className="w-5 h-5" />
                            {language === 'en' ? "Visit Live Site" : "เข้าชมเว็บจริง"}
                          </a>
                        )}
                        {selectedProject.githubUrl && (
                          <a
                            href={selectedProject.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border-2 border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-sm hover:-translate-y-0.5"
                          >
                            {language === 'en' ? "Source Code" : "ซอร์สโค้ด"}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
