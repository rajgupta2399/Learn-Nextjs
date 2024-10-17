"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const UserDetailPage = () => {
  const { id } = useParams(); // Access dynamic route parameter
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      // Ensure 'id' is defined before fetching
      const fetchUserById = async () => {
        try {
          const response = await fetch(`https://dummyjson.com/users/${id}`);
          if (!response.ok) {
            throw new Error("Failed to fetch user data");
          }
          const data = await response.json();
          setUserInfo(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchUserById();
    }
  }, [id]); // Rerun effect if 'id' changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {userInfo && (
        <>
          <h1>
            {userInfo.firstName} {userInfo.lastName}
          </h1>
          <p>Email: {userInfo.email}</p>
          <p>Username: {userInfo.username}</p>
        </>
      )}
    </div>
  );
};

export default UserDetailPage;
