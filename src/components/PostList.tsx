import React from "react";
import { useGetPostsQuery } from "@app-state/services/postApi";
import { Post } from "@interfaces/post";

const PostList: React.FC = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery();

  if (isLoading)
    return <div className="text-center text-gray-500">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-red-500">Error fetching posts.</div>
    );

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Posts</h1>
      <ul className="space-y-4">
        {posts?.slice(1,9).map((post: Post) => (
          <li
            key={post.id}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-lg font-semibold text-gray-900">
              {post.title}
            </h2>
            <p className="text-gray-700 mt-2">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
