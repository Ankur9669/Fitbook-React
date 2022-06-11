import Axios from "axios";

const getSinglePost = async (postId: string) => {
  try {
    // TODO change any type
    const response: any = await Axios.get(`/api/posts/${postId}`);

    return {
      data: response.data.post,
      success: true,
      message: "Post Fetched Successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      data: "",
      success: false,
      message: "Could not fetch post",
    };
  }
};

export { getSinglePost };
