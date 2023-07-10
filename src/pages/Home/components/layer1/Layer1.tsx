import Layer2 from "../layer2/Layer2";
import Project from "../layer2/components/Project";
import About from "./components/About";
import LastestProject from "./components/LastestProject";
import LastestPub from "./components/LastestPub";
import Socials from "./components/Socials";
import TechCard from "./components/TechCard";
import Testimonials from "./components/Testimonials";

export default function Layer1() {
  return (
    <main className="w-[100%] grid grid-cols-4 gap-5">
      <TechCard />
      <LastestPub />
      <About />
      <Socials />
      <LastestProject />
      <Testimonials />
      <Project />
    </main>
  );
}
