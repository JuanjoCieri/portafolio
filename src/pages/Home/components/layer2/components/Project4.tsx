import desktopMockup from "../../../../../assets/Project-Cierusic/DesktopMockup.png";
import { motion } from "framer-motion";
import IntersectionObserver from "../../../../../utils/IntersectionObserver";

export default function Project4() {
  return (
    <>
      <div className={`h-[100vh] col-span-4 row-span rounded-xl flex bg-orange-300`}>
        <div className="w-1/3 flex justify-center items-center">
          <div className="flex flex-col items-start justify-center gap-3 px-10">
            <div className="text-white text-sm bg-black py-1 px-3 rounded-lg font-semibold">
              Personal
            </div>
            <span className="text-black font-bold text-4xl">Cierusic</span>
            <p className="font-medium text-sm">
              Cierusic es un reproductor de música que permite a los usuarios
              buscar y escuchar listas de reproducción, agregar canciones a
              listas de reproducción personalizadas y dejar comentarios.
              Proporciona una experiencia interactiva y agradable para los
              amantes de la música.
            </p>
          </div>
        </div>
        <div className="w-2/3 flex justify-start items-center">
          <IntersectionObserver>
            {(isVisible) => (
              <motion.div
                initial={{ x: "100%", rotateY: 90 }}
                animate={isVisible ? { x: 0, rotateY: 0 } : { x: "100%", rotateY: 90 }}
                transition={{ duration: 1 }}
                style={{ width: "700px", height: "700px" }}
              >
                <img src={desktopMockup} className="w-[700px]" />
              </motion.div>
            )}
          </IntersectionObserver>
        </div>
      </div>
    </>
  );
}
