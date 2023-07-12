import lastestPub from "../../../../../assets/LastestPub/LastestPub.jpeg";
import { LinkIcon } from "../../../../../utils/icons";
import { motion } from "framer-motion";
export default function LastestPub() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.7,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="col-span-4 tablet:col-span-4 laptop:col-span-2 desktop:col-span-2 h-[50vh] row-span-1 rounded-xl flex justify-start items-end"
    >
      <img
        src={lastestPub}
        alt="Imagen del último proyecto realizado por Juan Cieri llamado Cierusic"
        className="w-[100%] h-[100%] object-cover brightness-[0.30] rounded-xl"
      />
      <div className="absolute flex flex-col gap-2 py-5 px-6 tablet:px-10 tablet:py-10 laptop:px-10 laptop:py-10 desktop:py-10 desktop:px-10">
        <div>
          <span className="w-8 px-4 py-1 text-black font-bold bg-white rounded-xl">
            Linkedin
          </span>
        </div>
        <div className="w-[70%] tablet:w-[70%] laptop:w-[100%] desktop:w-[100%]">
          <p className="text-white font-semibold">
            “Hola! como están?, hoy les quiero mostrar <br /> un nuevo proyecto
            en el cual vengo trabajando...”
          </p>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/posts/juan-jose-cieri_hola-como-est%C3%A1n-hoy-les-quiero-mostrar-activity-7081967368326774784-EiYz?utm_source=share&utm_medium=member_desktop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkIcon />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
