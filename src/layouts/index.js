import { parseISO, format } from "date-fns";

import Header from "../components/Header";
import Utterances from "../components/Utterances";

// To add layout for blog
// show title, author(me) with photo, date, time to read, nProgressbar, (views?)
// add SEO, Meta stuff for each blog

// to use prose class more correctly
//  <article>
//      <header><h1>{heading}</h1></header>
//      <div>
//          <div>{author, time to read, date etc (or incl. this inside<header>)}</div>
//              <div className={prose classes}>{markdown content}</div>
//      </div>
// </article>

export default function Layout(frontMatter) {
  return ({ children: content }) => {
    console.log(frontMatter);
    return (
      <>
        <Header />
        <article className="flex justify-between">
          <div>
            <header>
              <h1 className="text-3xl font-bold">{frontMatter.title}</h1>
            </header>
            <div>
              {/* <span>{frontMatter.readingTime.text}</span>
        <span>{format(parseISO(frontMatter.date), "MMMM dd, yyyy")}</span> */}
            </div>
            {/* Add more responsive styles to {content} below */}
            <div className="prose lg:prose-lg">{content}</div>
          </div>
          {/* TODO: Display author info in other way on screens smaller than below breakpoint */}
          <div className="flex-1 hidden ml-4 bg-yellow-200 md:block">
            <h3 className="text-xl font-semibold">Author</h3>
            <div>
              <img
                className="w-24 rounded-full"
                alt="Soumya Ranjan Mohanty (geekySRM)"
                src="https://pbs.twimg.com/profile_images/1172203214797725697/z4XfgoXy_400x400.jpg"
              />
              <p>
                I'm Soumya, a software engineer and open-sourcer. I am a Google
                certified MWS and I like to tinker around with new technologies,
                write about them and build projects with them.
              </p>
              <strong>Join the newsletter</strong>
              <form
                className=""
                action="https://tinyletter.com/geekysrm"
                method="post"
                target="popupwindow"
                onsubmit="window.open('https://tinyletter.com/geekysrm', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
              >
                <p>
                  <label htmlFor="tlemail">Enter your email address</label>
                </p>
                <p>
                  <input
                    type="text"
                    style={{ width: "140px" }}
                    name="email"
                    id="tlemail"
                  />
                </p>
                <input type="hidden" defaultValue={1} name="embed" />
                <input type="submit" defaultValue="Subscribe" />
              </form>
              <div className="flex items-center">
                {/* Find & change color of below icon in iconfinder.com */}
                <img
                  className="w-10"
                  src="/img/coffee.svg"
                  alt="Buy me a coffee"
                />
                <a
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
          </div>
        </article>
        {/* Comments below */}
        <Utterances repo="geekysrm/soumya.dev" theme="github-light" />
      </>
    );
  };
}
