export type CommentType = {
  createdAt: string;
  username: string;
  email: string;
  profileImage: string;
  text: string;
  votes: { upvotedBy: []; downvotedBy: [] };
  _id: string;
};
