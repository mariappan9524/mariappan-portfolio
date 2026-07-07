import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import avatarVideo from "../../assets/videos/avatar-intro.mp4";

export default function HeroAvatarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (!canvas || !video) return;

    const ctx = canvas.getContext("2d", {
      willReadFrequently: true,
    });

    if (!ctx) return;

    let animationId: number;

    const render = () => {
      if (
        video.readyState >= 2 &&
        video.videoWidth > 0
      ) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        ctx.drawImage(video, 0, 0);

        const frame = ctx.getImageData(
          0,
          0,
          canvas.width,
          canvas.height
        );

        const pixels = frame.data;

        for (let i = 0; i < pixels.length; i += 4) {
          const r = pixels[i];
          const g = pixels[i + 1];
          const b = pixels[i + 2];

          // Green Screen Removal
          if (
            g > 120 &&
            g > r * 1.3 &&
            g > b * 1.3
          ) {
            pixels[i + 3] = 0;
          }
        }

        ctx.putImageData(frame, 0, 0);
      }

      animationId = requestAnimationFrame(render);
    };

    video.play();

    render();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <motion.div
      initial={{
        x: 140,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1.2,
      }}
      className="
        absolute
        bottom-2
        -right-10
        z-30

        w-[170px]
      "
    >
      <video
        ref={videoRef}
        src={avatarVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="hidden"
      />

      <canvas
        ref={canvasRef}
        className="
          w-full
          h-auto
        "
      />
    </motion.div>
  );
}