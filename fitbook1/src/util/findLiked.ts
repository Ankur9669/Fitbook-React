const findLiked = (email: string, likedBy: {}[]) => {
  // TODO change any

  const foundElement = likedBy.find((item: any) => {
    return item.email === email;
  });

  return foundElement === undefined ? false : true;
};
export { findLiked };
