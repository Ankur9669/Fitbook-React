import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    postContent:
      "Progress lies not in enhancing what is, but in advancing toward what will be.",
    postImage: null,
    likes: {
      likeCount: 2,
      likedBy: [
        {
          firstName: "Asmit",
          lastName: "Shrivastav",
          email: "asmit123@gmail.com",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652721963/photo-1633332755192-727a05c4013d_qo2tty.jpg",
        },
        {
          firstName: "Ankur",
          lastName: "Gupta",
          email: "gankur860@gmail.com",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "Ankur Gupta",
    email: "gankur860@gmail.com",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652721946/photo-1580489944761-15a19d654956_dekeb7.jpg",
    createdAt: new Date("February 10 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        email: "priya3112@gmail.com",
        username: "Priya Patel",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652721963/photo-1633332755192-727a05c4013d_qo2tty.jpg",
        text: "Interesting",
        createdAt: new Date("February 12 2022 10:18:35"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        email: "gankur860@gmail.com",
        username: "Ankur Gupta",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
        text: "Wow!",
        createdAt: new Date("February 13 2022 14:58:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    postContent:
      "The longest period I went without picking a book was a month! It was super weird",
    postImage: null,
    likes: {
      likeCount: 4,
      likedBy: [
        {
          firstName: "Hermione",
          lastName: "Granger",
          email: "gankur860@gmail.com",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
        },
        {
          firstName: "Annabeth",
          lastName: "Chase",
          email: "asmit123@gmail.com",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
          website: "https://riordan.fandom.com/wiki/Annabeth_Chase",
        },
        {
          firstName: "Adarsh",
          lastName: "Balika",
          email: "gankur860@gmail.com",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652721946/photo-1580489944761-15a19d654956_dekeb7.jpg",
        },
        {
          firstName: "Bharati",
          lastName: "Subramanian",
          email: "bharti860@gmail.com",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
        },
      ],
      dislikedBy: [],
    },
    username: "Priya Patel",
    email: "priya3112@gmail.com",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
    comments: [
      {
        _id: uuid(),
        email: "priya3112@gmail.com",
        username: "Priya Patel",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
        text: "Haha, I know the feeling! *grimace*",
        createdAt: new Date("March 13 2019 23:16:37"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        email: "gankur860@gmail.com",
        username: "Ankur Gupta",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652721946/photo-1580489944761-15a19d654956_dekeb7.jpg",
        text: "Hey, why don't you go out for a change! xD",
        createdAt: new Date("March 14 2019 10:17:19"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: new Date("March 13 2019 22:10:39"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    postContent: `A little girl just ran into the library screaming "Books! BOOKS! BOOOOKS! books! BOOKS!" and honestly my day can't get better than that`,
    postImage: null,
    likes: {
      likeCount: 2,
      likedBy: [
        {
          firstName: "Alison",
          lastName: "Day",
          email: "priya3112@gmail.com",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652858637/Allison-Day-1-2_skydx2.jpg",
        },
        {
          firstName: "Jennifer",
          lastName: "Jäger",
          email: "gankur860@gmail.com",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652858651/Circle_Team_Jennifer_qlyfwo.png",
        },
      ],
      dislikedBy: [],
    },
    username: "Asmit Shrivastava",
    email: "asmit123@gmail.com",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652858637/Allison-Day-1-2_skydx2.jpg",
    comments: [],
    createdAt: new Date("March 17 2019 15:26:58"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    postContent: `Harry Potter and that's it that's the book...\n"Ah yes, of course, I haven't told you," said Dumbledore.
        `,
    postImage: null,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          firstName: "Hermione",
          lastName: "Granger",
          email: "priya3112@gmail.com",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "Priya Patel",
    email: "priya3112@gmail.com",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
    comments: [],
    createdAt: new Date("March 17 2019 15:26:58"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    postContent: `You should be able to call into work because you are mourning the end of a really good book.`,
    postImage: null,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    email: "priya3112@gmail.com",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652859048/DSC07033_jomlkt.jpg",
    comments: [],
    createdAt: new Date("October 30 2008 16:16:09"),
    updatedAt: formatDate(),
  },
];
