import Head from 'next/head'

export default ({children}) => (<div>
  <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@atilafassina" />
      <meta name="og:title" content="Atila Fassina" />
      <meta name="og:url" content="https://atilafassina.com" />
      <meta name="description" content="Frontend Developer" />
      <meta name="og:description" content="Frontend Developer" />
      <meta name="og:image" content="https://atilafassina.com/static/logo.png" />
      <title>Atila Fassina: Frontend</title>
  </Head>
  <main>
    {children}
  </main>
  <style jsx global>{`
    html, body {
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-weight: 200;
      line-height: 1.2;
      background-color: white;
      box-sizing: border-box;
    }
    ul { margin: 0; padding: 0;}
    h1,h2,h3,h4, strong { font-weight: 200 }
  `}</style>
</div>)
