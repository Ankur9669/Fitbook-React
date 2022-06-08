import Axios from "axios";

export const editPost = async (postId: string) => {
  // TODO uncomment this line
  const token = localStorage.getItem("token");

  try {
    const response = await Axios.post(`/api/posts/edit/${postId}`, {
      headers: {
        authorization: token,
      },
    });
    return {
      data: response.data,
      statusCode: response.status,
      success: true,
      message: "Api Request Successfull",
    };
  } catch (e) {
    console.error(e);
    return {
      data: "",
      statusCode: "",
      success: false,
      message: `Error ${e}`,
    };
  }
};
