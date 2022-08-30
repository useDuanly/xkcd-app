import Head from "next/head";
import { Layout } from "components/Layout.js";
import Link from "next/link";
import Image from "next/image";
import { search } from "services/search.js";
import { useI18N } from "context/i18n.js";

export default function Component({ query, results }) {
  const { t } = useI18N();

  return (
    <>
      <Layout
        title={`xkcd || Results for ${query}`}
        description={`Search results for ${query}`}
      >
        <h1>{t("SEARCH_RESULTS_TITLE", results.length, query)}</h1>
        {results.map((result) => {
          const { id, img, alt, title } = result;
          return (
            <Link href={`/comic${id}`} key={id}>
              <a className="flex flex-grow content-center justify-start bg-slate-300 hover:bg-slate-50">
                <Image
                  width="50"
                  height="50"
                  src={img}
                  alt={alt}
                  className="rounded-full"
                />
                <div>
                  <h2>{title}</h2>
                </div>
              </a>
            </Link>
          );
        })}
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { q = "" } = query;

  const { results } = await search({ query: q });

  // llamar a la api de Algolia para buscar los resultados
  return {
    props: {
      query: q,
      results,
    },
  };
}
