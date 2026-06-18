import { motion } from "framer-motion";
import { activities } from "@/data/activities-data";
import Card from "@/components/ui/card";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";

export const Activities = () => {
  const { language } = useLanguage();
  const items = activities[language];
  const sectionTitle = language === 'en' ? "My Activities" : "กิจกรรมของฉัน";

  return (
    <section
      className="flex justify-center min-h-screen items-center bg-gradient-to-b from-sky-200 to-white py-24"
      id="activities"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-12 md:px-24"
      >
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center justify-center gap-4 bg-white/90 backdrop-blur-md border border-slate-100 shadow-sm px-6 py-3 md:px-8 md:py-4 rounded-2xl w-fit mx-auto">
            <Star className="w-10 h-10 md:w-12 md:h-12 text-sky-600" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-pink-300">
              {sectionTitle}
            </h2>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto mt-12"
        >
          <CarouselContent className="-ml-4">
            {items.map((item, index) => (
              <CarouselItem key={index} className="flex">
                <div className="p-1 h-full w-full flex justify-center">
                  <Card
                    imageSrc={item.image}
                    altText={item.alt}
                    title={item.title}
                    description={item.description}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
          <CarouselDots />
        </Carousel>
      </motion.div>
    </section>
  );
};


