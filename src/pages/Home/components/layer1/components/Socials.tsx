import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "../../../../../utils/icons";

export default function Socials() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 1.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="col-span-4 tablet:col-span-4 laptop:col-span-2 desktop:col-span-1 bg-white rounded-xl flex justify-center items-center gap-6 py-20"
    >
      <GithubIcon />
      <LinkedinIcon />
    </motion.div>
  );
}
