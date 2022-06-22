import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>E-Commerce</title>
      <meta name="description" content="A NextJS + Typescript E-Commerce Project." />
      <link rel="shortcut icon" href="/favicon.png/" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
