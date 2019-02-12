import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps({renderPage}) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    )

    const styleTags = sheet.getStyleElement();

    return { ...page,  styleTags }
  }

  render() {
    return (
      <html>
        <Head>
            <title>Crossfit Death or Glory</title>
            <meta name="description" content="CrossFit Death or Glory. It’s just a name. But what it stands for is 
                        something much much more. We provide a vehicle for change. 
                        We provide an escape from the norm. A community of like minded 
                        individuals who don’t settle for anything less than all in." />
            <meta name="keywords" content="crossfit, benton, newcastle, fitness, health, gym, workout, wod"/>            
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="theme-color" content="#f1f1f1"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link rel="manifest" href="/static/manifest.json" />
            {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script dangerouslySetInnerHTML={{__html: `
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.register('/sw.js');
            }
          `}} />
        </body>
      </html>
    )
  }
}