import { useRef, useState, useCallback } from "react";
import type { PanInfo } from "framer-motion";
import { TechIcons } from "@/data/techstack-icon-data";

export function useDragCollect() {
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
  const showToast = useCallback((message: string) => {
    setPopup({ show: true, text: message });
    setTimeout(() => {
      setPopup((prev) => ({ ...prev, show: false }));
    }, 3000);
  }, []);

  const handleDragEnd = useCallback(
    (info: PanInfo, iconKey: string, iconAlt: string) => {
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
        // ใช้ functional update เพื่อให้ได้ค่า activeIcons ล่าสุดเสมอ
        setActiveIcons((prev) => {
          const next = prev.filter((key) => key !== iconKey);
          if (next.length === 0) {
            showToast("🎉 Congratulations!");
          } else {
            showToast(
              `Collected ${iconAlt} complete! ${next.length} more to go!`,
            );
          }
          return next;
        });
      }
    },
    [showToast],
  );

  // ฟังก์ชันตอนกดคลิกที่ตัวโฟลเดอร์
  const handleFolderTap = useCallback(() => {
    if (isAllCollected) {
      // รีเซ็ตให้ไอคอนกลับมาครบทุกตัว
      setActiveIcons(TechIcons.map((i) => i.key));
      showToast("Noooo it's all gone T-T! Let's start again!");
    }
  }, [isAllCollected, showToast]);

  return {
    popup,
    activeIcons,
    isAllCollected,
    handleDragEnd,
    handleFolderTap,
    folderRef,
    constraintsRef,
  };
}
