import React, { useState } from "react";
import useAddPost from "../hooks/useAddPost";

export default function PostModal({ isOpen, onClose }) {
  const [media, setMedia] = useState(null);
  const [text, setText] = useState("");

  // Get user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.uid; 

  const handleSubmit = async () => {
    if (!text && !media) return;

    const postData = {
      text,
      mediaUrl: media,
      mediaType: "image",
      userId,
    };

    const result = await useAddPost(postData);

    if (result.success) {
      alert(result.message);
      onClose();
    } else {
      alert(result.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-700 to-blue-500 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-black">
        <h2 className="text-lg font-bold mb-3">Create a New Post</h2>

        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 drop-shadow-md">
          ✨ Share Your Creativity
        </h2>

        {/* Media Upload */}
        <label className="mt-3 my-2 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg cursor-pointer shadow-lg hover:scale-105 transition-transform duration-200">
          Enter Image URL 📤
          <input 
            type="text" 
            onChange={(e) => setMedia(e.target.value)}
            className="ml-2 px-2 py-1 text-black rounded-md border border-gray-300 focus:outline-none"
          />
        </label>

        {/* Post Text */}
        <textarea
          placeholder="Write something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-2 border border-pink-900 rounded mb-3"
        />

        {/* Buttons */}
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400">
            Cancel
          </button>
          <button onClick={handleSubmit} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
