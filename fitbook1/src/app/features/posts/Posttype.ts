export type Posttype = {
  posts: {
    _id: string;
    content: string;
    likes: {
      likeCount: number;
      likedBy: [];
      dislikedBy: [];
    };
    username: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
};
