// Layout for blog post
import { parseISO, format } from "date-fns";
import getShareImage from "@jlengstorf/get-share-image";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
} from "react-share";
import normalize from "normalize-path";
import { NextSeo } from "next-seo";
import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";

import Utterances from "../components/Utterances";
import NewsLetterForm from "../components/NewsLetterForm";
import IconClock from "../components/SVGIcons/IconClock";
import IconEdit from "../components/SVGIcons/IconEdit";
import AuthorCard from "../components/AuthorCard";

// show tags of post
// show nProgressbar, (views?)
// more SEO stuff to be added if needed

const components = {
  img: Image,
};

export default function Layout({ frontMatter, children: content }) {
  const tags = frontMatter.tags
    .split(",")
    .map((tag) => `#${tag.trim()}`)
    .join(" ");

  const socialImage = getShareImage({
    title: frontMatter.title,
    tagline: tags,
    cloudName: "geekysrm",
    imagePublicID: "soumya.dev/post-og-image",
    titleFont: "futura",
    taglineFont: "futura",
    textColor: "ffffff",
    taglineFontSize: 28,
    taglineFont: "Roboto%20Mono",
    textLeftOffset: 500,
    textAreaWidth: 800,
    titleBottomOffset: 300,
    taglineTopOffset: 420,
  });

  const resourcePathArray = normalize(frontMatter.__resourcePath).split("/");
  const slug = resourcePathArray[resourcePathArray.length - 2];
  const url = `https://soumya.dev/${slug}`;

  const title = `${frontMatter.title} - Soumya's blog`;

  return (
    <>
      <NextSeo
        title={title}
        description={frontMatter.description}
        openGraph={{
          title: title,
          description: frontMatter.description,
          images: [
            {
              url: socialImage,
              width: 1280,
              height: 720,
              alt: title,
            },
          ],
          type: "article",
          article: {
            authors: ["https://soumya.dev"],
          },
          url: url,
          twitter: {
            cardType: "summary_large_image",
            site: "@geekysrm",
            handle: "@geekysrm",
          },
        }}
      />
      <article className="flex flex-col justify-between md:flex-row">
        <div className="md:w-2/3">
          <header>
            <h1 className="text-3xl font-bold leading-snug md:text-4xl">
              {frontMatter.title}
            </h1>
          </header>
          <div className="flex items-center mt-2 font-medium text-gray-600 text-md">
            <span>{format(parseISO(frontMatter.date), "MMMM dd, yyyy")}</span>
            <div className="flex items-center ml-5">
              <IconClock className="w-4 h-4" />
              <span className="ml-1">{frontMatter.readingTime.text}</span>
            </div>
          </div>
          {/* Add more responsive styles to {content} below */}
          <div className="mt-5 prose lg:prose-lg">
            <MDXProvider components={components}>{content}</MDXProvider>
          </div>
        </div>
        <AuthorCard />
      </article>
      <div className="flex items-center mt-12 mb-4">
        <div className="flex-grow mr-4 border-t"></div>
        <a
          href={`https://github.com/geekysrm/soumya.dev/edit/master/src/pages/${slug}/index.mdx`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="flex items-center mr-5 text-sm text-gray-700">
            <IconEdit className="w-3 h-3 mr-1" />
            Edit post on GitHub
          </span>
        </a>
      </div>
      <div className="flex items-center mb-4">
        <span className="text-lg font-semibold">Share article:</span>
        <div className="flex ml-2 space-x-1">
          <TwitterShareButton title={title} via="geekysrm" url={url}>
            <TwitterIcon size={32} />
          </TwitterShareButton>
          <FacebookShareButton url={url} quote={title} via="geekysrm">
            <FacebookIcon size={32} />
          </FacebookShareButton>
          <LinkedinShareButton
            title={title}
            summary={frontMatter.description}
            url={url}
            source={"Soumya's blog"}
          >
            <LinkedinIcon size={32} />
          </LinkedinShareButton>
        </div>
      </div>
      {/* Comments below */}
      <Utterances repo="geekysrm/soumya.dev" theme="github-light" />
    </>
  );
}
