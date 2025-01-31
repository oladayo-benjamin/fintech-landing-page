import "./styles.css";
import "./global.css";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Steps from "./components/Steps";
import Offers from "./components/Offers";
import VideoDemo from "./components/VideoDemo";
import Testimonials from "./components/Testimonials";
import FAQs from "./components/FAQs";
import Blog from "./components/Blog";
import DownloadApp from "./components/DownloadApp";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <Steps />
      <Offers />
      <VideoDemo />
      <Testimonials />
      <FAQs />
      <Blog />
      <DownloadApp />
      <Footer />
    </div>
  );
}
