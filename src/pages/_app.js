import { useEffect } from "react";
import Router, { useRouter } from "next/router";
import Head from "next/head";
import Header from "../components/Header";
import SectionContainer from "../components/SectionContainer";
import * as gtag from "../lib/gtag";
import "../styles/tailwind.css";
import "../styles/styles.css";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <div className="min-h-screen antialiased bg-gray-200">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
        {/* <link rel="alternate" type="application/rss+xml" href="/feed.xml" /> */}
      </Head>
      {/*<SectionContainer> <Header /> </SectionContainer>*/}
      {router.pathname !== "/" ? (
        <SectionContainer>
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
        </SectionContainer>
      ) : (
        <main>
          <Component {...pageProps} />
        </main>
      )}
    </div>
  );
};

export default MyApp;
