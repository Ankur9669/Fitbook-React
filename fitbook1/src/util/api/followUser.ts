import Axios from "axios";

const followUser = async (userEmail: string) => {
  const token = localStorage.getItem("token");
  try {
    // TODO change any type
    const response: any = await Axios.post(
      `/api/users/follow/${userEmail}`,
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
      message: "User Followed Successfully",
    };
  } catch (e) {
    console.log(e);
    return {
      data: "",
      success: false,
      message: "Could not follow user",
    };
  }
};

export { followUser };
