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

  const { data, isLoading, isError, error, refetch} = useQuery(["posts"], fetchPosts, {
    refetchOnWindowFocus: false, // disables refetch on window focus
    keepPreviousData: true, // keeps old data while loading new data
    cacheTime: 5 * 60 * 1000, // cache posts for 5 minutes
    staleTime: 5 * 60 * 1000, // data is fresh for 5 minutes
    retry: 1, // retry once on failure
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading posts: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <p>Number of posts: {data.length}</p>
      <p>First post title: {data[0].title}</p>  
      <p>First post body: {data[0].body}</p>
      <p>First post ID: {data[0].id}</p>
      <p>First post user ID: {data[0].userId}</p>
      
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
      </ul>
      </div>
  );
}

export default PostsComponent;
