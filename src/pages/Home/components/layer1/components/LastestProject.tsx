import RecursosWebPhone from "../../../../../assets/LastestProjects/RecursosWebPhone.png";

export default function LastestProject() {
  return (
    <div className="relative overflow-hidden col-span-4 tablet:col-span-4 laptop:col-span-4 desktop:col-span-2 row-span-2 bg-[#00CC99] rounded-xl flex py-10 h-[70vh]">
      <div className="w-1/2 flex flex-col justify-around items-center px-6">
        <div className="flex flex-col items-start justify-center gap-4 px-5">
          <div className="text-white bg-black py-1 px-3 rounded-xl font-semibold">
            Último
          </div>
          <span className="text-black font-bold text-3xl">
            Recursos Web <br/> Gratuitos
          </span>
          <p className="font-semibold text-[#3A3A3A] text-sm">
            Descubrí más de 300 recursos gratuitos para utilizar en cualquier
            momento. Desde iconos y backgrounds, hasta paletas de colores e
            inspiración para tus diseños.
          </p>
        <button className="text-black bg-white py-1 px-4 rounded-xl font-bold">Visitar</button>
        </div>
        <div>
        </div>
      </div>
      <div className="w-1/2">
        <img src={RecursosWebPhone} className="absolute w-56 mb-4 -bottom-36"/>
      </div>
    </div>
  );
}
