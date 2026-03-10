
import HomeSlider from "../components/HomeSlider";
import CBSEBanner from "../components/CBSEBanner";
import AboutSection from "../components/AboutSection";
import MissionVision from "../components/MissionVision";
import MessageComponent from '../components/MessageComponent'
import ExploreSection from "../components/ExploreSection";
import ContactUs from "../components/ContactUs";

const HomePage = () => {
  return (
    <div>

      

      {/* Hero Slider */}
      <HomeSlider />
      <CBSEBanner/>
      <AboutSection/>
      <MissionVision/>
      
      <MessageComponent/>
      <ExploreSection/>
      {/* <ContactUs/> */}
    

    </div>
  );
};

export default HomePage;