// New homepage at /
import { motion } from "framer-motion";
import {
  FaProductHunt,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaTwitch,
  FaDev,
  FaMedium,
} from "react-icons/fa";

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
        <div className="mt-6">
          <p className="text-2xl">
            A Software Developer from India bringing{" "}
            <span className="text-red-500">ideas</span> to life.
          </p>
          <p>
            You can read more <a>about me</a> or have a look at my{" "}
            <a>projects</a>.
          </p>
        </div>
        <a
          href="mailto:hey@soumya.dev"
          className="inline-block px-6 py-2 mt-4 font-bold text-white bg-red-500 border-gray-600"
        >
          Say Hello
        </a>
        <div className="flex mt-5 space-x-5">
          {/* Socials - add/remove links */}
          <a
            className="cursor-pointer"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaTwitter className="text-3xl text-blue-500 opacity-70" />
          </a>
          <a
            className="cursor-pointer"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaProductHunt className="text-3xl text-red-700 opacity-70" />
          </a>
          <a
            className="cursor-pointer"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaGithub className="text-3xl text-black-500 opacity-70" />
          </a>
          <a
            className="cursor-pointer"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaLinkedin className="text-3xl text-blue-500 opacity-70" />
          </a>
          <a
            className="cursor-pointer"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaYoutube className="text-3xl text-red-500 opacity-70" />
          </a>
          <a
            className="cursor-pointer"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaTwitch className="text-3xl text-purple-500 opacity-70" />
          </a>
          <a>
            <FaDev className="text-3xl text-black opacity-70" />
          </a>
          <a>
            <FaMedium className="text-3xl text-black opacity-70" />
          </a>
        </div>
      </section>
    </div>
  );
}
