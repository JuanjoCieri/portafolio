import RecursosWebPhone from "../../../../../assets/LastestProjects/RecursosWebPhone.png";
import { motion } from "framer-motion";
import IntersectionObserver from "../../../../../utils/IntersectionObserver";

export default function LastestProject() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 1.4,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="relative overflow-hidden col-span-4 tablet:col-span-4 laptop:col-span-2 desktop:col-span-2 row-span-2 bg-[#00CC99] rounded-xl flex py-10"
    >
      <div className="w-1/2 flex flex-col justify-around items-center px-6">
        <div className="flex flex-col items-start justify-center gap-4 px-5">
          <div className="text-white bg-black py-1 px-3 rounded-xl font-semibold">
            Último
          </div>
          <span className="text-black font-bold text-3xl">
            Recursos Web <br /> Gratuitos
          </span>
          <p className="font-semibold text-[#3A3A3A] text-sm">
            Descubrí más de 300 recursos gratuitos para utilizar en cualquier
            momento. Desde iconos y backgrounds, hasta paletas de colores e
            inspiración para tus diseños.
          </p>
          <a
            href="https://recursos-web-ten.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-black bg-white py-1 px-4 rounded-xl font-bold">
              Visitar
            </button>
          </a>
        </div>
        <div></div>
      </div>
      <div className="w-1/2">
        <IntersectionObserver>
          {(isVisible) => (
            <motion.img
              initial={{ y: 300 }}
              animate={isVisible ? { y: 0 } : { y: 300 }}
              transition={{ duration: 1.5, type: "spring", delay: 1.5 }}
              src={RecursosWebPhone}
              alt="Imagen del proyecto Recursos Web creado por Juan Cieri"
              className="absolute w-56 mb-4 -bottom-36"
            />
          )}
        </IntersectionObserver>
      </div>
    </motion.div>
  );
}
