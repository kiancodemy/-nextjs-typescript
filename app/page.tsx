import Stats from "./components/stats";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Solution from "./components/Solution";
import Testimonial from "./components/Testimonial";
export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Stats></Stats>
      <Service></Service>
      <Solution></Solution>
      <Testimonial></Testimonial>
    </>
  );
}
