import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import avatarIdle from "../../assets/images/avatar/avatar_idle.png";
import avatarWave from "../../assets/images/avatar/avatar_wave.png";
import avatarWalk1 from "../../assets/images/avatar/avatar_walk_1.png";
import avatarWalk2 from "../../assets/images/avatar/avatar_walk_2.png";
import avatarWalk3 from "../../assets/images/avatar/avatar_walk_3.png";

type AvatarState = "walkIn" | "wave" | "walkOut" | "waiting";

const walkFrames = [avatarWalk1, avatarWalk2, avatarWalk3, avatarWalk2];

export default function AnimatedAvatar() {
  const [state, setState] = useState<AvatarState>("waiting");

  const [, setFrameIndex] = useState(0);

  const [avatarImage, setAvatarImage] = useState(avatarIdle);

  const [positionX, setPositionX] = useState(230);
  const [direction, setDirection] = useState(1);
  const WALK_SPEED = 170;

  const WALK_INTERVAL = 120;
  useEffect(() => {
    let frameTimer: ReturnType<typeof setInterval>;

    let stateTimer: ReturnType<typeof setTimeout>;

    switch (state) {
      case "waiting": {
        setAvatarImage(avatarIdle);

        stateTimer = setTimeout(() => {
          setDirection(1);
          setState("walkIn");
        }, 2500);

        break;
      }

      case "walkIn": {
        setPositionX(0);

        frameTimer = setInterval(() => {
          setFrameIndex((prev) => {
            const next = (prev + 1) % walkFrames.length;

            setAvatarImage(walkFrames[next]);

            return next;
          });
        }, WALK_INTERVAL);

        stateTimer = setTimeout(() => {
          clearInterval(frameTimer);

          setAvatarImage(avatarIdle);

          setState("wave");
        }, WALK_SPEED * 7);

        break;
      }

      case "wave": {
        setAvatarImage(avatarWave);

        stateTimer = setTimeout(() => {
          setDirection(-1);

          setPositionX(230);

          setState("walkOut");
        }, 1600);

        break;
      }

      case "walkOut": {
        frameTimer = setInterval(() => {
          setFrameIndex((prev) => {
            const next = (prev + 1) % walkFrames.length;

            setAvatarImage(walkFrames[next]);

            return next;
          });
        }, WALK_INTERVAL);

        stateTimer = setTimeout(() => {
          clearInterval(frameTimer);

          setAvatarImage(avatarIdle);

          setState("waiting");
        }, WALK_SPEED * 7);

        break;
      }
    }

    return () => {
      clearInterval(frameTimer);

      clearTimeout(stateTimer);
    };
  }, [state]);

  return (
    <motion.div
      initial={{
        x: 170,
        opacity: 0,
      }}
      animate={{
        x: positionX,

        opacity: state === "waiting" ? 0 : 1,

        scaleX: direction,

        y: state === "walkIn" || state === "walkOut" ? [0, -8, 0, -4, 0] : 0,
        rotate:
          state === "walkIn"
            ? [-1.5, 1.5, -1.5]
            : state === "walkOut"
              ? [1.5, -1.5, 1.5]
              : 0,

scale:
  state === "walkIn" || state === "walkOut"
    ? [1, 1.015, 1]
    : 1,
      }}
      transition={{
        x: {
          duration: 1.2,
          ease: "easeInOut",
        },

        opacity: {
          duration: 0.3,
        },

        y: {
          duration: 0.35,
          repeat: state === "walkIn" || state === "walkOut" ? Infinity : 0,
          ease: "easeInOut",
        },

        rotate: {
          duration: 0.35,
          repeat: state === "walkIn" || state === "walkOut" ? Infinity : 0,
          ease: "easeInOut",
        },

        scale: {
          duration: 0.35,
          repeat: state === "walkIn" || state === "walkOut" ? Infinity : 0,
          ease: "easeInOut",
        },
      }}
      className="
    absolute
    bottom-6
-right-12
    z-30
w-[160px]  "
    >
      <motion.div
        animate={{
          scaleX: state === "walkIn" || state === "walkOut" ? [1, 0.82, 1] : 1,

          opacity:
            state === "walkIn" || state === "walkOut"
              ? [0.35, 0.2, 0.35]
              : 0.22,
        }}
        transition={{
          duration: 0.35,
          repeat: state === "walkIn" || state === "walkOut" ? Infinity : 0,
          x: {
  duration: 1.2,
  ease: "easeInOut",
},
        }}
        className="
    absolute
    bottom-1
    left-1/2

    h-3
w-24
    -translate-x-1/2

    rounded-full

    bg-black/40

    blur-md
  "
      />
      <img
        src={avatarImage}
        alt="Avatar"
        loading="eager"
        draggable={false}
        className="
        w-full
        select-none
        pointer-events-none
    "
      />
    </motion.div>
  );
}
