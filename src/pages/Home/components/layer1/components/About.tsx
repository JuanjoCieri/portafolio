import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="col-span-4 tablet:col-span-4 laptop:col-span-1 desktop:col-span-1 bg-white rounded-xl flex flex-col justify-center items-start p-8 gap-2"
    >
      <p className="text-4xl font-bold">Hola 👋</p>
      <span className="font-medium text-[#424242] text-lg">
        Soy Juan José Cieri, Full Stack Developer. apasionado por la resolución
        de problemas y mejorar la experiencia del usuario. Mis proyectos
        muestran experiencia y capacidad para trabajar solo y en equipo.
      </span>
    </motion.div>
  );
}
