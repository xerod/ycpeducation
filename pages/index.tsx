import { PageWithLayoutType } from "../types/PageWithLayoutType";

import Default from "../components/layouts/Default";
import HeroSection from "../components/templates/HeroSection";
import OurValues from "../components/templates/OurValues";
import OurProgrammes from "../components/templates/OurProgrammes";

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <OurValues />
      <OurProgrammes />
    </div>
  );
};

(Home as PageWithLayoutType).layout = Default;

export default Home;
