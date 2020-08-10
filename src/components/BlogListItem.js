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
    <Link href={`/${slug}`}>
      <a>
        <div className="px-4 py-4 mb-3 font-normal bg-gray-300">
          <div className="flex flex-col justify-between md:flex-row">
            <h3 className="mb-2 text-2xl font-semibold leading-snug">
              {title}
            </h3>
            <div className="flex items-center mb-2 space-x-2">
              {tagsInfoArray.map((tag) => (
                <p
                  key={tag.name}
                  className={`px-2 rounded ${tag.bgColor} ${tag.fontColor}`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
          <p className="text-gray-700">{description}</p>
        </div>
      </a>
    </Link>
  );
}

export default BlogListItem;
