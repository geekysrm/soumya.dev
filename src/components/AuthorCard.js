import Link from "next/link";
import Image from "next/image";

export default function AuthorCard() {
  return (
    <aside className="flex-1 h-full px-5 py-3 bg-yellow-100 md:ml-4 md:block">
      <h3 className="text-xl font-semibold">Author</h3>
      <div className="mt-2">
        <div>
          <Image
            className="w-24 mt-3 rounded-full"
            alt="Soumya Ranjan Mohanty (geekySRM)"
            src="/static/images/soumya.jpg"
            width="96"
            height="96"
          />
        </div>
        <p className="mt-3">
          I'm{" "}
          <Link href="/">
            <a>Soumya</a>
          </Link>
          , a software engineer and open-sourcer. I am a{" "}
          <a
            href="https://www.credential.net/9h8314eo?key=219f5a29de9f98ac6d2def0a89a0a38c7f1ffe5e"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google certified MWS
          </a>{" "}
          and I like to tinker around with new technologies,{" "}
          <Link href="/blog">
            <a>write</a>
          </Link>{" "}
          about them and build{" "}
          <a
            href="https://github.com/geekysrm?tab=repositories&type=source"
            target="_blank"
            rel="noopener noreferrer"
          >
            projects
          </a>{" "}
          with them.
        </p>
        {/* TODO: Add newsletter form */}
        {/* <div className="px-0 mt-3 bg-gray-100">
                <NewsLetterForm />
              </div> */}
        <div className="mt-2">
          <a
            className=""
            href="https://soumya.dev/newsletter"
            target="_blank"
            rel="noopener noreferrer"
          >
            Subscribe to my newsletter
          </a>
        </div>
        <div className="mt-2">
          <a
            className=""
            href="https://soumya.dev/newsletter"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy me a coffee
          </a>
        </div>

        {/* TODO: Add Subscribe to RSS */}
        {/* TODO: add Search anything in this site field */}
      </div>
    </aside>
  );
}
