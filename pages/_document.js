import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta charSet="utf-8" />
          <meta name="Description" content="Divici Art Services." />
          <link rel="SHORTCUT ICON" href="../static/favicon.ico" />
          <link rel="icon" href="../static/favicon.ico" type="image/ico" />
          <link rel="stylesheet" href="https://use.typekit.net/sui6kop.css" />
        </Head>
        <body className="body">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument