import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, SET_SEARCH_NAME } from "./store/actions/user";

const UsersList = () => {
  const users = useSelector((state) => state.usersReducer.users);
  const loading = useSelector((state) => state.usersReducer.loading);
  const searchName = useSelector((state) => state.usersReducer.searchName);
  const [cacheUsers, setCacheUsers] = useState(users);
  const renderObj = searchName.trim() !== "" ? cacheUsers : users;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    setCacheUsers(
      users.filter(
        (user) =>
          user.first_name.toLowerCase().includes(searchName.toLowerCase()) ||
          user.last_name.toLowerCase().includes(searchName.toLowerCase())
      )
    );
  }, [searchName]);
  console.log("renderObj", renderObj)
  console.log("cacheUsers", cacheUsers)
  console.log(users)

  return (
    <>
      <input
        value={searchName}
        onChange={(e) =>
          dispatch({ type: SET_SEARCH_NAME, payload: e.target.value })
        }
      />
      {loading ? (
        "Loading..."
      ) : (
        <div>
          {renderObj.map((user) => (
            <div
              key={user.id}
              style={{ border: "1px solid black", padding: 20, margin: 20 }}
            >
              <div>{user.first_name}</div>
              <div>{user.last_name}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default UsersList;
