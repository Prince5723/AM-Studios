import { AnimatedMarqueeHero } from "@/components/ui/hero-3";

// A list of sample image URLs for the demo
const DEMO_IMAGES = [
"https://plus.unsplash.com/premium_photo-1680955436007-264b858768e4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZGlvfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
"https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGlvfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
"https://images.unsplash.com/photo-1637250060437-eaad0291deff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN0dWRpb3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
"/studio1.jpg",
"/studio4.jpg",
"https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlkZW8lMjBlZGl0aW5nfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
"https://images.unsplash.com/photo-1516392808102-5a95cfaed210?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhJTIwc3R1ZGlvfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
"https://images.unsplash.com/photo-1643651342963-d4478284de5d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGNhbWVyYSUyMHN0dWRpb3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
"https://images.unsplash.com/photo-1655195215404-a89325e7dd3e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGNhbWVyYSUyMHN0dWRpb3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
"https://images.unsplash.com/photo-1636127740628-13bf7ce4f7ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1pYyUyMHN0dWRpb3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
];

const AnimatedHeroDemo = () => {
  return (
    <AnimatedMarqueeHero
      tagline="Join over 1000 happy creators"
      title={
        <>
        The Premier Studio
          <br />
          For All Your Video Needs
        </>
      }
      description="AM Studios is a premium 24/7 podcast and video production facility in Delhi. We provide the acoustics, gear, and expert staff needed to turn your content into flawless, ready-to-publish episodes."
      ctaText="Book Now"
      images={DEMO_IMAGES}
      whatsappNumber="919990975812"
      
    />
  );
};

export default AnimatedHeroDemo;