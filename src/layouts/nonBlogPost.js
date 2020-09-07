// layout for a non-blogpost page like pages/uses.mdx
// (in the mdx file, pass layout as nonBlogPost in frontmatter)
import Head from "next/head";

import MetaTags from "../components/MetaTags";

export default function Layout(frontMatter) {
  return ({ children: content }) => {
    return (
      <>
        <Head>
          <title>{frontmatter.title}</title>
          <MetaTags
            title={title}
            author="Soumya Ranjan Mohanty (geekySRM)"
            description={frontMatter.description}
            type="article"
            url={url}
            image={socialImage}
            twitterHandle="@geekysrm"
          />
        </Head>
        <div className="mt-5 prose lg:prose-lg">{content}</div>
      </>
    );
  };
}
