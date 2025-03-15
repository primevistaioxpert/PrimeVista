import Header1 from "@/components/header/Header1";
import Home1Service from "@/components/service/Home1Service";
import Home1About from "@/components/about/Home1About";
import Home1WhyChooseus from "@/components/why-choose-us-section/Home1WhyChooseus";
import Home1Testimonial from "@/components/testimonial/Home1Testimonial";
import Home1Faq from "@/components/faq-section/Home1Faq";
import Home1blog from "@/components/blog-section/Home1blog";
import Footer1 from "@/components/Footer/Footer1";
import Home1Banner from "@/components/banner/Home1banner";
import Home1Project from "@/components/projects/Home1Project";
import Home1Support from "@/components/supports/Home1Support";
import Home1Banner2 from "@/components/banner/Home1Banner2";
import Home1FooterTop from "@/components/Footer/Home1FooterTop";
import Home1Team from "@/components/team-section/Home1Team";
import VideoBackground from "@/components/video/videobackground";

export default function Home() {
  return (
    <>
      <Header1 fluid="container-fluid" />
      
      <Home1Banner />
      <Home1WhyChooseus />
      {<Home1Service />}
      <Home1Project />
      <Home1Support />
      <Home1Faq />
      <Home1Banner2 />
      <Home1Testimonial />
      
      <Home1FooterTop />
      <Footer1 />
    </>
  );
}
