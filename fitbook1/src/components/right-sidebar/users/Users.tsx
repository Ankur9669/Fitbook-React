import React, { useEffect, useState } from "react";
import { User, getUsers, useAppSelector } from "./index";
import { UsersType } from "../../../util/types/UsersType";

const Users = () => {
  const [users, setUsers] = useState<UsersType>([]);
  // TODO change user type
  const { user }: any = useAppSelector((store) => store.auth);
  const userEmail = user.email;

  useEffect(() => {
    (async () => {
      const { data, success, message } = await getUsers();

      if (success) {
        setUsers(data);
      }
    })();
  }, []);
  return (
    <div>
      <h3 className="right-sidebar-heading">Who to follow</h3>
      <div className="right-sidebar-content users-content">
        {users.map(
          (user) =>
            user.email !== userEmail && (
              <div key={user._id}>
                <User
                  userName={`${user.firstName} ${user.lastName}`}
                  userId={user.userId}
                  _id={user._id}
                  email={user.email}
                />
              </div>
            )
        )}
        {/* <User userName="Ankur Gupta" userId="Ankur@9669" />
        <User userName="Priya Patel" userId="Priya@3112" />
        <User userName="Asmit Shrivastava" userId="Asmit@1231231" /> */}
      </div>
    </div>
  );
};

export default Users;
