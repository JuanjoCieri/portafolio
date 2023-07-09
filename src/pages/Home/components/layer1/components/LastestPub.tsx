import lastestPub from "../../../../../assets/LastestPub/LastestPub.jpeg";
import { LinkIcon } from "../../../../../utils/icons";

export default function LastestPub() {
  return (
    <div className="col-span-2 bg-red-200 row-span-1 rounded-xl flex justify-start items-end">
      <img
        src={lastestPub}
        className="w-full h-[100%] object-cover brightness-[0.30]	rounded-xl"
      />
      <div className="absolute flex flex-col gap-2 p-10">
        <div>
          <span className="w-8 px-4 py-1 text-black font-bold bg-white rounded-xl">
            Linkedin
          </span>
        </div>
        <div>
          <p className="text-white font-semibold">
            “Hola! como están?, hoy les quiero mostrar <br /> un nuevo proyecto
            en el cual vengo trabajando...”
          </p>
        </div>
        <div>
          <LinkIcon />
        </div>
      </div>
    </div>
  );
}
