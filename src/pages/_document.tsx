import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Fonts - preload the css first */}
          <link
            as="style"
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700;800;900&display=swap"
            rel="preload"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700;800;900&display=swap"
            rel="stylesheet"
          />
          {/* <script
            dangerouslySetInnerHTML={{
              __html: insertScriptHere
            }}
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
