import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/landing-page-data";

const FAQ = () => {


  return (
    // <div className="h-auto text-white py-12 px-6">
    //   <div className="max-w-4xl mx-auto">
    //     <h1 className="text-3xl font-bold text-center mb-8">
    //       Frequently Asked{" "}
    //       <span className="text-purple-600 dark:text-purple-400">
    //         Questions
    //       </span>
    //     </h1>
    //     <p>You&#8217;ve got questions, and we&#8217;ve got answers.</p>
    <section
      id="faq"
      className="relative h-full sm:w-[80%] py-16 bg-transparent backdrop-blur-sm border border-primary/25 rounded-lg my-16"
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600/10 via-transparent to-transparent blur-lg pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-800 dark:text-white">
            Frequently Asked{" "}
            <span className="text-purple-600 dark:text-purple-400">
              Question
            </span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mt-4">
            You&#8217;ve got questions, and we&#8217;ve got answers.
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="">
              <AccordionTrigger className="px-4 py-2 text-xl font-medium hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2 text-lg text-foreground/80">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
