import { ContainerScroll, CardSticky } from "@/components/ui/card-stack"

const PROCESS_PHASES = [
  {
    id: "process-1",
    title: "24/7 Availability & Booking",
    description:
      "Book Sessions at Your Convenience - We understand that your team and guests have varied schedules. Our facility is open around the clock, allowing you to book high-quality recording sessions at any time that best suits your production needs - morning, night, or weekend."
  },
  {
    id: "process-2",
    title: "Professional-Grade Gear",
    description:
    "Broadcast-Quality Equipment for Flawless Production - You'll record with industry-leading gear, from broadcast microphones (like the Shure SM7B) to multi-camera setups. This professional-grade equipment ensures your final audio and video output is clean, crisp, and ready for any major platform."
  },
  {
    id: "process-3",
    title: "On-Site Technical Support",
    description:
    "Expert Engineers and Operators for Pro Sessions - Don't worry about the technical details. Our professional engineers and camera operators are available on-site for Pro sessions to handle audio levels, lighting, video feeds, and troubleshooting, letting you focus entirely on your content."
  },
  {
    id: "process-4",
    title: "Fast Delivery",
    description:
    "Reliable Timelines for Raw and Edited Files - We prioritize efficiency without sacrificing quality. Receive your raw and fully edited files delivered promptly within agreed-upon timelines, helping you maintain a consistent publishing schedule and stay ahead of your content calendar."
  },
  {
    id: "process-5",
    title: "Flexible Packages",
    description:
    "Plans Scaled to Fit Every Creator and Brand - Whether you need a quick session or a long-term home, we offer packages designed for every scale. Choose from hourly, monthly, half-yearly, and yearly plans to find the booking structure that perfectly matches your budget and production frequency."
  },
  {
    id: "process-6",
    title: "Acoustically Perfect Environment",
    description:
    "Engineered for Zero Sound Reflection - Our studios feature premium acoustic treatment and soundproofing specifically designed to eliminate reverb, echoes, and outside noise. This means you capture cleaner, richer audio right from the source, saving significant time in post-production."
  },
  {
    id: "process-7",
    title: "Prime Location & Accessibility",
    description:
    "We chose our location to be highly accessible for you and your high-profile guests. Our convenient, central setting in Dwarka (401 & 402, 4th Floor, The Cloverleaf, Sector 11, Delhi 110078) minimizes travel stress, making it easier to book interviews and maintain a consistent recording schedule."
  },
  // {
  //   id: "process-5",
  //   title: "Launch and Support",
  //   description:
  //     "Our commitment continues beyond launch. We offer post-launch support to address questions, provide assistance, and ensure your website remains updated and optimized. The Website Design Process isn't just about creating a website; it's about crafting a digital experience that resonates, engages, and converts.",
  // },
]

