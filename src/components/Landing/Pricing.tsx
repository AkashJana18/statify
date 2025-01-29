import { plans } from "@/data/landing-page-data";
import Link from "next/link";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="h-full sm:w-[80%] flex flex-col items-center justify-center my-16 py-16"
    >
      <div className="mb-20">
        <h2 className="text-center font-bold text-4xl m-4">Pricing</h2>
        <p className="text-center texl-2xl text-foreground/80">
          Start today, upgrade later.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-transparent backdrop-blur-sm rounded-xl p-6 shadow-lg border border-purple-500/30 ${plan.highlightStyle}`}
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600/10 via-transparent to-transparent blur-lg pointer-events-none" />
            {plan.popular && (
              <div className="absolute top-[-12px] right-[-12px] bg-primary text-white px-3 py-1 rounded-full text-sm">
                Popular
              </div>
            )}
            <h3 className="text-xl font-bold text-primary text-center">
              {plan.name}
            </h3>
            <p className="mt-2 text-center ">{plan.description}</p>
            <div
              className="mt-6 text-4xl text-center font-bold text-foreground"
              dangerouslySetInnerHTML={{ __html: plan.price }}
            />
            <Link href={plan.link}>
              <button className="mt-4 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg w-full font-medium transition duration-200">
                {plan.buttonText}
              </button>
            </Link>
            <ul className="mt-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <span className="text-green-500 mr-2">&#10003;</span>{" "}
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
