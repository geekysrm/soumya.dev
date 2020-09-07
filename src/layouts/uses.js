// layout for pages/uses.mdx
// (in the mdx file, pass layout as uses in frontmatter)
import Head from "next/head";

import getShareImage from "@jlengstorf/get-share-image";
import MetaTags from "../components/MetaTags";

export default function Layout(frontMatter) {
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

  return ({ children: content }) => {
    return (
      <>
        <Head>
          <title>{frontMatter.title}</title>
          <MetaTags
            title={frontMatter.title}
            author="Soumya Ranjan Mohanty (geekySRM)"
            description={frontMatter.description}
            type="article"
            url={"https://soumya.dev/uses"}
            image={socialImage}
            twitterHandle="@geekysrm"
          />
        </Head>
        <div className="mt-5 prose lg:prose-lg">{content}</div>
      </>
    );
  };
}
