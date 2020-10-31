// Add new /blog here
import Link from "next/link";
import normalize from "normalize-path";
import sortBy from "lodash.sortby";
import { NextSeo } from "next-seo";

import BlogListItem from "../components/BlogListItem";
import { frontMatter as originalBlogPosts } from "./**/index.mdx";

//TODO: Add search blog posts(algolia docsearch?)
//TODO: Search post by tags

export default function Blog() {
  const originalBlogPostsWithDate = originalBlogPosts.map((blogPost) => {
    return { ...blogPost, date: new Date(blogPost.date) };
  });
  const blogPosts = sortBy(originalBlogPostsWithDate, "date").reverse();
  return (
    <>
      <NextSeo
        title="Soumya's Blog - Soumya Ranjan Mohanty"
        description="Soumya's blog with tech articles revolving around web development and software development."
        openGraph={{
          title: "Soumya's Blog - Soumya Ranjan Mohanty",
          description:
            "Soumya's blog with tech articles revolving around web development and software development.",
          images: [
            {
              url:
                "https://res.cloudinary.com/geekysrm/image/upload/v1597093279/blog-og-image.png",
              width: 1280,
              height: 720,
              alt: "Soumya's Blog",
            },
          ],
          type: "article",
          article: {
            authors: ["https://soumya.dev"],
          },
          url: "https://soumya.dev/blog",
          twitter: {
            cardType: "summary_large_image",
            site: "@geekysrm",
            creator: "@geekysrm",
          },
        }}
      />
      <div>
        <h1 className="text-3xl font-bold leading-snug md:text-4xl">Blog</h1>
        <h2 className="text-lg text-gray-600">
          Articles, tutorials, snippets, reflections, and everything else.
        </h2>
        {/* Search blog text box and tags? go here */}
        <div className="mt-8">
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
              <div key={slug}>
                <BlogListItem
                  title={title}
                  description={description}
                  date={date}
                  readingTime={readingTime.text}
                  tags={tags}
                  slug={slug}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
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
