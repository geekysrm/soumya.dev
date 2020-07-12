import { parseISO, format } from "date-fns";

export default function Layout(frontMatter) {
  return ({ children: content }) => {
    console.log(frontMatter);
    return (
      <div>
        {/* <h1>{frontMatter.title}</h1> */}
        <span>{format(parseISO(frontMatter.date), "MMMM dd, yyyy")}</span>

        {content}
      </div>
    );
  };
}
