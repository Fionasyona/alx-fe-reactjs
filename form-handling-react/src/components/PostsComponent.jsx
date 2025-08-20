import React from "react";
import { useQuery } from "@tanstack/react-query";

// Function to fetch posts from API
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

export default function PostsComponent() {
  const { data, error, isLoading, isError, refetch } = useQuery(
    ["posts"],
    fetchPosts,
    {
      staleTime: 5 * 60 * 1000, // Cache posts for 5 minutes
      refetchOnWindowFocus: false, // Avoid refetching on window focus
    }
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Posts</h2>

      <button
        onClick={refetch}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Refetch Posts
      </button>

      <ul>
        {data.map((post) => (
          <li key={post.id} className="border p-3 rounded mb-2 shadow">
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
