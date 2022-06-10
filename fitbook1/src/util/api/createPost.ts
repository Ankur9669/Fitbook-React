import Axios from "axios";

const createPost = async (
  postContent: string,
  userEmail: string,
  userName: string
) => {
  const token = localStorage.getItem("token");

  try {
    // TODO change any type
    const response: any = await Axios.post(
      "/api/posts",
      {
        postData: {
          postContent: postContent,
          postImage: null,
          likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
          },
          username: userName,
          email: userEmail,
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652721946/photo-1580489944761-15a19d654956_dekeb7.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          comments: [],
        },
      },
      {
        headers: {
          authorization: token === null ? "" : token,
        },
      }
    );

    // console.log(response);
    return {
      data: response.data.posts,
      success: true,
      message: "Post Created",
    };
  } catch (error) {
    console.log(error);
    return {
      data: "",
      success: false,
      message: "Error in creating Post",
    };
  }
};

export { createPost };
