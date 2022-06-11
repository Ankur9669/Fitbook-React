export type Poststype = {
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

export type Posttype = {
  _id: string;
  postContent: string;
  likes: {
    likeCount: number;
    likedBy: [];
    dislikedBy: [];
  };
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  comments: [];
};
