import { IconChartBar, IconGlobe, IconLink } from "@tabler/icons-react";
export const useCases = [
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

export const testimonials = [
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

// Pricing
export const plans = [
  {
    name: "Basic",
    description: "Ideal for individuals monitoring small-scale services.",
    price: "&euro; 0",
    features: [
      "Monitor up to 3 services",
      "Basic analytics and alerts",
      "Free community support",
    ],
    buttonText: "Get started",
    popular: false,
    highlightStyle: "",
    link: "/dashboard",
  },
  {
    name: "Pro",
    description:
      "Designed for professionals and small teams to manage services efficiently.",
    price: "&euro; 9.99",
    features: [
      "Monitor up to 10 services",
      "Advanced analytics and alerts",
      "Role-based access control",
      "Priority email support",
    ],
    buttonText: "Get Subscription",
    popular: true,
    highlightStyle: "relative sm:scale-125 z-30",
    link: "/payment",
  },
  {
    name: "Enterprise",
    description:
      "Tailored for large organizations with complex monitoring needs.",
    price: "Contact us",
    features: [
      "Unlimited services monitoring",
      "Comprehensive analytics",
      "Customizable dashboards",
      "Dedicated account manager",
    ],
    buttonText: "Contact sales",
    popular: false,
    highlightStyle: "",
    link: "mailto:akashjana663@gmail.com",
  },
];
// Feature Section
import {
  IconCloud,
  IconDeviceAnalytics,
  IconLock,
  IconTrendingUp,
} from "@tabler/icons-react";

export const features = [
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

// FAQ section
export const faqs = [
  {
    question: "Is there a free version of Statify?",
    answer:
      "Yes, our free plan offers basic monitoring features, including analytics and alerts for up to 3 services.",
  },
  {
    question: "What types of services can I monitor with Statify?",
    answer:
      "You can monitor websites, APIs, and databases, allowing you to track uptime, performance, and metrics.",
  },
  {
    question: "Does Statify support role-based access control?",
    answer:
      "Yes, our Pro and Enterprise plans offer role-based access control, enabling secure collaboration for teams.",
  },
  {
    question: "How secure is my data on Statify?",
    answer:
      "Statify uses end-to-end encryption and follows industry best practices to ensure your data is secure.",
  },
  {
    question: "Can I customize dashboards?",
    answer:
      "Yes, with our Pro and Enterprise plans, you can create and customize dashboards to suit your needs.",
  },
];
