import { useEffect } from "react";
import type { AppProps } from "next/app";

import Layout from "@/components/Layout";
import Head from "@/components/Head";

import "@/styles/globals.css";
import "@/styles/themes.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, []);

  return (
    <Layout>
      <Head title={`Travis Zmotony | ${pageProps.title}`} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

# touched on 2025-05-27T16:49:15.392315Z
# touched on 2025-05-27T16:49:20.808642Z