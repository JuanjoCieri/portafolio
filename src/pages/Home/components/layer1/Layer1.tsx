import AboutMe from "../layer2/components/AboutMe";
import Footer from "../layer2/components/Footer";
import PageSpeed from "../layer2/components/PageSpeed";
import Project from "../layer2/components/Project";
import Project2 from "../layer2/components/Project2";
import Project3 from "../layer2/components/Project3";
import Project4 from "../layer2/components/Project4";
import About from "./components/About";
import LastestProject from "./components/LastestProject";
import LastestPub from "./components/LastestPub";
import Socials from "./components/Socials";
import TechCard from "./components/TechCard";
import Testimonials from "./components/Testimonials";

export default function Layer1() {
  return (
    <main className="w-[100%] grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 desktop:grid-cols-4 gap-5">
      <TechCard />
      <LastestPub />
      <About />
      <Socials />
      <LastestProject />
      <Testimonials />
      <Project />
      <Project2 />
      <PageSpeed />
      <Project4 />
      <Project3 />
      <AboutMe />
      <Footer />
    </main>
  );
}
