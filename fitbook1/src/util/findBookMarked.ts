const findBookMarked = (postId: string | undefined, bookmarks: []) => {
  // TODO change any

  const foundElement = bookmarks.find((item: any) => {
    return item._id === postId;
  });

  return foundElement === undefined ? false : true;
};

export { findBookMarked };
