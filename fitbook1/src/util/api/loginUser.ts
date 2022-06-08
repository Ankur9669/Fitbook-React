import Axios from "axios";
const loginUser = async (email: string, password: string) => {
  try {
    // TODO change any type
    const response: any = await Axios.post("/api/auth/login", {
      email: email,
      password: password,
    });

    console.log(response);
    const token = response.data.encodedToken;
    localStorage.setItem("token", token);

    return {
      data: response.data.foundUser,
      success: true,
      message: "Login Successfull",
    };
  } catch (error) {
    console.log(error);
    return {
      data: "",
      success: false,
      message: "Login Failed",
    };
  }
};

export { loginUser };
