import { Header } from "./Header.js";
import { Footer } from "./Footer.js";

export function Layout({ children, title, footer = true, description }) {
  return (
    <>
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </head>
      <Header />
      <main className="max-w-xl m-auto">{children}</main>
      {footer && <Footer />}
    </>
  );
}
