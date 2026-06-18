import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { language } = useLanguage();
  return (
    <div className="w-full h-16  flex items-center justify-center">
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Pinngam Sombutsri. {language === 'en' ? "All rights reserved." : "สงวนลิขสิทธิ์ทั้งหมด"}
      </p>
    </div>
  );
};
