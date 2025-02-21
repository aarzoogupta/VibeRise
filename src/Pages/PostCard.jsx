import React from "react";

export default function PostCard({ post }) {
  return (
    <div className="max-w-lg bg-white shadow-md rounded-lg p-4 mb-6">
      {/* User Info */}
      <div className="flex items-center mb-3">
        <img
          src={post.userProfile}
          alt="User"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h4 className="font-semibold">{post.userName}</h4>
          <p className="text-sm text-gray-500">{post.timestamp}</p>
        </div>
      </div>

      {/* Post Content (Image or Video) */}
      {post.media && (
        <div className="mb-3">
          {post.mediaType === "image" ? (
            <img
              src={post.media}
              alt="Post"
              className="w-full h-64 object-cover rounded-lg"
            />
          ) : (
            <video controls className="w-full h-64 rounded-lg">
              <source src={post.media} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      )}

      {/* Post Text (Poetry / Description) */}
      {post.text && <p className="text-gray-700 mb-3">{post.text}</p>}

      {/* Like & Comment Buttons */}
      <div className="flex justify-between text-gray-600">
        <button className="flex items-center space-x-1 hover:text-blue-500">
          👍 <span>Like</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-blue-500">
          💬 <span>Comment</span>
        </button>
      </div>
    </div>
  );
}
