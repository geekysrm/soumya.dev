const containers = require("remark-containers");

const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [containers],
    rehypePlugins: [],
  },
});
module.exports = withMDX({
  // Pick up MDX files in the /pages/ directory
  pageExtensions: ["js", "jsx", "md", "mdx"],
});
