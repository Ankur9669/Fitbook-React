// TODO change any
const getSortedPosts = (posts: any, sortBy: string) => {
  switch (sortBy) {
    case "LATEST":
      return [...posts].sort(
        (postA, postB) =>
          new Date(postB.createdAt).valueOf() -
          new Date(postA.createdAt).valueOf()
      );

    case "OLDEST":
      return [...posts].sort(
        (postA, postB) =>
          new Date(postA.createdAt).valueOf() -
          new Date(postB.createdAt).valueOf()
      );
    case "TRENDING":
      return [...posts].sort(
        (postA, postB) => postB.likes.likeCount - postA.likes.likeCount
      );
  }
};

export { getSortedPosts };
