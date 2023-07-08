import RecursosWebPhone from "../../../../../assets/LastestProjects/RecursosWebPhone.png";

export default function LastestProject() {
  return (
    <div className="col-span-2 row-span-2 bg-[#00CC99] rounded-xl flex">
      <div className="w-1/2 flex flex-col justify-around items-center">
        <div className="flex flex-col items-start justify-center gap-2 px-5">
          <div className="text-white bg-black py-1 px-4 rounded-xl font-bold">
            Más nuevo
          </div>
          <span className="text-black font-bold text-2xl">
            Recursos Web <br/> Gratuitos
          </span>
          <p className="font-semibold text-[#3A3A3A] text-sm">
            Descubrí más de 300 recursos gratuitos para utilizar en cualquier
            momento. Desde iconos y backgrounds, hasta paletas de colores e
            inspiración para tus diseños.
          </p>
        </div>
        <div>
        <button className="text-black bg-white py-1 px-4 rounded-xl font-bold">Visitar</button>

        </div>
      </div>
      <div className="w-1/2">
        <img src={RecursosWebPhone} className="w-52"/>
      </div>
    </div>
  );
}
