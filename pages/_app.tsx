import "../global.css";
import theme from "../theme";
import "tailwindcss/tailwind.css";

import Head from "next/head";
import * as React from "react";

import { Windmill } from "@windmill/react-ui";
import { RenderWhere } from "../components/RenderWhere";
import { PageWithLayoutType } from "../types/PageWithLayoutType";

type AppLayoutProps = {
  Component: PageWithLayoutType;
  pageProps: any;
};

export default function App({
  Component,
  pageProps,
}: AppLayoutProps): JSX.Element {
  const Layout = Component.layout || ((children) => <>{children}</>);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>App</title>
      </Head>

      <RenderWhere server>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RenderWhere>

      <RenderWhere client>
        <Windmill theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Windmill>
      </RenderWhere>
    </>
  );
}
