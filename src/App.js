import React from "react";
import NavigationBar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import SignupSection from "./component/SignUpSection";
import VideoInfoSection from "./component/VideoSection";
import VerificationSection from "./component/VerificationSection";
import HowItWorks from "./component/HowItWorks";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <SignupSection />
      <VideoInfoSection />
      <VerificationSection />
      <HowItWorks />
      <Footer />
    </div>
  );
};
export default App;
