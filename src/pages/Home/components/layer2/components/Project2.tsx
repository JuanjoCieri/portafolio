import DesktopMockup from "../../../../../assets/Project-HappyTails/DesktopMockup.png";
import { LinkIcon } from "../../../../../utils/icons";

export default function Project2() {
  return (
    <div className="col-span-4 tablet:col-span-4 laptop:col-span-3 desktop:col-span-3 h-[100vh] bg-yellow-800 rounded-xl flex flex-col">
      <div className="h-1/2 flex justify-between p-10">
        <div className="flex flex-col justify-start items-start gap-3">
          <div className="text-white text-sm bg-black py-1 px-3 rounded-lg font-semibold">
            Académico
          </div>
          <span className="text-white font-bold text-4xl">HappyTails</span>
          <p className="font-medium text-gray-100 text-sm">
            HappyTails es una Red Social con el objetivo de <br/> facilitar la
            adopción de animales. <br/> Cuenta con chat en línea, marketplace,
            notificaciones, <br/> mailing, pasarela de pago, entre otras funcionalidades.
          </p>
        </div>
        <div>
          <a href="https://happytails.vercel.app/">
            <LinkIcon />
          </a>
        </div>
      </div>
      <div className="h-1/2 flex justify-center items-center">
        <img src={DesktopMockup} className="w-[450px]" />
      </div>
    </div>
  );
}
