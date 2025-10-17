import { Gallery4 } from "@/components/blocks/gallery4"

interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

 interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

const demoData: Gallery4Props = {
  title: "Services",
  description:
    "Everything you need for a professional recording: Studio rental, premium equipment, an expert in-studio technician, and full post-production video editing.",
  items: [
    {
      id: "Studio Rental",
      title: "The Premium Production Studio",
      description:
        "Have access to the most premium, acoustically treated studio space in your Delhi. Record high-quality audio and video projects in a professional, distraction-free environment.",
      href: "#pricing",
      image:
        "https://images.unsplash.com/photo-1637250060437-eaad0291deff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN0dWRpb3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
    },
    {
      id: "Gear rental",
      title: "Professional-Grade Gear On Demand",
      description:
        "Access our full inventory of high-end cameras, microphones, lighting, and podcast equipment. Get the professional tools you need without the commitment of ownership.",
      href: "#pricing",
      image:
        "https://plus.unsplash.com/premium_photo-1680955436007-264b858768e4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZGlvfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
    },
    {
      id: "technician",
      title: "Expert Technical Support Included",
      description:
        "Focus entirely on your content while our experienced technician manages all audio levels, equipment setup, and technical troubleshooting. We handle the production details so you don't have to.",
      href: "#pricing",
      image:
     "https://plus.unsplash.com/premium_photo-1663956087982-b93a54994d79?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRlY2huaWNpYW4lMjBpbiUyMHN0dWRpb3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
    },
    {
      id: "editing",
      title: "Ready-to-Publish Video Podcasts",
      description:
        "Turn your raw footage into a polished, professional video podcast. Our editors handle everything from multi-camera cuts and graphics to color correction, ready for upload.",
      href: "#pricing",
      image:
        "https://images.unsplash.com/photo-1627244714766-94dab62ed964?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmlkZW8lMjBlZGl0aW5nfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
    },
    // {
    //   id: "nextjs",
    //   title: "Next.js: The React Framework for Production",
    //   description:
    //     "Explore how Next.js has become the go-to framework for building full-stack React applications, offering features like server components, file-based routing, and automatic optimization.",
    //   href: "https://nextjs.org",
    //   image:
    //     "https://images.unsplash.com/photo-1550070881-a5d71eda5800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080",
    // },
  ],
};

function Services() {
  return <Gallery4 {...demoData} />;
}

export { Services };
