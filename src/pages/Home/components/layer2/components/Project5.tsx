import desktopMockup from "../../../../../assets/Project-MockupGenerator/desktopMockup.png"


export default function Project5() {
  return (
    <>
      <div
        className={`h-[100vh] col-span-4 row-span-2 rounded-xl flex flex-col tablet:flex-col laptop:flex-row desktop:flex-row bg-[#CE7CD6]`}
      >
        <div className="w-full tablet:w-full laptop:w-1/3 desktop:w-1/3 flex justify-center items-center">
          <div className="flex flex-col items-start justify-center gap-3 py-10 px-10 tablet:px-10 tablet:py-10 laptop:px-10 laptop:py-0 desktop:px-10 desktop:py-0">
            <div className="text-white text-sm bg-black py-1 px-3 rounded-lg font-semibold">
              Personal
            </div>
            <span className="text-black font-bold text-4xl">
              Mockup Generator
            </span>
            <p className="font-medium text-sm">
              Generá Mockups profesionales de tus proyectos en segundos y a la mayor calidad.
              Lo único que tenes que hacer es ingresar la URL de tu página web y la app hara el resto.
            </p>
            <a
            href="https://mockupgenerator.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-black bg-white py-1 px-4 rounded-xl font-bold">
              Visitar
            </button>
          </a>
          </div>
        </div>
        <div className="w-full tablet:w-full laptop:w-2/3 desktop:w-2/3 flex justify-center items-center">
          <img src={desktopMockup} alt="Imagen Mockup en Desktop del proyecto Recursos Web creado por Juan Cieri" className="w-[90%] tablet:w-[60%] laptop:w-[80%] desktop:w-[80%]" />
        </div>
      </div>
    </>
  );
}
