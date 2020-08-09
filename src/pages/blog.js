// Add new /blog here
import Link from "next/link";
import normalize from "normalize-path";
import BlogListItem from "../components/BlogListItem";
import { frontMatter as blogPosts } from "./**/index.mdx";

export default function Blog() {
  return (
    <div>
      <h2>Hello</h2>
      {blogPosts.map((blogPost) => {
        const {
          title,
          description,
          date,
          readingTime,
          tags,
          __resourcePath,
        } = blogPost;
        const resourcePathArray = normalize(__resourcePath).split("/");
        const slug = resourcePathArray[resourcePathArray.length - 2];
        return (
          <BlogListItem
            key={slug}
            title={title}
            description={description}
            date={date}
            readingTime={readingTime.text}
            tags={tags}
            slug={slug}
          />
        );
      })}
    </div>
  );
  return (
    <div>
      <center>
        Please head on to{" "}
        <a
          className="text-blue-500"
          href="https://geekysrm.github.io/blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          this website
        </a>{" "}
        or{" "}
        <a
          className="text-blue-500"
          href="https://medium.com/@geekysrm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Medium
        </a>{" "}
        to view my posts.
        <br />
        <Link href="/">
          <a className="text-sm hover:underline">← Back to soumya.dev</a>
        </Link>
      </center>
    </div>
  );
}
