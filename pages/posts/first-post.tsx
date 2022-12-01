import Head from 'next/head'
import Script from "next/script";
import Layout from "components/layout";

// Call data from api
export async function getStaticProps() {
  console.log('call api 111')
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  return {
    props: { dataPost: data },
    revalidate: 10 // In seconds
  }
}
export default function FirstPost( props: any ) {
  // const pathDirectory = path.join(process.cwd(),'first-post');
  return (<Layout>
    <Head>
      <title>First post</title>
      {/*<script*/}
      {/*src="https://connect.facebook.net/en_US/sdk.js"/>*/}
    </Head>
    <Script src={'https://connect.facebook.net/en_US/sdk.js'}
            strategy={"lazyOnload"}
            onLoad={() => {
              console.log('loaded fb')
            }}
    />
    First post

    {props?.dataPost &&  props.dataPost.map((data: any) => (
      <div key={data.id}>
        <p>UserId: {data.userId}</p>
        <p>Title: {data.title}</p>
        <p>Status: {data.complete}</p>
      </div>
    ))}
    {/*<img src="/images/profile.jpg" alt="Your name"/>*/}
    {/*<Image src={'/images/profile.jpg'} height={144} width={144} alt={'Your name'}/>*/}
  </Layout>);
}


