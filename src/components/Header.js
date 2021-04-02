import Link from "next/link";

import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/">
          <a aria-label="geekySRM">
            {/* <TailwindMark className="h-6 sm:hidden" />
            <TailwindLogo className="hidden h-6 sm:block" /> */}
            <Logo />
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
    </header>
  );
}
