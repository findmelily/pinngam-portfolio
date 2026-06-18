import { Mail, MessageSquare, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/animate-ui/components/buttons/button";
import { contactData as contactDataAll } from "@/data/contact-data";
import { useLanguage } from "@/contexts/LanguageContext";

export const Contact = () => {
  const { language } = useLanguage();
  const contactData = contactDataAll[language];

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-pink-300 tracking-tight mb-6">
          {contactData.title}
        </h2>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          {contactData.description}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            className="bg-slate-800 hover:bg-slate-900 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 shadow-sm flex items-center gap-2 h-auto"
            onClick={() => window.open(`mailto:${contactData.email}`)}
          >
            <Mail className="w-5 h-5" />
            {language === 'en' ? "Email Me" : "ส่งอีเมลหาฉัน"}
          </Button>

          <Button
            className="bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 flex items-center gap-2 h-auto"
            onClick={() => window.open(contactData.github, "_blank")}
          >
            <Globe className="w-5 h-5" />
            GitHub
          </Button>

          <Button
            className="bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 flex items-center gap-2 h-auto"
            onClick={() => window.open(contactData.linkedin, "_blank")}
          >
            <MessageSquare className="w-5 h-5" />
            LinkedIn
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

