import { useRef, useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import folder from "@/assets/icon-element/folder.png";
import { MorphingText } from "@/components/animate-ui/primitives/texts/morphing";
import { TechIcons, srcMap } from "@/data/techstack-icon-data";
import { MorphingSubHeader, HeaderText, StatusText, toastMessages } from "@/data/hero-data";
import Status from "@/components/sections/hero/components/Status";
import ArrowDown from "@/components/sections/hero/components/Arrows";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroProps {
  loop: boolean;
  holdDelay: number;
}

export const Hero = ({ loop, holdDelay }: HeroProps) => {
  const constraintsRef = useRef<HTMLDivElement | null>(null);
  const folderRef = useRef<HTMLImageElement | null>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { language } = useLanguage();

  const headerText = HeaderText[language];
  const morphingSubHeader = MorphingSubHeader[language];
  const statusText = StatusText[language];

  // State จัดการ Popup ข้อความ
  const [popup, setPopup] = useState<{ show: boolean; text: string }>({
    show: false,
    text: "",
  });

  // State จัดการไอคอนที่ยังแสดงอยู่บนหน้าจอ (เริ่มต้นให้มีครบทุกตัว)
  const [activeIcons, setActiveIcons] = useState<string[]>(
    TechIcons.map((i) => i.key),
  );

  // เช็คว่าเก็บครบหมดหรือยัง
  const isAllCollected = activeIcons.length === 0;

  // ฟังก์ชันแสดง Popup
  const showToast = (message: string) => {
    setPopup({ show: true, text: message });
    setTimeout(() => {
      setPopup((prev) => ({ ...prev, show: false }));
    }, 3000);
  };

  const handleDragEnd = (info: PanInfo, iconKey: string, iconAlt: string) => {
    if (isMobile) return; // No game on mobile
    if (!folderRef.current) return;
    const folderRect = folderRef.current.getBoundingClientRect();
    const dropX = info.point.x;
    const dropY = info.point.y;

    // ขยายกล่องรับ (Hitbox) ของโฟลเดอร์นิดหน่อยเพื่อให้ลากลงง่ายขึ้น
    const padding = 20;
    const isInsideFolder =
      dropX >= folderRect.left - padding &&
      dropX <= folderRect.right + padding &&
      dropY >= folderRect.top - padding &&
      dropY <= folderRect.bottom + padding;

    if (isInsideFolder) {
      // เอาไอคอนนั้นออกจากหน้าจอ
      setActiveIcons((prev) => prev.filter((key) => key !== iconKey));

      const messages = toastMessages[language];
      if (activeIcons.length === 1) {
        showToast(messages.congrats);
      } else {
        showToast(messages.collected(iconAlt, activeIcons.length - 1));
      }
    }
  };

  // ฟังก์ชันตอนกดคลิกที่ตัวโฟลเดอร์
  const handleFolderTap = () => {
    if (isMobile) return;
    if (isAllCollected) {
      // รีเซ็ตให้ไอคอนกลับมาครบทุกตัว
      setActiveIcons(TechIcons.map((i) => i.key));
      showToast(toastMessages[language].reset);
    }
  };

  return (
    <section
      id="home"
      ref={constraintsRef}
      className="flex justify-center items-center bg-gradient-to-b from-slate-50 to-sky-200 border-white/10 h-screen overflow-hidden relative"
    >
      <div>
        <AnimatePresence>
          {popup.show && (
            <motion.div
              initial={{ opacity: 0, y: -50, x: "-50%", scale: 0.8 }}
              animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
              exit={{ opacity: 0, y: -20, x: "-50%", scale: 0.8 }}
              className="fixed top-24 left-1/2 z-[100] min-w-[300px] flex items-center gap-3 px-6 py-4 bg-white border-l-4 border-sky-500 shadow-xl rounded-lg pointer-events-none"
            >
              {popup.text.includes("🎉") ? (
                <CheckCircle2 className="text-green-500 w-6 h-6 shrink-0" />
              ) : (
                <AlertCircle className="text-sky-500 w-6 h-6 shrink-0" />
              )}
              <span className="font-medium text-slate-800 leading-tight">
                {popup.text}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {TechIcons.map(
            (icon) =>
              activeIcons.includes(icon.key) && (
                <motion.img
                  key={icon.key}
                  src={srcMap[icon.src]}
                  alt={icon.alt}
                  className={`${icon.cls} absolute rounded-2xl p-2 bg-white/50 backdrop-blur-lg border border-black/10 shadow-sm ${isMobile ? "pointer-events-none" : "cursor-grab active:cursor-grabbing"}`}
                  style={icon.style}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    y: icon.anim.y,
                    rotate: icon.anim.rotate,
                    ...(isMobile && {
                      x: [0, Math.random() * 20 - 10, 0],
                      transition: {
                        x: {
                          duration: 3 + Math.random() * 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                        y: {
                          duration: icon.dur,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: icon.delay,
                        },
                        rotate: {
                          duration: icon.dur,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: icon.delay,
                        },
                      },
                    }),
                  }}
                  exit={{ scale: 0, opacity: 0, rotate: 180 }}
                  transition={
                    !isMobile
                      ? {
                          y: {
                            duration: icon.dur,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: icon.delay,
                          },
                          rotate: {
                            duration: icon.dur,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: icon.delay,
                          },
                          scale: { type: "spring", bounce: 0.4, duration: 0.6 },
                        }
                      : { scale: { type: "spring", bounce: 0.4, duration: 0.6 } }
                  }
                  whileHover={!isMobile ? { scale: 1.1 } : {}}
                  whileTap={!isMobile ? { scale: 0.95 } : {}}
                  drag={!isMobile}
                  dragConstraints={constraintsRef}
                  dragElastic={0.2}
                  whileDrag={!isMobile ? { scale: 1.1, opacity: 0.8 } : {}}
                  onDragEnd={(_event, info) =>
                    handleDragEnd(info, icon.key, icon.alt)
                  }
                />
              ),
          )}
        </AnimatePresence>

        <div className="text-center z-10 pointer-events-none">
          <Status
            text={statusText.text}
            isAvailable={statusText.isAvailable}
            isTilted={statusText.isTilted}
          />
          <div className="drop-shadow-md pointer-events-auto">
            <div className="text-5xl md:text-6xl pb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-pink-300 tracking-tight ">
              {headerText}
            </div>
          </div>
          <MorphingText
            key={`${loop}-${holdDelay}-${language}`}
            className="text-4xl md:text-5xl font-semibold max-w-2xl text-slate-600 pointer-events-auto mx-auto"
            text={morphingSubHeader}
            loop={loop}
            holdDelay={holdDelay}
          />
          <motion.img
            ref={folderRef}
            src={folder}
            alt="folder icon"
            className={`w-40 h-40 md:w-48 md:h-48 mt-10 mx-auto pointer-events-auto ${isMobile ? "pointer-events-none" : activeIcons.length === 0 ? "cursor-pointer" : "cursor-grab active:cursor-grabbing"}`}
            animate={
              !isMobile && activeIcons.length === 0
                ? {
                    scale: [1, 1.2, 1],
                    rotate: [0, -3, 3, 0],
                    filter: [
                      "drop-shadow(0px 0px 0px rgba(0,0,0,0))",
                      "drop-shadow(0px 0px 20px rgba(56,189,248,0.5))",
                      "drop-shadow(0px 0px 0px rgba(0,0,0,0))",
                    ],
                  }
                : isMobile
                  ? {
                      y: [0, -10, 0],
                    }
                  : {}
            }
            transition={
              !isMobile && activeIcons.length === 0
                ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
                : isMobile
                  ? { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  : {}
            }
            whileHover={
              !isMobile && activeIcons.length !== 0
                ? {
                    scale: 1.05,
                    rotateX: 0.5,
                    rotateY: 0.5,
                    willChange: "transform",
                  }
                : !isMobile
                  ? { scale: 1.1 }
                  : {}
            }
            whileTap={!isMobile ? { scale: 0.95 } : {}}
            onTap={handleFolderTap}
            drag={!isMobile && !isAllCollected}
            dragConstraints={constraintsRef}
            dragElastic={0.2}
            whileDrag={!isMobile ? { scale: 1.1, opacity: 0.8 } : {}}
          />

          <ArrowDown />
        </div>
      </div>
    </section>
  );
};
