"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "The studio's sound made our small Delhi chat show sound like a national broadcast. Everything was crystal clear.",
    by: "Aditi, Host of The Delhi Dialogues",
    imgSrc: "https://i.pravatar.cc/150?img=21"
  },
  {
    tempId: 1,
    testimonial: "Their 24/7 booking saved our international interviews. We recorded at odd hours and never missed a guest.",
    by: "Rajesh, Producer at Mumbai Morning Show",
    imgSrc: "https://i.pravatar.cc/150?img=22"
  },
  {
    tempId: 2,
    testimonial: "I thought video podcasting would need a big budget. AM Studio helped us launch professionally on a startup budget.",
    by: "Sanjay, Founder at Startup Katta",
    imgSrc: "https://i.pravatar.cc/150?img=23"
  },
  {
    tempId: 3,
    testimonial: "The in-studio technician sorted levels and room tone instantly. We saved so much time in post.",
    by: "Rohit, Host of Bengaluru Bytes",
    imgSrc: "https://i.pravatar.cc/150?img=24"
  },
  {
    tempId: 4,
    testimonial: "We tried cheaper places in Delhi, but the final audio never matched. AM Studio is where serious creators go.",
    by: "Meera, Head of Content at BrandKart",
    imgSrc: "https://i.pravatar.cc/150?img=25"
  },
  {
    tempId: 5,
    testimonial: "Their editors return episodes ready-to-publish within days. It keeps our weekly schedule intact.",
    by: "Ishaan, Producer at Weekend Stories",
    imgSrc: "https://i.pravatar.cc/150?img=26"
  },
  {
    tempId: 6,
    testimonial: "From the acoustics to the chai, the whole experience felt premium. Perfect place to focus and record.",
    by: "Priya, Marketing Lead at LocalWorks",
    imgSrc: "https://i.pravatar.cc/150?img=27"
  },
  {
    tempId: 7,
    testimonial: "The gear they provide is pro-grade — better than anything we could assemble ourselves.",
    by: "Amit, Sound Engineer at EchoLabs",
    imgSrc: "https://i.pravatar.cc/150?img=28"
  },
  {
    tempId: 8,
    testimonial: "It's simply the best studio experience we've had in Delhi. Consistent, clean, and reliable.",
    by: "Nisha, UX Designer at UserFirst India",
    imgSrc: "https://i.pravatar.cc/150?img=29"
  },
  {
    tempId: 9,
    testimonial: "I booked a sunrise slot to accommodate a celebrity guest — seamless experience and perfect output.",
    by: "Karan, Marketing Head at CloudMitra",
    imgSrc: "https://i.pravatar.cc/150?img=30"
  },
  {
    tempId: 10,
    testimonial: "Our listener numbers improved noticeably after switching to AM Studio — quality truly converts.",
    by: "Pooja, Sales Director at RevenueWave",
    imgSrc: "https://i.pravatar.cc/150?img=31"
  },
  {
    tempId: 11,
    testimonial: "The engineer caught a subtle phase issue I would have missed. That attention to detail is invaluable.",
    by: "Anjali, HR Manager at TalentForge India",
    imgSrc: "https://i.pravatar.cc/150?img=32"
  },
  {
    tempId: 12,
    testimonial: "We sometimes just rent the space for crisp internal video shoots — everything looks professional on camera.",
    by: "Saurabh, Customer Success Manager at ClientCare India",
    imgSrc: "https://i.pravatar.cc/150?img=33"
  },
  {
    tempId: 13,
    testimonial: "My co-host records remotely and the technician blended the feeds perfectly. Felt like we were in the same room.",
    by: "Ravi, Operations Manager at Streamline Solutions",
    imgSrc: "https://i.pravatar.cc/150?img=34"
  },
  {
    tempId: 15,
    testimonial: "AM Studio made my indie podcast sound like a studio production. The polish and support are unmatched.",
    by: "Vikram, Independent Podcaster",
    imgSrc: "https://i.pravatar.cc/150?img=35"
  },
  {
    tempId: 16,
    testimonial: "Their flexible packages let us scale up during launches and scale down later — perfect for our seasonal needs.",
    by: "Neha, Innovation Lead at FutureTech India",
    imgSrc: "https://i.pravatar.cc/150?img=36"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={`absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out ${
        isCenter 
          ? "z-10 bg-blue-600 text-white border-blue-600" 
          : "z-0 bg-zinc-900 text-white border-zinc-700 hover:border-blue-500"
      }`}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px #3f3f46" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-zinc-700"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-14 w-12 bg-zinc-800 object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px #18181b"
        }}
      />
      <h3 className="text-base sm:text-xl font-medium text-white">
        "{testimonial.testimonial}"
      </h3>
      <p className={`absolute bottom-8 left-8 right-8 mt-2 text-sm italic ${
        isCenter ? "text-white/80" : "text-zinc-400"
      }`}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export default function   StaggerTestimonials(): React.ReactElement {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps:any) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div id="testimonials" className="relative w-full overflow-hidden bg-zinc-950">
      <div className="px-8 pt-12 pb-8 sm:px-12 relative z-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Testimonials
        </h2>
        <p className="text-lg text-zinc-400 max-w-2xl">
          Don't just take our word for it. Here's what our customers have to say about their experience with AM Studios.
        </p>
      </div>
      <div className="relative w-full" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 z-20">
          <button
            onClick={() => handleMove(-1)}
            className="flex h-14 w-14 items-center justify-center text-2xl transition-colors bg-zinc-900 border-2 border-zinc-700 hover:bg-blue-600 hover:text-white text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            aria-label="Previous testimonial"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => handleMove(1)}
            className="flex h-14 w-14 items-center justify-center text-2xl transition-colors bg-zinc-900 border-2 border-zinc-700 hover:bg-blue-600 hover:text-white text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            aria-label="Next testimonial"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}