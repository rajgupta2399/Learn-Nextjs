import React from "react";

// Your main component
const Page = async () => {
  // Fetching data directly in the component
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();

  return (
    <div>
      <ul>
        {data.users.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
