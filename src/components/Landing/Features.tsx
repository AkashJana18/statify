"use client";
import {
  IconCloud,
  IconDeviceAnalytics,
  IconLock,
  IconTrendingUp,
} from "@tabler/icons-react";

export const Features = () => {
  const features = [
    {
      icon: (
        <IconTrendingUp
          size={40}
          className="text-purple-600 dark:text-purple-400"
        />
      ),
      title: "Real-Time Analytics",
      description:
        "Monitor the performance of your websites, APIs, and databases with live metrics and visualizations.",
    },
    {
      icon: (
        <IconLock size={40} className="text-purple-600 dark:text-purple-400" />
      ),
      title: "Role-Based Access",
      description:
        "Secure your data with granular access control, ensuring the right users have the right permissions.",
    },
    {
      icon: (
        <IconDeviceAnalytics
          size={40}
          className="text-purple-600 dark:text-purple-400"
        />
      ),
      title: "Comprehensive Insights",
      description:
        "Dive deep into trends and patterns with detailed reports and customizable dashboards.",
    },
    {
      icon: (
        <IconCloud size={40} className="text-purple-600 dark:text-purple-400" />
      ),
      title: "Cloud Integration",
      description:
        "Easily integrate with cloud platforms and manage your services seamlessly from one interface.",
    },
  ];

  return (
    <section className="relative py-16 bg-transparent backdrop-blur-sm border border-primary/25 rounded-lg">
        
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600/10 via-transparent to-transparent blur-lg pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-800 dark:text-white">
            Why Choose{" "}
            <span className="text-purple-600 dark:text-purple-400">
              Statify
            </span>
            ?
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mt-4">
            Powerful features to monitor, analyze, and optimize your services
            with ease.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-background/50 rounded-lg shadow-purple-500/20 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-shadow duration-300 border"
            >
              {/* Icon */}
              <div className="mb-4">{feature.icon}</div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-white">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
