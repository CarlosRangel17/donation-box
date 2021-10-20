import * as React from "react";
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";
import WindowDimensionsProvider from "~contexts/window-dimensions";

const defaultTitle = "Donation Box";
const defaultDescription = "Donation Box to donate funds to the Görli Network";
const defaultOGURL = "";
const defaultOGImage = "";

type Props = {
  description?: string;
  ogImage?: string;
  title?: string;
  url?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = defaultTitle,
  description = defaultDescription,
  url = defaultOGURL,
  ogImage = defaultOGImage,
}) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <title>{title || defaultTitle}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta content={description || defaultDescription} name="description" />
      <link
        href="/ethereum-favicon.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link
        href="/ethereum-favicon.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link href="/ethereum-favicon.ico" rel="shortcut icon" />
      <link
        href="/ethereum-favicon.png"
        rel="ethereum-favicon"
        sizes="180x180"
      />
      <link color="#000000" href="/favicon-mask.svg" rel="mask-icon" />
      <meta content={url || defaultOGURL} property="og:url" />
      <meta content={title || ""} property="og:title" />
      <meta
        content={description || defaultDescription}
        property="og:description"
      />
      <meta content={url || defaultOGURL} name="twitter:site" />
      <meta content={ogImage || defaultOGImage} name="twitter:image" />
      <meta content={ogImage || defaultOGImage} property="og:image" />
    </Head>
    <Header />
    <WindowDimensionsProvider>
      <main>{children}</main>
    </WindowDimensionsProvider>
    <Footer />
  </>
);

export default Layout;
