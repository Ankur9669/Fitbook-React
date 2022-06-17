import Axios from "axios";

const getUsersBySearchParams = async (searchParams: string) => {
  try {
    // TODO change any type
    const response: any = await Axios.get(`/api/users/${searchParams}`);

    return {
      data: response.data.users,
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

export { getUsersBySearchParams };
