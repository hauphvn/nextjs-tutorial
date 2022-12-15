import Layout from "components/layout";
import { getAllPostIds, getPostById } from "pages/api/post";
import { useRouter } from "next/router";

export default function Post(postData: any) {
 const {title, userId, body} = postData;
 const router = useRouter();
  console.log('router: ', router.isFallback)
  return (
    <Layout>
      <div>
        <div>Post detail</div>
        <div>UserId: {userId}</div>
        <div>Title: {title}</div> <br/>
        <div>body: {body}</div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps(params: any) {
  const postData = await getPostById(params.params.id);
  return {
    props: {
      ...postData
    }
  }
}
