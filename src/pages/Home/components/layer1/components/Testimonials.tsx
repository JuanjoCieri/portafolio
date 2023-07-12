import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "../../../../../utils/icons";
import testimonials from "../../../../../utils/testimonials";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 1.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="col-span-4 tablet: laptop:col-span-2 desktop:col-span-2 bg-white rounded-xl flex flex-col justify-center items-start px-6 py-16 gap-10 tablet:gap-3 laptop:gap-3 desktop:gap-3"
    >
      <div className="w-full flex justify-between items-center">
        <div>
          <h4 className="text-xl font-bold ">Testimonios</h4>
        </div>
        <div className="flex justify-center items-center gap-3">
          <button onClick={previousSlide}>
            <ArrowLeftIcon />
          </button>
          <button onClick={nextSlide}>
            <ArrowRightIcon />
          </button>
        </div>
      </div>
      <div>
        {testimonials.map((texto, index) => (
          <motion.div
            key={index}
            initial={{ opacity: index === 0 ? 1 : 0 }}
            animate={{ opacity: currentIndex === index ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: currentIndex === index ? "block" : "none" }}
          >
            <div className="flex flex-col gap-3 h-32 items-start justify-center">
              <p className="text-xs tablet:text-sm laptop:text-sm desktop:text-sm text-[#3C3C3C] font-medium">
                "{texto.texto}"
              </p>
              <p className="font-medium text-sm">{texto.author}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
