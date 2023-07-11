import lastestPub from "../../../../../assets/LastestPub/LastestPub.jpeg";
import { LinkIcon } from "../../../../../utils/icons";
export default function LastestPub() {
  return (
    <div className="col-span-4 tablet:col-span-2 laptop:col-span-2 desktop:col-span-2 h-[50vh] row-span-1 rounded-xl flex justify-start items-end">
      <img
        src={lastestPub}
        className="w-[100%] h-[100%] object-cover brightness-[0.30] rounded-xl"
      />
      <div className="absolute flex flex-col gap-2 py-5 px-6 tablet:px-10 tablet:py-10 laptop:px-10 laptop:py-10 desktop:py-10 desktop:px-10">
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
