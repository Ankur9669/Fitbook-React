import Axios from "axios";
type UserType = {
  firstName: string;
  lastName: string;
  bio: string;
  website: string;
};

const editUser = async (userData: UserType) => {
  const token = localStorage.getItem("token");

  try {
    // TODO remove any
    const response: any = await Axios.post(
      `/api/users/edit/`,
      {
        userData,
      },
      {
        headers: {
          authorization: token !== null ? token : "",
        },
      }
    );
    return {
      data: response.data.user,
      success: true,
      message: "Could not edit user data",
    };
  } catch (e) {
    console.error(e);
    return {
      data: "",
      success: false,
      message: `Error ${e}`,
    };
  }
};

export { editUser };
