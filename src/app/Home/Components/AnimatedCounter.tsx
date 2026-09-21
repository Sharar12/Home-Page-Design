// src/app/Home/Components/AnimatedCounter.tsx
"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  isInView?: boolean;
  className?: string;
}

export default function AnimatedCounter({
  target,
  duration = 1800,
  prefix = "",
  suffix = "",
  decimals = 0,
  isInView = true,
  className = "",
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const prevTargetRef = useRef(target);

  useEffect(() => {
    // If not in view, reset to 0 so it re-animates upon scrolling into view
    if (!isInView) {
      setDisplayValue(0);
      return;
    }

    let startValue = 0;
    // If target changed while already in view (e.g., toggle standard/member rates),
    // we can smoothly transition from the current displayed number to the new target
    if (prevTargetRef.current !== target && displayValue > 0) {
      startValue = displayValue;
    }
    prevTargetRef.current = target;

    const startTime = performance.now();
    let animationFrameId: number;

    const updateCounter = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Quartic ease-out: increases very fast initially, then decelerates smoothly to target
      const easeOut = 1 - Math.pow(1 - progress, 4);
      const current = startValue + (target - startValue) * easeOut;

      if (decimals > 0) {
        setDisplayValue(Number(current.toFixed(decimals)));
      } else {
        setDisplayValue(Math.round(current));
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(target);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [target, duration, isInView, decimals]);

  // Format with commas (e.g. 2,499)
  const formattedNumber = decimals > 0
    ? displayValue.toFixed(decimals)
    : displayValue.toLocaleString();

  return (
    <span className={className}>
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
}
