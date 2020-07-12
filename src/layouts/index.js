export default function Layout(frontMatter) {
  return ({ children: content }) => {
    console.log(frontMatter);
    return (
      <div>
        {/* <h1>{frontMatter.title}</h1> */}
        {content}
      </div>
    );
  };
}
