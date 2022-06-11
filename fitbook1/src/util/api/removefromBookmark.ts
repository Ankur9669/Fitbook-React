import Axios from "axios";

const removeFromBookmark = async (postId: string) => {
  const token = localStorage.getItem("token");
  try {
    // TODO change any type
    const response: any = await Axios.post(
      `/api/users/remove-bookmark/${postId}`,
      {},
      {
        headers: {
          authorization: token !== null ? token : "",
        },
      }
    );

    return {
      data: response.data.bookmarks,
      success: true,
      message: "Post BookMarked Successfully",
    };
  } catch (e) {
    console.log(e);
    return {
      data: "",
      success: false,
      message: "Could not Bookmark post",
    };
  }
};

export { removeFromBookmark };
