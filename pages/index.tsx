import { PageWithLayoutType } from "../types/PageWithLayoutType";

import HeroSection from "../components/templates/HeroSection";
import OurValues from "../components/templates/OurValues";
import Default from "../components/layouts/Default";

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <OurValues />
    </div>
  );
};

(Home as PageWithLayoutType).layout = Default;

export default Home;
