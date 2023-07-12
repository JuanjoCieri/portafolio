import pageSpeed from "../../../../../assets/PageSpeedGoogle.png";

export default function PageSpeed() {
  return (
    <div className="bg-blue-400 col-span-4 tablet: laptop:col-span-1 desktop:col-span-1 rounded-xl flex desktop:flex-col tablet:flex-col laptop:flex-col items-center justify-around py-5">
      <div>
        <p className="text-white font-extrabold text-xl tablet:text-3xl laptop:text-3xl desktop:text-3xl">Accesibilidad</p>
        <p className="text-white font-extrabold text-xl tablet:text-3xl laptop:text-3xl desktop:text-3xl">Rendimiento</p>
        <p className="text-white font-extrabold text-xl tablet:text-3xl laptop:text-3xl desktop:text-3xl">SEO</p>
      </div>
      <div>
        <img src={pageSpeed} alt="Imagen del logotipo de Gogle Speed Insights" className="w-[150px] tablet:w-[300px] laptop:w-[300px] desktop:w-[300px]" />
      </div>
    </div>
  );
}
