// Add new /blog here
import Link from "next/link";

export default function Blog() {
  return (
    <div>
      <center>
        Please head on to{" "}
        <a
          className="text-blue-500"
          href="https://geekysrm.github.io/blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          this website
        </a>{" "}
        or{" "}
        <a
          className="text-blue-500"
          href="https://medium.com/@geekysrm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Medium
        </a>{" "}
        to view my posts.
        <br />
        <Link href="/">
          <a className="text-sm hover:underline">← Back to soumya.dev</a>
        </Link>
      </center>
    </div>
  );
}
