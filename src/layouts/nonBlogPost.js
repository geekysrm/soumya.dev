// layout for a non-blogpost page like pages/uses.mdx
// (in the mdx file, pass layout as nonBlogPost in frontmatter)
export default function Layout(frontMatter) {
  return ({ children: content }) => {
    return (
      <>
        <div className="mt-5 prose lg:prose-lg">{content}</div>
      </>
    );
  };
}
