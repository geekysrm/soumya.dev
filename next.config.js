const containers = require("remark-containers");
const headings = require("rehype-autolink-headings");
// TODO: Make rehype-autolink-headings work

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
  remarkPlugins: [containers],
  rehypePlugins: [headings],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: "prebuild|loader|both",
  },
  pageExtensions: ["js", "jsx", "md", "mdx"],
})(/* your normal nextjs config */);
