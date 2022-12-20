import { CommentDB } from "data/comments";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(CommentDB);
  } else if (req.method === 'POST') {
  const comment = req.body.comment;
  const newComment = {
   id: Date.now().toString(),
   title: comment,
   comment: true
  }
  CommentDB.push(newComment);
  res.status(201).json(comment);
  }
}
