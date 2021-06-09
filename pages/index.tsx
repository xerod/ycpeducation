import { PageWithLayoutType } from "../types/PageWithLayoutType";

import Default from "../components/layouts/Default";
import HeroSection from "../components/templates/HeroSection";
import OurValues from "../components/templates/OurValues";
import OurProgrammes from "../components/templates/OurProgrammes";
import OurCourse from "../components/templates/OurCourse";
import OurStrength from "../components/templates/OurStrength";
import CaseStudy from "../components/templates/CaseStudy";

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <OurValues />
      <OurProgrammes />
      <OurCourse />
      <OurStrength />
      <CaseStudy />
    </div>
  );
};

(Home as PageWithLayoutType).layout = Default;

export default Home;
