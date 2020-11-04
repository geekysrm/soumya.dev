// layout for pages/uses.mdx
// (in the mdx file, pass layout as uses in frontmatter)
import { NextSeo } from "next-seo";
import getShareImage from "@jlengstorf/get-share-image";

export default function Layout({ frontMatter, children: content }) {
  const socialImage = getShareImage({
    title: "Uses - tools used by Soumya",
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

  return (
    <>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.description}
        openGraph={{
          title: frontMatter.title,
          description: frontMatter.description,
          images: [
            {
              url: socialImage,
              width: 1280,
              height: 720,
              alt: frontMatter.title,
            },
          ],
          type: "article",
          article: {
            authors: ["https://soumya.dev"],
          },
          url: "https://soumya.dev/uses",
        }}
        twitter={{
          cardType: "summary_large_image",
          site: "@geekysrm",
          creator: "@geekysrm",
        }}
      />
      <h1 className="text-3xl font-bold leading-snug md:text-4xl">My Setup</h1>
      <h2 className="mt-2 text-lg text-gray-600">
        I ocassionally get messages asking about tools, software or hardware I
        use. This page will remain as an up-to-date list of my setup.
      </h2>
      <div className="mt-5 prose-lg">{content}</div>
    </>
  );
}
