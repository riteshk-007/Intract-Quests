import Creators from "./components/Creators";
import Dictionary from "./components/Dictionary";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Creators />
      <Dictionary />
    </div>
  );
}
