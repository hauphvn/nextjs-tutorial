import React, { useState } from 'react';
import Link from "next/link";
import styles from '../../styles/Comment.module.scss'
const CommentPage = (props: any) => {
  const {commentsData} = props;
  const [comments, setComments] = useState<any[]>([]);
  const [comment, setComment] = useState('');
  const fetchComments = async () => {
    const response = await fetch('/api/comments');
    const data = await response.json();
    setComments(data);
  }
  const postComment = async () => {
    const response = await fetch('/api/comments',{
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type':'application/json'
      }
    });

    const data = await response.json();
  }

  async function  deleteComment(id: string) {
    const response = await fetch(`/api/comments/${id}`,{
      method: 'DELETE'
    });
    const data = await response.json();
    await fetchComments();
  }

  return (
    <div>
     <Link href={'/'}>Go home</Link>
      <hr/>
      {/*<button onClick={fetchComments}>Get data</button>*/}
      {/*<hr/>*/}
      {/*<input onChange={(event => setComment(event.target.value))} type="text" placeholder={'Enter new comment'} value={comment}/>*/}
      {/*<hr/>*/}
      {/*<button onClick={postComment}>Create new comment</button>*/}
      {/*{comments && comments.map((comment: any) => (*/}
      {/*  <div key={comment.id}>*/}
      {/*   <div>*/}
      {/*     <div>Title: {comment.title}</div>*/}
      {/*     <div>Comment status: {comment.comment ? 'True' : 'False'}</div>*/}
      {/*   </div>*/}
      {/*    <div><button onClick={() => deleteComment(comment.id)}>Delete</button></div>*/}
      {/*  </div>*/}
      {/*))}*/}
      {commentsData.map((item: any) => (
        <div key={item.id}>
          <div className={styles.highLight}>{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default CommentPage;

export async function getStaticProps() {
const response = await fetch('http://localhost:3000/api/comments');
const data = await response.json();

return ({
  props: {
    commentsData: data
  }
})
}
