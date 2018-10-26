import Head from "next/head";

export default ({ children }) => (
  <div>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@atilafassina" />
      <meta name="og:title" content="Atila Fassina: Web Developer" />
      <meta name="og:url" content="https://atila.fassina.eu" />
      <meta name="description" content="Web Developer" />
      <meta name="og:description" content="Web Developer" />
      <meta
        name="og:image"
        content="https://atila.fassina.eu/static/logo.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="static/favicon/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="static/favicon/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="static/favicon/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="static/favicon/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="static/favicon/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="static/favicon/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="static/favicon/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="static/favicon/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="static/favicon/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="static/favicon/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="static/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="static/favicon/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="static/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="static/favicon/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="static/favicon/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#ffffff" />
      <link rel="canonical" href="https://atila.fassina.eu/" />
      <title>Atila Fassina: Frontend</title>
    </Head>
    <main>{children}</main>
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol";
        font-weight: 200;
        line-height: 1.2;
        background-color: white;
        box-sizing: border-box;
      }
      ul {
        margin: 0;
        padding: 0;
      }
      h1,
      h2,
      h3,
      h4,
      strong {
        font-weight: 200;
      }
    `}</style>
  </div>
);
