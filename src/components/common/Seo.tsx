import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import replace  from 'lodash/replace';

type SeoProps = {
  title: string;
  description: string;
  canonical?: string;
  css?: string;
  js?: string;
  image?: any;
  keywords?: any;
};

const withPrefix = (str = '', _with : any) => {
  if (str.indexOf(_with) > -1) {
    return str;
  }
  return _with + str;
};

export const DOMAIN =
  typeof window !== 'undefined'
    ? window.location.protocol + '//' + withPrefix(window.location.host, 'www.')
    : '';

const filterUTMQueryParams = (urlLike = '') => {
  if (urlLike) {
    const urlParts = urlLike.split('?');
    if (urlParts.length > 1 && urlParts[1]) {
      const url = urlParts[0];
      const query = urlParts[1];
      const queryString = replace(
        query,
        /([&]utm_[\d\D][^&]*)|(utm_[\d\D][^&]*)/gm,
        ''
      );
      const queryParams = new URLSearchParams(queryString);
      let newQuery = '';
      queryParams.forEach((value, key) => {
        if (key.indexOf('utm_') === -1) {
          if (newQuery === '') {
            newQuery = `?${key}=${value}`;
          } else {
            newQuery = `${newQuery}&${key}=${value}`;
          }
        }
      });
      return url + newQuery;
    }
  }
  return urlLike;
};

export const SEO: React.FC<SeoProps> = ({
  title,
  description,
  css,
  js,
  image,
  keywords,
}) => {
  const router = useRouter();
  const canonical =
    typeof window !== 'undefined'
      ? DOMAIN + filterUTMQueryParams(router.asPath)
      : '';
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta
        name="viewport"
        content="width=device-width,minimum-scale=1,initial-scale=1"
      />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta property="og:site_name" content="Yep" />
      <meta property="og:url" content={`${canonical}`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="" />
      <meta name="twitter:creator" content="" />
      {css && <link rel="stylesheet" href={`${css}`} />}
      {image && <meta property="og:image" content={`${image}`} />}
      {image && <meta name="twitter:image" content={`${image}`} />}
      {canonical && <link rel="canonical" href={`${canonical}`} />}
      {js && <Script type="text/javascript" src={`${js}`}></Script>}
    </Head>
  );
};
