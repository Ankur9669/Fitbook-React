export type Post = {
  _id: string;
  postImage?: null | string;
  postContent: string;
  likes: {
    likeCount: number;
    likedBy: {
      firstName: string;
      lastName: string;
      email: string;
      profileImage: string;
    }[];

    dislikedBy: [];
  };
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  comments: [
    {
      _id: string;
      username: string;
      profileImage: string;
      text: string;
      createdAt: Date;
      votes: {
        upvotedBy: [];
        downvotedBy: [];
      };
    }
  ];
};

export type PostProps = {
  post: Post;
};
