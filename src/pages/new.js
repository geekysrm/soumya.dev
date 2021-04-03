// New homepage at /
import { motion } from "framer-motion";
import Link from "next/link";
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
    <div className="flex flex-row-reverse">
      <section className="w-1/2 px-4 pt-20">
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
            A{" "}
            <span className="font-semibold text-red-500">
              Software Developer
            </span>{" "}
            and <span className="font-semibold text-red-500">Maker</span> from
            India bringing <span className="text-red-500">ideas </span> to life
            with technology.
          </p>
          <p className="mt-2">
            You can read more{" "}
            <Link href="/about">
              <a>about me</a>
            </Link>{" "}
            or have a look at{" "}
            <Link href="/projects">
              <a>my projects</a>
            </Link>
            .
          </p>
        </div>
        <a
          href="mailto:hey@soumya.dev"
          className="inline-block px-5 py-2 mt-4 text-xl font-bold text-white bg-red-500 border-gray-600"
        >
          Say Hello
        </a>
      </section>
      <section className="w-1/2">
        <div className="flex justify-center">
          <img
            src="https://uploads-ssl.webflow.com/5e5fb69af39fe076e1ccecae/5ea5b46fa5a8d2aaf0ded525_About%20-%20laptop.svg"
            className="h-80"
          />
        </div>
        <div className="flex justify-center hidden mt-5 space-x-5">
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

// #ff3960
