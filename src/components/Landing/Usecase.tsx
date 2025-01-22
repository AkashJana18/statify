"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

// Import Tabler icons
import { IconChartBar, IconGlobe, IconLink } from "@tabler/icons-react";

export const UseCases = () => {
  const useCases = [
    {
      title: "Monitor Website Performance",
      description:
        "Track key metrics like page load speed, uptime, and user interactions in real-time.",
      icon: <IconGlobe />,
    },
    {
      title: "Analyze API Usage",
      description:
        "Understand API requests, response times, and identify bottlenecks to improve efficiency.",
      icon: <IconLink />,
    },
    {
      title: "Database Insights",
      description:
        "Visualize query performance, database health, and trends over time.",
      icon: <IconChartBar />,
    },
  ];

  const testimonials = [
    {
      quote:
        "Statify's performance monitoring tools have revolutionized how we track and analyze our services. We've gained invaluable insights.",
      name: "Michael Rodriguez",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "With Statify, we've optimized our API performance and can now make data-driven decisions to improve our workflows.",
      name: "Sarah Chen",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Statify helped us uncover crucial insights about our database health, making it easier to optimize queries and improve performance.",
      name: "Noah Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and robust features of Statify have been invaluable in managing our data infrastructure. Highly recommend it!",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Statify's platform has significantly streamlined our data analysis, saving us hours of manual work and boosting team productivity.",
      name: "Liz Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="py-12 w-[80%] my-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[40%,60%] gap-12">
          {/* Use Cases on the left */}
          <div className="bg-transparent rounded-lg border border-primary/25 p-4 backdrop-blur-sm">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600/10 via-transparent to-transparent blur-lg pointer-events-none" />
            <h2 className="text-3xl text-center font-bold mb-6 text-foreground">
              Use{" "}
              <span className="text-purple-600 dark:text-purple-400">
                Cases
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="p-2 border rounded-lg shadow-purple-500/20 shadow-md"
                >
                  <div className=" text-purple-500 mb-4 inline-flex gap-2 border-b w-full">
                    {useCase.icon}
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials on the right */}
          <div className="bg-transparent border rounded-lg backdrop-blur-sm">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-bl from-purple-600/10 via-transparent to-transparent blur-lg pointer-events-none" />
            <h2 className="text-3xl text-center font-bold text-foreground mt-6">
              Testimonials
            </h2>
            <p className="text-foreground/80 text-center p-1">See User's Opinion</p>
            <AnimatedTestimonials testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
};
