"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { testimonials, useCases } from "@/data/landing-page-data";
// Import Tabler icons

export const Testimonials = () => {


  return (
    <section id="testimonials" className="py-16 sm:w-[80%] my-16 h-full">
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
                  className="p-2 border rounded-lg shadow-purple-500/20 shadow-md hover:scale-105"
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
            <p className="text-foreground/80 text-center p-1">See User&apos;s Opinion</p>
            <AnimatedTestimonials testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
};
