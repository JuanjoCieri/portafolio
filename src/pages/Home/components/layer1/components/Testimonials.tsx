import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: 1.5,
      ease: [0, 0.71, 0.2, 1.01],
    }} className="col-span-4 tablet: laptop: desktop:col-span-2 bg-white rounded-xl flex flex-col justify-center items-start px-6 py-8 gap-3">
      <div>
        <h4 className="text-xl font-bold ">Testimonios</h4>
      </div>
      <div>
        <p className="text-sm text-[#3C3C3C] font-medium">"Excelente desarrollador y persona. Perseverante y autodidacta, cuando se presenta algún obstáculo o tema a investigar, no para hasta conseguirlo, orientado a la resolución de problemas. Ha logrado implementar funciones nuevas en muy poco tiempo. Trabaja muy bien en equipo, siempre dispuesto a ayudar a los compañeros, y sabe dar y escuchar consejos."</p>
      </div>
      <div>
        <p className="font-medium text-sm">Christian Gabriel Ferreiro - Full Stack Developer</p>
      </div>
    </motion.div>
  );
}
