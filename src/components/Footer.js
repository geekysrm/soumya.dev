import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between py-10">
      <div>
        <Link href="/">
          <a aria-label="Home - soumya.dev">
            {/* <TailwindMark className="h-6 sm:hidden" />
            <TailwindLogo className="hidden h-6 sm:block" /> */}
            geekySRM
          </a>
        </Link>
      </div>
      <div className="text-base leading-5">
        <a
          href="https://coffee.soumya.dev"
          className="font-medium text-gray-500 hover:text-gray-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy me a coffee &rarr;
        </a>
      </div>
    </footer>
  );
}
