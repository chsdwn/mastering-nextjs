import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { Router } from 'next/router';

interface IProps {
  date?: string;
  description?: string;
  image?: string;
  title?: string;
  keywords?: string;
  router?: Router;
  children: React.ReactNode;
}

export const Page: NextPage<IProps> = ({
  date,
  description,
  image,
  title,
  keywords,
  router,
  children,
}) => {
  const domain = 'http://localhost:3000';
  const url = router && router.asPath ? router.asPath : undefined;
  const cannonical = url && url === '/' ? domain : domain + url;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        {description && <meta content={description} name="description" />}
        {keywords && <meta content={keywords} name="keywords" />}
        <meta content="follow, index" name="robots" />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        {url && <link href={cannonical} rel="cannonical" />}
        <meta content="en_US" property="og:locale" />
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={cannonical} property="og:url" />
        <meta content="" name="yandex-verification" />
        <meta content="" name="google-site-verification" />
      </Head>
      {children}
    </>
  );
};
