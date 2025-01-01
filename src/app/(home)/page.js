import HeroSection from "../components/home/heroSection";
import CollabSection from "../components/home/collabSection";
import dynamic from 'next/dynamic';
const DynamicRecentJobSection = dynamic(() => import('../components/home/recentJobSection'), {
  loading: () => <p>Loading...</p>,
});
const DynamicTestimonials = dynamic(() => import('../components/home/testimonials'), {
  loading: () => <p>Loading...</p>,
});
const DynamicFooter = dynamic(() => import('../components/home/footer'), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <CollabSection />
      <DynamicRecentJobSection />
      <DynamicTestimonials />
      <DynamicFooter />
    </>

  );
}
