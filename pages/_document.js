import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <title> Appscrip Store </title>
        <meta name="description" content="Shop the best products at Appscrip Store" />
        <meta property="og:title" content="Appscrip Store" />
        <meta property="og:description" content="Shop the best products at Appscrip Store" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/product.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
