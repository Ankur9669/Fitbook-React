import Axios from "axios";

const getUserPosts = async (userEmail: string) => {
  try {
    // TODO change any type
    const response: any = await Axios.get(`/api/posts/user/${userEmail}`);

    return {
      data: response.data.posts,
      success: true,
      message: "Posts fetched successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      data: "",
      success: false,
      message: "Could not fetch posts",
    };
  }
};

export { getUserPosts };
