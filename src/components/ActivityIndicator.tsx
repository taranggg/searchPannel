import { motion } from "framer-motion";

type Props = {
  size?: number; // diameter in px
  thickness?: number; // ring thickness in px
  color?: string; // main arc color
  secondaryColor?: string; // secondary arc color
  duration?: number; // seconds per cycle
  className?: string;
};

// Circular activity indicator with two arcs:
// - Primary arc alternates sweep 90deg <-> 180deg while rotating clockwise
// - Secondary arc is subtler, counter-rotates with smaller sweep for a modern feel
const ActivityIndicator = ({
  size = 18,
  thickness = 2,
  color = "#000",
  secondaryColor = "rgba(0,0,0,0.35)",
  duration = 1.1,
  className,
}: Props) => {
  const sweepVar = "--sweep" as any;
  const sweepVar2 = "--sweep2" as any;
  const mask = `radial-gradient(farthest-side, transparent calc(100% - ${thickness}px), #000 calc(100% - ${thickness}px))`;

  return (
    <div
      aria-label="Loading"
      role="progressbar"
      className={className}
      style={{
        width: size,
        height: size,
        position: "relative",
        pointerEvents: "none",
        willChange: "transform",
      }}
    >
      {/* Primary arc */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          [sweepVar]: "120deg",
          background:
            `conic-gradient(${color} var(--sweep), transparent 0)` as any,
          WebkitMask: mask as any,
          mask: mask as any,
        }}
        animate={{ rotate: 360, [sweepVar]: ["90deg", "180deg", "90deg"] }}
        transition={{
          rotate: { duration, repeat: Infinity, ease: "linear" },
          [sweepVar]: { duration, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      {/* Secondary arc (subtle) */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          opacity: 0.6,
          [sweepVar2]: "80deg",
          background:
            `conic-gradient(${secondaryColor} var(--sweep2), transparent 0)` as any,
          WebkitMask: mask as any,
          mask: mask as any,
        }}
        animate={{ rotate: -360, [sweepVar2]: ["60deg", "120deg", "60deg"] }}
        transition={{
          rotate: {
            duration: duration * 1.15,
            repeat: Infinity,
            ease: "linear",
          },
          [sweepVar2]: {
            duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.05,
          },
        }}
      />
    </div>
  );
};

export default ActivityIndicator;
