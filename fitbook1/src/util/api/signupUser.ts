import Axios from "axios";

const signUpUser = async (
  firstName: string,
  lastName: string,
  userId: string,
  email: string,
  password: string
) => {
  try {
    // TODO change any type
    const response: any = await Axios.post("/api/auth/signup", {
      email: email,
      password: password,
      userId: userId,
      firstName: firstName,
      lastName: lastName,
    });

    const token = response.data.encodedToken;
    localStorage.setItem("token", token);

    return {
      data: response.data.createdUser,
      success: true,
      message: "SignUp Successfull",
    };
  } catch (error) {
    console.error(error);
    return {
      data: "",
      success: false,
      message: "SignUp Failed",
    };
  }
};

export { signUpUser };
