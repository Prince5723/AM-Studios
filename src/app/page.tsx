import { Navbar1 } from "@/components/ui/navbar-1";
import AnimatedHeroDemo from "@/components/hero";
import VideoImageToggle from "@/components/videoPlayer";
import Image from "next/image";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import Faq from "@/components/faq";
import FooterNewsletter from "@/components/footer";
import { Process } from "@/components/card-stack";
import Pricing from "@/components/pricing";
import Contact from "@/components/contact";



export default function Home() {
  return (
    <>
    <div className="bg-black">
    <Navbar1 />
    <AnimatedHeroDemo/>
    <Services />
    <Process />
    <Testimonials />
    <Pricing/>
    <Faq />
    <Contact/>
    <FooterNewsletter />
    {/* <VideoImageToggle /> */}
    </div>
    </>
  );
}
