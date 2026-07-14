import Navbar from "../../components/Layout/Navbar/Navbar";
import Hero from "../../components/Sections/Hero/Hero";
import HowItWorks from "../../components/Sections/HowItWorks/HowItWorks";
import Features from "../../components/Sections/Features/Features";
import StudyPreview from "../../components/Sections/StudyPreview/StudyPreview";
import Footer from "../../components/Layout/Footer/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <StudyPreview />
      <Footer />
    </>
  );
}