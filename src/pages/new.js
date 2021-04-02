// New homepage at /
import { motion } from "framer-motion";

export default function NewSite() {
  return (
    <div>
      <section className="px-4 pt-20">
        <h1 className="flex text-5xl font-extrabold">
          Hi, I'm Soumya
          <motion.div
            className="ml-2"
            animate={{
              rotate: [0.0, 14.0, -8.0, 14.0, -4.0, 10.0, 0.0, 0.0],
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1],
              loop: Infinity,
              repeatDelay: 1,
            }}
          >
            👋
          </motion.div>
        </h1>
        <p className="mt-2 text-lg">
          Software Developer building useful and accessible applications.
        </p>
        <a
          href="mailto:hey@soumya.dev"
          className="inline-block px-6 py-2 mt-4 font-bold text-white bg-blue-500 border-gray-600"
        >
          Say Hello
        </a>
      </section>
    </div>
  );
}
