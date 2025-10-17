"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "The sound quality is shockingly good. It instantly elevated our small show to a top-tier production.",
    by: "Aisha, Host of The Creator Economy",
    imgSrc: "https://i.pravatar.cc/150?img=1"
  },
  {
    tempId: 1,
    testimonial: "The 24/7 booking is a game-changer for our international guests. It means we never miss a crucial interview.",
    by: "Mark, Producer at Global Insights News",
    imgSrc: "https://i.pravatar.cc/150?img=2"
  },
  {
    tempId: 2,
    testimonial: "I thought I needed a huge budget for a video podcast, but AM Studio made it seamless and affordable.",
    by: "Chloe, CEO of TrendSpark Media",
    imgSrc: "https://i.pravatar.cc/150?img=3"
  },
  {
    tempId: 3,
    testimonial: "The in-studio technician was worth the entire session cost. Zero stress, perfect levels, every time.",
    by: "David, Host of The Daily Tech Breakdown",
    imgSrc: "https://i.pravatar.cc/150?img=4"
  },
  {
    tempId: 4,
    testimonial: "We tried cheaper studio rentals, but the final product always suffered. AM Studio is where serious brands go.",
    by: "Andre, Head of Design at CreativeSolutions",
    imgSrc: "https://i.pravatar.cc/150?img=5"
  },
  {
    tempId: 5,
    testimonial: "Their video editing team is fast. We get our episodes back ready-to-publish, which fits our weekly schedule.",
    by: "Jeremy, Product Manager at TimeWise",
    imgSrc: "https://i.pravatar.cc/150?img=6"
  },
  {
    tempId: 6,
    testimonial: "From the acoustics to the coffee, the entire experience is premium. It's the perfect environment.",
    by: "Pam, Marketing Director at BrandBuilders",
    imgSrc: "https://i.pravatar.cc/150?img=7"
  },
  {
    tempId: 7,
    testimonial: "The gear they have access to is better than anything we could buy ourselves. True professional-grade.",
    by: "Daniel, Data Scientist at AnalyticsPro",
    imgSrc: "https://i.pravatar.cc/150?img=8"
  },
  {
    tempId: 8,
    testimonial: "It's just the best. Period.",
    by: "Fernando, UX Designer at UserFirst",
    imgSrc: "https://i.pravatar.cc/150?img=9"
  },
  {
    tempId: 9,
    testimonial: "I literally booked a session at 3 AM to accommodate a celebrity guest. Best decision ever.",
    by: "Andy, Marketing Head at CloudMasters",
    imgSrc: "https://i.pravatar.cc/150?img=10"
  },
  {
    tempId: 10,
    testimonial: "The difference in our listener retention since moving to AM Studio is undeniable. Quality converts.",
    by: "Pete, Sales Director at RevenueRockets",
    imgSrc: "https://i.pravatar.cc/150?img=11"
  },
  {
    tempId: 11,
    testimonial: "The sound engineer caught an audio issue I never would have noticed. Their attention to detail is fantastic.",
    by: "Marina, HR Manager at TalentForge",
    imgSrc: "https://i.pravatar.cc/150?img=12"
  },
  {
    tempId: 12,
    testimonial:"We love that we can rent just the space for our internal video announcements—it looks crisp and professional.",
    by: "Olivia, Customer Success Manager at ClientCare",
    imgSrc: "https://i.pravatar.cc/150?img=13"
  },
  {
    tempId: 13,
    testimonial: "My co-host is remote, and the technician perfectly blended the remote audio feed with my studio mic.",
    by: "Raj, Operations Manager at StreamlineSolutions",
    imgSrc: "https://i.pravatar.cc/150?img=14"
  },
  {
    tempId: 15,
    testimonial: "AM Studio treats my independent podcast like a major broadcast show. That level of quality is unmatched.",
    by: "Trevor, Scaling Officer at GrowthGurus",
    imgSrc: "https://i.pravatar.cc/150?img=16"
  },
  {
    tempId: 16,
    testimonial: "Their flexible packages let us scale up during launch season and dial back during our breaks. Perfect fit.",
    by: "Naomi, Innovation Lead at FutureTech",
    imgSrc: "https://i.pravatar.cc/150?img=17"
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

export default function StaggerTestimonials(): React.ReactElement {
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