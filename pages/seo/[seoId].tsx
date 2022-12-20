import React from 'react';
import Head from "next/head";

const SeoDetail = (props: any) => {
  const {title, description} = props;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name={description} content={description}/>
      </Head>
      seo detail
    </div>
  );
};

export default SeoDetail;

export async function getServerSideProps() {
  return {
    props: {
      title: 'Seo title',
      description: 'Seo description'
    }
  }
}
