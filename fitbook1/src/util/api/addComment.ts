import Axios from "axios";

const addComment = async (
  postId: string,
  postComment: string,
  userName: string
) => {
  const token = localStorage.getItem("token");
  try {
    // TODO change any type
    const response: any = await Axios.post(
      `/api/comments/add/${postId}`,
      {
        commentData: {
          text: postComment,
          username: userName,
        },
      },
      {
        headers: {
          authorization: token !== null ? token : "",
        },
      }
    );

    return {
      data: response.data.comments,
      success: true,
      message: "Comment Added Successfully",
    };
  } catch (e) {
    console.log(e);
    return {
      data: "",
      success: false,
      message: "Could not add comment",
    };
  }
};

export { addComment };
