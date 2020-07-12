import { parseISO, format } from "date-fns";

// To add layout for blog
// show title, author(me) with photo, date, time to read, nProgressbar, (views?)
// add SEO, Meta stuff for each blog
export default function Layout(frontMatter) {
  return ({ children: content }) => {
    console.log(frontMatter);
    return (
      <div>
        <h1 className="text-3xl font-bold">{frontMatter.title}</h1>
        <span>{frontMatter.readingTime.text}</span>
        <span>{format(parseISO(frontMatter.date), "MMMM dd, yyyy")}</span>

        {content}
      </div>
    );
  };
}
