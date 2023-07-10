import foto from "./ShinyOverlay.svg";

export default function Project() {
  return (
    <>
      <div className="col-span-4 row-span-2 bg-red-400 rounded-xl flex bg-[url('/ShinyOverlay.svg')]">
        {/* <img
          src={foto}
          alt="Imagen de fondo de proyecto"
          className="rounded-xl"
        /> */}
        <div className="flex absolute">
          <div className="w-1/2 flex justify-center items-center">a</div>
          <div className="w-1/2">b</div>
        </div>
      </div>
    </>
  );
}
