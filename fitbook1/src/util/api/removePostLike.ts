import Axios from "axios";

const removePostLike = async (postId: string) => {
  const token = localStorage.getItem("token");
  try {
    // TODO change any type
    const response: any = await Axios.post(
      `/api/posts/dislike/${postId}`,
      {},
      {
        headers: {
          authorization: token !== null ? token : "",
        },
      }
    );

    return {
      data: response.data.posts,
      success: true,
      message: "Post UnLiked Successfully",
    };
  } catch (e) {
    console.log(e);
    return {
      data: "",
      success: false,
      message: "Could not Unlike post",
    };
  }
};

export { removePostLike };
