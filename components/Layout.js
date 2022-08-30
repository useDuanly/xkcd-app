import { Header } from "./Header.js";
import { Footer } from "./Footer.js";
import Head from "next/head.js";

export function Layout({ children, title, footer = true, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div>
        <Header />
        <main className="max-w-xl m-auto">{children}</main>
        {footer && <Footer />}
      </div>
    </>
  );
}
