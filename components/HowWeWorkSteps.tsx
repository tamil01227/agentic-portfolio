"use client";
import { motion } from "framer-motion";

const steps = [
  ["Understand Your Challenge", "We learn about your business, existing workflows and the problems you want to solve."],
  ["Design the Right Solution", "We identify the right architecture, technologies and implementation approach."],
  ["Build & Integrate", "We develop, test and connect your solution with the systems you already use."],
  ["Deploy & Improve", "We deploy your solution and help improve its reliability, performance and scalability."],
];

const listVariants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.2, staggerChildren: 0.85 } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function HowWeWorkSteps() {
  return (
    <motion.ol
      className="grid gap-8 md:grid-cols-4"
      variants={listVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {steps.map(([title, description], i) => (
        <motion.li
          key={title}
          variants={stepVariants}
          className="relative h-full border-l border-brand/30 pb-2 pl-6 md:border-l-0 md:border-t md:pl-0 md:pt-7"
        >
          <span aria-hidden className="absolute -left-[13px] top-0 grid h-6 w-6 place-items-center rounded-full bg-brand text-xs font-semibold text-white md:-top-3 md:left-0">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
        </motion.li>
      ))}
    </motion.ol>
  );
}
