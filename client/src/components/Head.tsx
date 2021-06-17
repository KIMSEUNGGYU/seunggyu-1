import Head from 'next/head';

interface Porps {
  title: string;
  description: string;
  imageURL: string;
}

function HeadWrapper({ title, description, imageURL }: Porps) {
  return (
    <Head>
      <title>{title} | SEUNGGYU</title>
      <meta name="description" content={description} />
      <meta name="og:title" content="SEUNGGYU" />
      <meta name="og:image" content={imageURL} />
      <meta name="og:description" content={description} />
      {/* <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" /> */}
    </Head>
  );
}

HeadWrapper.defaultProps = {
  title: 'BLOG',
  description: '개발자 김승규의 블로그 입니다. 좋은 컨텐츠를 생산하겠습니다.',
  imageURL: 'https://res.cloudinary.com/du4w00gvm/image/upload/v1619410321/main_image.png',
};

export default HeadWrapper;
