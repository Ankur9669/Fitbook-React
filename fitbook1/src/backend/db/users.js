import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Ankur",
    lastName: "Gupta",
    userId: "Ankur9669",
    email: "gankur860@gmail.com",
    password: "ankurgupta123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [
      { email: "priya3112@gmail.com", username: "Priya Patel" },
      { email: "asmit123@gmail.com", username: "Asmit Shrivastava" },
    ],
    following: [
      { email: "priya3112@gmail.com", username: "Priya Patel" },
      { email: "asmit123@gmail.com", username: "Asmit Shrivastava" },
      { email: "naman123@gmail.com", username: "Naman Saxena" },
    ],
  },

  {
    _id: uuid(),
    firstName: "Priya",
    lastName: "Patel",
    userId: "priya3112",
    email: "priya3112@gmail.com",
    password: "priya123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [
      { email: "priya3112@gmail.com", username: "Priya Patel" },
      { email: "asmit123@gmail.com", username: "Asmit Shrivastava" },
    ],
    following: [
      { email: "priya3112@gmail.com", username: "Priya Patel" },
      { email: "asmit123@gmail.com", username: "Asmit Shrivastava" },
      { email: "naman123@gmail.com", username: "Naman Saxena" },
    ],
  },

  {
    _id: uuid(),
    firstName: "Asmit",
    lastName: "Shrivatava",
    userId: "Asmit1006",
    email: "asmit123@gmail.com",
    password: "asmit123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [
      { email: "priya3112@gmail.com", username: "Priya Patel" },
      { email: "asmit123@gmail.com", username: "Asmit Shrivastava" },
    ],
    following: [
      { email: "priya3112@gmail.com", username: "Priya Patel" },
      { email: "asmit123@gmail.com", username: "Asmit Shrivastava" },
      { email: "naman123@gmail.com", username: "Naman Saxena" },
    ],
  },
];
