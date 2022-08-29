import Head from 'next/head';

export default function HeadElement ({title}) {
  return(
    <Head>
      <title>{`GLAM | ${title}`}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
    </Head>
  )
}