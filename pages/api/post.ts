
export async function getAllPostIds() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  return posts.map((post: any) => {
    return {
      params: {
        id: post.id.toString()
      }
    }
  });
};
export async function getPostById(id: string) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/'+ id);
 if(response){
   const post = await response.json();
   return {
     id,
     ...post
   }
 }

}
