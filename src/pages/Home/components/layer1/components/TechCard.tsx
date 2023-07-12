import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";

import data from "../../../../../utils/tecnologies";
import { useState } from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

export default function TechCard() {
  const [open, set] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: "25%", background: "white" },
    to: {
      size: open ? "100%" : "25%",
      background: open ? "#242424" : "white",
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="col-span-4 tablet:col-span-4 laptop:col-span-1 desktop:col-span-1 row-span-2 bg-[#242424] rounded-xl h-[50vh] tablet:h-[50vh] laptop:h-auto desktop:h-auto"
    >
      {!open ? (
        <div className="h-2/3 flex justify-center items-center">
          <img
            src={data[0].image}
            className="invert w-[30%] tablet:w-[30%] laptop:w-[60%] desktop:w-[60%]"
          />
        </div>
      ) : (
        <></>
      )}
      <div
        className={
          open
            ? "h-full flex flex-col justify-around items-center"
            : "h-1/3 flex flex-col justify-around gap-5 items-center"
        }
      >
        {!open ? (
          <p className="font-extrabold text-4xl text-white">{data[0].name}</p>
        ) : (
          <></>
        )}
        <animated.div
          style={{ ...rest, width: size, height: size }}
          className={
            open
              ? "text-black bg-white grid grid-cols-2 p-4 gap-4 rounded-xl font-bold"
              : "text-black bg-white flex items-center justify-center rounded-xl font-bold"
          }
          onClick={() => set((open) => !open)}
        >
          {transition((style, item) => (
            <animated.div
              className={styles.item}
              style={{ ...style, background: item.css }}
            >
              <img src={item.image} className="w-16" />
              <p>{item.name}</p>
            </animated.div>
          ))}
          {!open ? <p>Ver Stack</p> : false}
        </animated.div>
      </div>
    </motion.div>
  );
}
