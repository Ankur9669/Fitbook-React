import Axios from "axios";

const addPostLike = async (postId: string) => {
  const token = localStorage.getItem("token");
  try {
    // TODO change any type
    const response: any = await Axios.post(
      `/api/posts/like/${postId}`,
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
      message: "Post Liked Successfully",
    };
  } catch (e) {
    console.log(e);
    return {
      data: "",
      success: false,
      message: "Could not like post",
    };
  }
};

export { addPostLike };
