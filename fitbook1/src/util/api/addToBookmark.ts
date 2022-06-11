import Axios from "axios";

const addToBookmark = async (postId: string) => {
  const token = localStorage.getItem("token");
  try {
    // TODO change any type
    const response: any = await Axios.post(
      `/api/users/bookmark/${postId}`,
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

export { addToBookmark };
