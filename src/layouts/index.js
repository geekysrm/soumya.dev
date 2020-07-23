import { parseISO, format } from "date-fns";

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
      <article>
        <header>
          <h1 className="text-3xl font-bold">{frontMatter.title}</h1>
        </header>
        <div>
          {/* <span>{frontMatter.readingTime.text}</span>
        <span>{format(parseISO(frontMatter.date), "MMMM dd, yyyy")}</span> */}
        </div>
        <div className="prose lg:prose-xl">{content}</div>
      </article>
    );
  };
}
