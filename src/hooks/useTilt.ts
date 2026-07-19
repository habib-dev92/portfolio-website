"use client";

import { useRef, type MouseEvent } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export function useTilt(scale = 5) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouse = (e: MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    rotateX.set(((e.clientY - centerY) / rect.height) * -scale);
    rotateY.set(((e.clientX - centerX) / rect.width) * scale);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return { ref, style: { rotateX: springRotateX, rotateY: springRotateY }, handleMouse, handleLeave };
}
