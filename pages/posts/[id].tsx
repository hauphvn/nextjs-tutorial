import Layout from "components/layout";
import { getAllPostIds, getPostById } from "pages/api/post";

export default function Post(postData: any) {
 const {title, userId, body} = postData;
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
    fallback: false
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
