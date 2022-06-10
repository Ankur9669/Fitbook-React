import Axios from "axios";

export const editPost = async (
  postId: string,
  postContent: string,
  userEmail: string,
  userName: string
) => {
  const token = localStorage.getItem("token");

  try {
    // TODO remove any
    const response: any = await Axios.post(
      `/api/posts/edit/${postId}`,
      {
        postData: {
          postContent: postContent,
          postImage: null,
          username: userName,
          email: userEmail,
          updatedAt: new Date(),
        },
      },
      {
        headers: {
          authorization: token !== null ? token : "",
        },
      }
    );
    return {
      data: response.data.posts,
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
