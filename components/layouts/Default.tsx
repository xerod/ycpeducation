import Head from "next/head";
import React from "react";
import Navbar from "../modules/Navbar";

type DefaultLayoutProps = {
  children: React.ReactElement;
};

const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Head>
        <title>YCP Education</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {children}
    </div>
  );
};

export default DefaultLayout;
