import Axios from "axios";

const unfollowUser = async (userEmail: string) => {
  const token = localStorage.getItem("token");
  try {
    // TODO change any type
    const response: any = await Axios.post(
      `/api/users/unfollow/${userEmail}`,
      {},
      {
        headers: {
          authorization: token !== null ? token : "",
        },
      }
    );

    return {
      data: response.data.user,
      success: true,
      message: "User Unfollowed Successfully",
    };
  } catch (e) {
    console.log(e);
    return {
      data: "",
      success: false,
      message: "Could not unfollow user",
    };
  }
};

export { unfollowUser };
