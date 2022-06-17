import Axios from "axios";

const getSingleUser = async (userEmail: string) => {
  try {
    // TODO change any type
    const response: any = await Axios.get(`/api/users/singleuser/${userEmail}`);
    return {
      data: response.data.user,
      success: true,
      message: "Users fetched successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      data: "",
      success: false,
      message: "Could not fetch users",
    };
  }
};

export { getSingleUser };
