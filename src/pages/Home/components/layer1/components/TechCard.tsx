import tecnologies from "../../../../../utils/tecnologies";

export default function TechCard () {
    return (
        <div className="col-span-1 row-span-2 bg-[#242424] rounded-xl">
            <div className="h-2/3">
            <img src={tecnologies[0].image}/>
            </div>
            <div className="h-1/3 flex flex-col justify-around items-center">
                <p className="font-extrabold text-4xl text-white">{tecnologies[0].name}</p>
                <button className="text-black bg-white py-1 px-4 rounded-xl font-bold">Ver Stack</button>
            </div>
        </div>
    )
}