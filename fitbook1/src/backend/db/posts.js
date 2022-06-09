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
    username: "dennsnell",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652859048/DSC07033_jomlkt.jpg",
    comments: [],
    createdAt: new Date("October 30 2008 16:16:09"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    postContent: "Starting a cover band called book so no one can judge us.",
    postImage: null,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          firstName: "Jennifer",
          lastName: "Jäger",
          username: "jennyj",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652858651/Circle_Team_Jennifer_qlyfwo.png",
        },
      ],
      dislikedBy: [],
    },
    username: "terrry",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652857916/photo-1527980965255-d3b416303d12_qg20fu.jpg",
    createdAt: new Date("August 10, 2016 19:22:07"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "jennyj",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652858651/Circle_Team_Jennifer_qlyfwo.png",
        text: "Lol! I loved this one!",
        createdAt: new Date("August 22, 2016 00:20:11"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    postContent: "I wish someone would pay me to read books.",
    postImage: null,
    likes: {
      likeCount: 3,
      likedBy: [
        {
          firstName: "Jane",
          lastName: "Doe",
          username: "janedoe",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652722016/landingImg_dff0ku.png",
        },
        {
          _id: uuid(),
          firstName: "Hermione",
          lastName: "Granger",
          username: "hergranger",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
        },
        {
          firstName: "Annabeth",
          lastName: "Chase",
          username: "annachase",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "bhaaratii",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
    createdAt: new Date("July 12, 2021 20:10:05"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "annachase",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
        text: "Oh wow! That's the dream!",
        createdAt: new Date("July 12, 2021 22:42:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    postContent: `me: I love that character\nauthor: *laughs in evil*`,
    postImage: null,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          firstName: "Dennis",
          lastName: "Snellenberg",
          username: "dennsnell",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652859048/DSC07033_jomlkt.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "aliiday",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652858637/Allison-Day-1-2_skydx2.jpg",
    createdAt: new Date("December 17, 2021 19:10:15"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    postContent: `I do not enjoy people. All I enjoy is books.`,
    postImage: null,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "terrry",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652857916/photo-1527980965255-d3b416303d12_qg20fu.jpg",
    createdAt: new Date("January 07, 2020 14:23:17"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    postContent: `Reach for a book. It's a weapon.`,
    postImage: null,
    likes: {
      likeCount: 3,
      likedBy: [
        {
          firstName: "Ryan",
          lastName: "Terry",
          username: "terrry",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652857916/photo-1527980965255-d3b416303d12_qg20fu.jpg",
        },
        {
          _id: uuid(),
          firstName: "Sheldon",
          lastName: "Borenstein",
          username: "shelbor",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652858279/photo-1507003211169-0a1dd7228f2d_zgfurs.jpg",
        },
        {
          firstName: "Alison",
          lastName: "Day",
          username: "aliiday",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652858637/Allison-Day-1-2_skydx2.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "jennyj",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652858651/Circle_Team_Jennifer_qlyfwo.png",
    comments: [
      {
        _id: uuid(),
        username: "aliiday",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652858637/Allison-Day-1-2_skydx2.jpg",
        text: "So true. Very true. My brain's as sharp as a knife. Hehe",
        createdAt: new Date("April 30, 2022 08:36:27"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: new Date("May 10, 2022 17:18:55"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    postContent: `When someone calls me a nerd for reading/ writing.\nme: Oh yeah, I'm not embarassed by that!`,
    postImage: null,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Hermione",
          lastName: "Granger",
          username: "hergranger",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "annachase",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
    comments: [],
    createdAt: new Date("April 25, 2017 10:34:20"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    postContent: `Me: Makes a list of books to read in TBR\n*New books released*\nMe: Throws list away. Chaos Rule.`,
    postImage: null,
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Sheldon",
          lastName: "Borenstein",
          username: "shelbor",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652858279/photo-1507003211169-0a1dd7228f2d_zgfurs.jpg",
        },
        {
          firstName: "Alison",
          lastName: "Day",
          username: "aliiday",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652858637/Allison-Day-1-2_skydx2.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "youknowwho",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652722175/profile-img_nxszbk.jpg",

    createdAt: new Date("Jan 22 2019 18:52:39"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "aliiday",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652858637/Allison-Day-1-2_skydx2.jpg",
        text: "I feel attacked.",
        createdAt: new Date("Jan 24 2019 22:22:09"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    postContent: `bookworm culture is buying highly anticipated new releases while having 72837288383 books in your room that haven't been read or touched`,
    postImage: null,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          firstName: "Jennifer",
          lastName: "Jäger",
          username: "jennyj",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652858651/Circle_Team_Jennifer_qlyfwo.png",
        },
      ],
      dislikedBy: [],
    },
    username: "terrry",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652857916/photo-1527980965255-d3b416303d12_qg20fu.jpg",
    createdAt: new Date("Jan 18 2015 12:12:37"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "shelbor",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652858279/photo-1507003211169-0a1dd7228f2d_zgfurs.jpg",
        text: "I feel attacked.",
        createdAt: new Date("Jan 19 2015 10:02:02"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    postContent: `Chai aur Kitaab ♥`,
    postImage: null,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "bhaaratii",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
    createdAt: new Date("July 23 2018 10:02:37"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    postContent: `There's no high like reading books the entire day! A day well spent.`,
    postImage: null,
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Hermione",
          lastName: "Granger",
          username: "hergranger",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
        },
        {
          firstName: "Annabeth",
          lastName: "Chase",
          username: "annachase",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
        },
        {
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652721946/photo-1580489944761-15a19d654956_dekeb7.jpg",
        },
        {
          firstName: "Shubham",
          lastName: "Soni",
          username: "shubhamsoni",
          profileImage:
            "https://res.cloudinary.com/dylkclyom/image/upload/v1652721963/photo-1633332755192-727a05c4013d_qo2tty.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "bhaaratii",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
    createdAt: new Date("April 20 2022 17:17:27"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652721963/photo-1633332755192-727a05c4013d_qo2tty.jpg",
        text: "I love doing this!",
        createdAt: new Date("April 21 2022 07:12:02"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "shubhamsoni",
        username: "bhaaratii",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
        text: "I know right!",
        createdAt: new Date("April 21 2022 17:20:12"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
