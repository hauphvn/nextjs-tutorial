import { CommentDB } from "data/comments";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { commentId } = req.query;
  const comment = CommentDB.find((item: any) => commentId === item.id) || {};
  if (req.method === 'GET') {
    res.status(201).json(comment);
  } else if (req.method === 'DELETE') {
    const index = CommentDB.findIndex((item: any) => item.id === commentId);
    const result = CommentDB.splice(index, 1);
    if (result.length !== 0) {
      res.status(200).json(comment);
    } else {
      res.status(500).json({ message: 'Delete final' });
    }
  }
}

