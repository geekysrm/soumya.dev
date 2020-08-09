import Link from "next/link";

function BlogListItem({ title, description, date, readingTime, slug, tags }) {
  // TODO: add Meta Tags to this page and all other non-post pages

  //   date: "2017-07-15"
  // description: "This is a test post." ​
  // readingTime: "1 min read"
  // slug: "hello-world"
  // tags: "next.js, javascript"
  // title: "Hello World"
  return (
    <div>
      Title: {title}
      Go read{" "}
      <Link href={`/${slug}`}>
        <a>here</a>
      </Link>
    </div>
  );
}

export default BlogListItem;
