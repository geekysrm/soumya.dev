import Link from "next/link";
import getTagsInfo from "../lib/getTagsInfo";

function BlogListItem({ title, description, date, readingTime, slug, tags }) {
  // TODO: add Meta Tags to this page and all other non-post pages

  //   date: "2017-07-15"
  // description: "This is a test post." ​
  // readingTime: "1 min read"
  // slug: "hello-world"
  // tags: "next.js, javascript"
  // title: "Hello World"

  const tagsArray = tags.split(",").map((tag) => `${tag.trim()}`);
  const tagsInfoArray = getTagsInfo(tagsArray);

  return (
    <div className="mb-3 bg-gray-300">
      <div>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <div className="flex space-x-2">
          {tagsInfoArray.map((tag) => (
            <span
              key={tag.name}
              className={`px-2 rounded ${tag.bgColor} ${tag.fontColor}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
      <p>{description}</p>
      {/* Go read{" "}
      <Link href={`/${slug}`}>
        <a>here</a>
      </Link> */}
    </div>
  );
}

export default BlogListItem;
