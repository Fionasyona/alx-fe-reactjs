import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function PostsComponent() {
  const fetchPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  };

  const { data, isLoading, isError, error } = useQuery(["posts"], fetchPosts, {
    refetchOnWindowFocus: false, // disables refetch on window focus
    keepPreviousData: true, // keeps old data while loading new data
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading posts: {error.message}</p>;

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default PostsComponent;
