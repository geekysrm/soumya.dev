// Layout for blog post
import { parseISO, format } from "date-fns";
import Link from "next/link";
import Head from "next/head";

import Header from "../components/Header";
import Utterances from "../components/Utterances";
import NewsLetterForm from "../components/NewsLetterForm";
import IconClock from "../components/SVGIcons/IconClock";

// To add layout for blog
// show title, author(me) with photo, date, time to read, nProgressbar, (views?)
// add SEO, Meta stuff for each blog

export default function Layout(frontMatter) {
  return ({ children: content }) => {
    return (
      <>
        <Head>
          <title>{frontMatter.title} - Soumya's blog</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Header />
        <article className="flex justify-between">
          <div className="md:w-2/3">
            <header>
              <h1 className="text-3xl font-bold">{frontMatter.title}</h1>
            </header>
            <div className="flex items-center mt-2 font-medium text-gray-600 text-md">
              <span>{format(parseISO(frontMatter.date), "MMMM dd, yyyy")}</span>
              <div className="flex items-center ml-5">
                <IconClock className="w-4 h-4" />
                <span className="ml-1">{frontMatter.readingTime.text}</span>
              </div>
            </div>
            {/* Add more responsive styles to {content} below */}
            <div className="mt-5 prose lg:prose-lg">{content}</div>
          </div>
          {/* TODO: Display author info in other way on screens smaller than below breakpoint */}
          <aside className="flex-1 hidden h-full px-5 py-3 ml-4 bg-yellow-200 md:block">
            <h3 className="text-xl font-semibold">Author</h3>
            <div>
              <div>
                <img
                  className="w-24 mt-3 rounded-full"
                  alt="Soumya Ranjan Mohanty (geekySRM)"
                  src="/static/images/soumya.jpg"
                />
              </div>
              <p className="mt-3">
                I'm{" "}
                <Link href="/">
                  <a>Soumya</a>
                </Link>
                , a software engineer and open-sourcer. I am a{" "}
                <a
                  href="https://www.credential.net/9h8314eo?key=219f5a29de9f98ac6d2def0a89a0a38c7f1ffe5e"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google certified MWS
                </a>{" "}
                and I like to tinker around with new technologies,{" "}
                <Link href="/blog">
                  <a>write</a>
                </Link>{" "}
                about them and build{" "}
                <a
                  href="https://github.com/geekysrm?tab=repositories&type=source"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  projects
                </a>{" "}
                with them.
              </p>
              {/* TODO: Add newsletter form */}
              {/* <div className="px-0 mt-3 bg-gray-100">
                <NewsLetterForm />
              </div> */}
              <div className="flex items-center mt-3">
                <img
                  className="w-10 -mt-2"
                  src="/static/images/coffee.svg"
                  alt="Buy me a coffee"
                />
                <a
                  className="ml-2"
                  href="https://coffee.soumya.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy me a coffee
                </a>
              </div>
              {/* TODO: Add Subscribe to RSS */}
              {/* TODO: add Search anything in this site field */}
            </div>
          </aside>
        </article>
        {/* Comments below */}
        <hr className="mt-12 mb-4" />
        <Utterances repo="geekysrm/soumya.dev" theme="github-light" />
      </>
    );
  };
}
