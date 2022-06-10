import Axios from "axios";

export const deletePost = async (postId: string) => {
  const token = localStorage.getItem("token");

  try {
    const response: any = await Axios.delete(`/api/posts/${postId}`, {
      headers: {
        authorization: token !== null ? token : "",
      },
    });
    return {
      data: response.data.posts,
      success: true,
      message: "Post deleted Successfully",
    };
  } catch (e) {
    console.error(e);
    return {
      data: "",
      statusCode: "",
      success: false,
      message: `Error in deleting Post`,
    };
  }
};
