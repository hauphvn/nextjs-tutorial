import React, { useState } from 'react';
import Link from "next/link";

const CommentPage = () => {
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
    console.log('Data post response: ', data);
  }
  return (
    <div>
     <Link href={'/'}>Go home</Link>
      <hr/>
      <button onClick={fetchComments}>Get data</button>
      <hr/>
      <input onChange={(event => setComment(event.target.value))} type="text" placeholder={'Enter new comment'} value={comment}/>
      <hr/>
      <button onClick={postComment}>Create new comment</button>
      {comments && comments.map((comment: any) => (
        <div key={comment.id}>
          <div>Title: {comment.title}</div>
          <div>Comment status: {comment.comment ? 'True' : 'False'}</div>
        </div>
      ))}
    </div>
  );
};

export default CommentPage;
