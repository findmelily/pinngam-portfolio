import { useRef, useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import folder from "@/assets/icon-element/folder.png";
import { MorphingText } from "@/components/animate-ui/primitives/texts/morphing";
import { TechIcons, srcMap } from "@/data/TechstackIconData";
import { MorphingSubHeader, HeaderText, StatusText } from "@/data/HeroData";
import Status from "@/components/sections/Hero/components/Status";
import ArrowDown from "@/components/sections/Hero/components/Arrows";

// import { StarsBackground } from "#components/animate-ui/components/backgrounds/stars";

interface HeroProps {
  loop: boolean;
  holdDelay: number;
}

export const Hero = ({ loop, holdDelay }: HeroProps) => {
  const constraintsRef = useRef<HTMLDivElement | null>(null);
  const folderRef = useRef<HTMLImageElement | null>(null);

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

      if (activeIcons.length === 1) {
        showToast("🎉 Congratulations!");
      } else {
        showToast(
          `Collected ${iconAlt} complete! ${activeIcons.length - 1} more to go!`,
        );
      }
    }
  };

  // ฟังก์ชันตอนกดคลิกที่ตัวโฟลเดอร์
  const handleFolderTap = () => {
    if (isAllCollected) {
      // รีเซ็ตให้ไอคอนกลับมาครบทุกตัว
      setActiveIcons(TechIcons.map((i) => i.key));
      showToast("Noooo it's all gone T-T! Let's start again!");
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
              initial={{ opacity: 0, y: -50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              className="absolute top-24 z-50 px-6 py-3 bg-white/50 backdrop-blur-lg border border-white/40 shadow-md rounded-full pointer-events-none"
            >
              <span className="font-semibold text-slate-700">{popup.text}</span>
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
                  className={`${icon.cls} absolute rounded-2xl cursor-grab active:cursor-grabbing p-2  bg-white/50 backdrop-blur-lg border border-black/10 shadow-sm`}
                  style={icon.style}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    y: icon.anim.y,
                    rotate: icon.anim.rotate,
                  }}
                  exit={{ scale: 0, opacity: 0, rotate: 180 }}
                  transition={{
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
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  drag
                  dragConstraints={constraintsRef}
                  dragElastic={0.2}
                  whileDrag={{ scale: 1.1, opacity: 0.8 }}
                  onDragEnd={(_event, info) =>
                    handleDragEnd(info, icon.key, icon.alt)
                  }
                />
              ),
          )}
        </AnimatePresence>

        <div className="text-center z-10 pointer-events-none">
          <Status
            text={StatusText.text}
            isAvailable={StatusText.isAvailable}
            isTilted={StatusText.isTilted}
          />
          <div className="drop-shadow-md pointer-events-auto">
            <div className="text-5xl md:text-6xl pb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-pink-300 tracking-tight ">
              {HeaderText}
            </div>
          </div>
          <MorphingText
            key={`${loop}-${holdDelay}`}
            className="text-4xl md:text-5xl font-semibold max-w-2xl text-slate-600 pointer-events-auto mx-auto"
            text={MorphingSubHeader}
            loop={loop}
            holdDelay={holdDelay}
          />
          <motion.img
            ref={folderRef}
            src={folder}
            alt="folder icon"
            className={`w-40 h-40 md:w-48 md:h-48 mt-10 mx-auto pointer-events-auto ${activeIcons.length === 0 ? "cursor-pointer" : "cursor-grab active:cursor-grabbing"}`}
            animate={
              activeIcons.length === 0
                ? {
                    scale: [1, 1.2, 1],
                    rotate: [0, -3, 3, 0],
                    filter: [
                      "drop-shadow(0px 0px 0px rgba(0,0,0,0))",
                      "drop-shadow(0px 0px 20px rgba(56,189,248,0.5))",
                      "drop-shadow(0px 0px 0px rgba(0,0,0,0))",
                    ],
                  }
                : {}
            }
            transition={
              activeIcons.length === 0
                ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
                : {}
            }
            whileHover={
              activeIcons.length !== 0
                ? {
                    scale: 1.05,
                    rotateX: 0.5,
                    rotateY: 0.5,
                    willChange: "transform",
                  }
                : { scale: 1.1 }
            }
            whileTap={{ scale: 0.95 }}
            onTap={handleFolderTap}
            drag={!isAllCollected}
            dragConstraints={constraintsRef}
            dragElastic={0.2}
            whileDrag={{ scale: 1.1, opacity: 0.8 }}
          />

          <ArrowDown />
        </div>
      </div>
    </section>
  );
};
