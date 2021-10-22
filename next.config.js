const headings = require("rehype-autolink-headings");
const readingTime = require("reading-time");
const mdxPrism = require("mdx-prism");
// TODO: Make rehype-autolink-headings and mdxPrism work

// const withMDX = require("@next/mdx")({
//   extension: /\.(md|mdx)$/,
//   options: {
//     remarkPlugins: [containers],
//     rehypePlugins: [],
//   },
// });
// module.exports = withMDX({
//   // Pick up MDX files in the /pages/ directory
//   pageExtensions: ["js", "jsx", "md", "mdx"],
// });

const withMdxEnhanced = require("next-mdx-enhanced");

module.exports = withMdxEnhanced({
  layoutPath: "src/layouts",
  defaultLayout: true,
  fileExtensions: ["mdx"],
  remarkPlugins: [],
  rehypePlugins: [headings, mdxPrism],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => ({
      readingTime: readingTime(mdxContent),
    }),
    phase: "both",
  },
  pageExtensions: ["js", "jsx", "md", "mdx"],
})({
  images: {
    domains: ["cdn.hashnode.com"],
  },
});
