import About from "./components/About";
import LastestProject from "./components/LastestProject";
import LastestPub from "./components/LastestPub";
import Socials from "./components/Socials";
import TechCard from "./components/TechCard";
import Testimonials from "./components/Testimonials";

export default function Layer1() {
  return (
    <main className="w-[100%] h-[100vh] grid grid-cols-4 gap-5">
      <TechCard />
      <LastestPub />
      <About />
      <Socials />
      <LastestProject />
      <Testimonials />
    </main>
    // <div className="w-[100%] h-[100vh] grid grid-cols-4 gap-4">
    //   <div className="col-span-1 row-span-2 bg-red-300">01</div>
    //   <div className="col-span-2 row-span-1 bg-red-300">02</div>
    //   <div className="col-span-1 bg-red-300">03</div>
    //   <div className="bg-red-300 ">04</div>
    //   <div className="col-span-2 row-span-2  bg-red-300">05</div>
    //   <div className="col-span-2 bg-red-300">06</div>
    // </div>
  );
}
