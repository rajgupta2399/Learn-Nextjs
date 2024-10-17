"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Userspage = () => {
  // const [user, setUser] = useState([]);
  // console.log(user);

  // useEffect(() => {
  //   async function fetchUsers(params) {
  //     const data = await fetch("https://dummyjson.com/users");
  //     setUser(await data.json());
  //   }
  //   fetchUsers();
  // }, []);

  const { data, error } = useSWR("https://dummyjson.com/users", fetcher);
  if (error) {
    return <h1>Error Happen</h1>;
  }

  if (!data) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      {data.users &&
        data.users.map((user) => (
          <Link key={user.id} href={`/users/${user.id}`}>
            <div>{user.firstName}</div>
          </Link>
        ))}
    </div>
  );
};

export default Userspage;
