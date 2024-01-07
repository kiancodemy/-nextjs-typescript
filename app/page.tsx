import Stats from "./components/stats";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Solution from "./components/Solution";
import Testimonial from "./components/Testimonial";
import Recentblog from "./components/Recentblog";
export default function Home() {
  return (
    <div className="overflow-hidden">
      *<Hero></Hero>
      <Stats></Stats>
      <Service></Service>
      <Solution></Solution>
      <Testimonial></Testimonial>
      <Recentblog></Recentblog>
      <Footer></Footer>
    </div>
  );
}
