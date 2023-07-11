export default function Project() {
  return (
    <>
      <div
        className={`h-[100vh] col-span-4 row-span-2 rounded-xl flex bg-[url('/src/pages/Home/components/layer2/components/ShinyOverlay.png')] bg-cover`}
      >
        <div className="w-1/3 flex justify-center items-center">
          <div className="flex flex-col items-start justify-center gap-3 px-10">
            <div className="text-white text-sm bg-black py-1 px-3 rounded-lg font-semibold">
              Personal
            </div>
            <span className="text-black font-bold text-4xl">
              Recursos Web <br /> Gratuitos
            </span>
            <p className="font-medium text-sm">
              Descubrí más de 300 recursos gratuitos para utilizar en cualquier
              momento. Desde iconos y backgrounds, hasta paletas de colores e
              inspiración para tus diseños.
            </p>
          </div>
        </div>
        {/* <div className="w-2/3 flex justify-start items-center">
          <img src={desktopMockup} className="w-[700px]" />
          <img src={tabletMockup} className="w-[240px]" />
        </div> */}
      </div>
    </>
  );
}
