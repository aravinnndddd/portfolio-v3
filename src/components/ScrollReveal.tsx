import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  parallaxSpeed?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  parallaxSpeed = -0.06,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "end 0.05"],
  });

  // Fade-in when entering bottom, fade-out slightly when exiting top
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [0, 1, 1, 0.85]);

  // Parallax Y offset across full scroll progress
  const rawY = useTransform(scrollYProgress, [0, 1], [50, -50 * Math.abs(parallaxSpeed) * 10]);
  const y = useSpring(rawY, { stiffness: 100, damping: 22, mass: 0.2 });

  // Subtle scale interaction
  const scale = useTransform(scrollYProgress, [0, 0.25, 1], [0.97, 1, 0.99]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, scale }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}
