import DesktopMockup from "../../../../../assets/Project-HappyTails/DesktopMockup.png";
import { LinkIcon } from "../../../../../utils/icons";

export default function Project3() {
  return (
    <div className="col-span-4 tablet:col-span-2 laptop:col-span-2 desktop:col-span-2 h-[100vh] bg-red-400 rounded-xl flex flex-col">
      <div className="h-1/2 flex justify-between p-10">
        <div className="flex flex-col justify-start items-start gap-3">
          <div className="text-white text-sm bg-black py-1 px-3 rounded-lg font-semibold">
            Personal
          </div>
          <span className="text-black font-bold text-4xl">No Bg App</span>
          <p className="font-medium text-gray-900 text-sm">
            La Aplicación utiliza la Inteligencia
            Artificial <br/> de Cloudinary para borrar automáticamente <br/> el fondo de las
            imágenes en segundos y con <br/> la mejor calidad. "Resalta lo importante, <br/>
            elimina lo innecesario.""
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