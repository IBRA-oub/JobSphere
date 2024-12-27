import Image from "next/image";
import HeroSection from "./components/home/heroSection";
import CollabSection from "./components/home/collabSection";
import RecentJobSection from "./components/home/recentJobSection";
import Testimonials from "./components/home/testimonials";
import Footer from "./components/home/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CollabSection />
      <RecentJobSection/>
      <Testimonials/>
      <Footer/>
    </>

  );
}
