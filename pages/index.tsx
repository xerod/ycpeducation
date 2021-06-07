import { PageWithLayoutType } from "../types/PageWithLayoutType";

import HeroSection from "../components/templates/HeroSection";
import Default from "../components/layouts/Default";

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <HeroSection />
    </div>
  );
};

(Home as PageWithLayoutType).layout = Default;

export default Home;
