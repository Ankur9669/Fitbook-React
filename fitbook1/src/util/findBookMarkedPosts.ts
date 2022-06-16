// TODO remove any
const findBookMarkedPosts = (bookmarks: any[], posts: any[]) => {
  let bookmarkedPosts: any[] = [];

  //   console.log(posts);
  bookmarks.forEach((bookmark) => {
    let found = posts.find((post) => post._id === bookmark._id);
    if (found != undefined) {
      bookmarkedPosts.push(found);
    }
  });

  return bookmarkedPosts;
};
export { findBookMarkedPosts };