const WORK_PROJECTS = [
  {
    id: "work-project-3",
    title: "YCF DEV",
    services: ["Portfolio", "Partnership", "UI UX Design"],
    imageUrl:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "work-project-1",
    title: "Stridath Ecommerce",
    services: ["E-Commerce", "Branding", "UI UX Design", "Development"],
    imageUrl:
      "https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "work-project-2",
    title: "Marketing Agency",
    services: ["Partnership", "UI UX Design", "Development"],
    imageUrl:
      "https://images.unsplash.com/photo-1683803055067-1ca1c17cb2b9?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

const ACHIEVEMENTS = [
  {
    id: "achivement-1",
    title: "4",
    description: "site of the day",
    bg: "rgb(58,148,118)",
  },
  {
    id: "achivement-2",
    title: "60+",
    description: "website created",
    bg: "rgb(195,97,158)",
  },
  {
    id: "achivement-3",
    title: "5+",
    description: "years of experience",
    bg: "rgb(202,128,53)",
  },
  {
    id: "achivement-4",
    title: "6+",
    description: "component created",
    bg: "rgb(135,95,195)",
  },
]

const Process = () => {
  return (
    <div id="about" className="container min-h-svh place-content-center bg-zinc-950 px-6 text-zinc-100 xl:px-12">
      <div className="grid md:grid-cols-2 md:gap-8 xl:gap-12">
        <div className="left-0 top-0 md:sticky md:h-svh md:py-12">
          <h5 className="text-xs uppercase tracking-wide text-zinc-400">why choose us</h5>
          <h2 className="mb-6 mt-4 text-4xl font-bold tracking-tight">
            Plan your next{" "}
            <span className="text-indigo-400">podcast recording</span> journey with us
          </h2>
          <p className="max-w-prose text-sm text-zinc-400">
            Our journey begins with a deep dive into your vision. In the
            Discovery phase, we engage in meaningful conversations to grasp your
            brand identity, goals, and the essence you want to convey. This
            phase sets the stage for all that follows.
          </p>
        </div>
        <ContainerScroll className="min-h-[400vh] space-y-8 py-12">
          {PROCESS_PHASES.map((phase, index) => (
            <CardSticky
              key={phase.id}
              index={index + 2}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/90 p-8 shadow-md backdrop-blur-md"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="my-6 text-2xl font-bold tracking-tighter text-zinc-100">
                  {phase.title}
                </h2>
                <h3 className="text-2xl font-bold text-indigo-400">
                  {String(index + 1).padStart(2, "0")}
                </h3>
              </div>

              <p className="text-zinc-300">{phase.description}</p>
            </CardSticky>
          ))}
        </ContainerScroll>
      </div>
    </div>
  )
}

const Work = () => {
  return (
    <div className="container min-h-svh place-content-center bg-slate-950 p-12 text-zinc-50">
      <div className="text-center">
        <h5 className="text-xs uppercase tracking-wide text-zinc-400">latest projects</h5>
        <h2 className="mb-4 mt-1 text-4xl font-bold tracking-tight">
          Get a glimpse of <span className="text-indigo-400">our work</span>
        </h2>
        <p className="mx-auto max-w-prose text-sm text-zinc-400">
          From ecommerce to startup landing pages and singl/multi page websites,
          building fully responsive and functional website that showcase your
          product and your unique identity.
        </p>
      </div>
      <ContainerScroll className="min-h-[500vh] py-12">
        {WORK_PROJECTS.map((project, index) => (
          <CardSticky
            key={project.id}
            index={index}
            className="w-full overflow-hidden rounded-sm border border-x-indigo-900 border-y-indigo-500 bg-indigo-950"
            incrementY={60}
            incrementZ={5}
          >
            <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
              <h2 className="text-2xl font-bold tracking-tighter">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-1">
                {project.services.map((service) => (
                  <div
                    key={service}
                    className="flex rounded-xl bg-indigo-900 px-2 py-1"
                  >
                    <span className="text-xs tracking-tighter text-zinc-300">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <img
              className="size-full object-cover"
              width="100%"
              height="100%"
              src={project.imageUrl}
              alt={project.title}
            />
          </CardSticky>
        ))}
      </ContainerScroll>
    </div>
  )
}

const Achievements = () => {
  return (
    <div className="bg-zinc-950">
      <ContainerScroll className="min-h-[400vh] place-items-center space-y-8 p-12 text-center text-zinc-50">
        {ACHIEVEMENTS.map((achievement, index) => (
          <CardSticky
            key={achievement.id}
            incrementY={20}
            index={index + 2}
            className="flex h-72 w-[420px] flex-col place-content-center justify-evenly rounded-2xl border border-current p-8 shadow-md"
            style={{ rotate: index + 2, background: achievement.bg }}
          >
            <h1 className="text-left text-6xl font-semibold opacity-80">
              {achievement.title}
            </h1>
            <div className="place-items-end text-right">
              <h3 className="max-w-[10ch] text-wrap text-4xl font-semibold capitalize tracking-tight">
                {achievement.description}
              </h3>
            </div>
          </CardSticky>
        ))}
      </ContainerScroll>
    </div>
  )
}

export { Process, Work, Achievements }