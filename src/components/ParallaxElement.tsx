import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

interface ParallaxElementProps {
  children: ReactNode;
  speed?: number; // e.g. -0.15 for upward float as user scrolls down, +0.15 for downward float
  className?: string;
  smooth?: boolean;
}

export default function ParallaxElement({
  children,
  speed = -0.1,
  className = "",
  smooth = true,
}: ParallaxElementProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Calculate pixel translation based on speed multiplier
  const rawY = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  
  // Optional physics spring smoothing for buttery scroll feel
  const springY = useSpring(rawY, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  const y = smooth ? springY : rawY;

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}
