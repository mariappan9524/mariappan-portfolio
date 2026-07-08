import useIsMobile from "./useIsMobile";

export default function usePerformanceMode() {
  const isMobile = useIsMobile();

  return {
    isMobile,

    enableHeavyAnimations: !isMobile,

    enableParticles: !isMobile,

    enableFloating: !isMobile,

    enableRotation: !isMobile,

    enableGlowAnimation: !isMobile,

    enableHoverEffects: !isMobile,
  };
}