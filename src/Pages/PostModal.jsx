import React, { useState } from "react";
import useAddPost from "../hooks/useAddPost";

export default function PostModal({ isOpen, onClose }) {
  const [media, setMedia] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  const [text, setText] = useState("");

  // Get user from localStorage (you can replace this with Firebase Auth)
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.uid; // Ensure uid is stored in localStorage

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMedia(URL.createObjectURL(file));
      setMediaType(file.type.startsWith("image") ? "image" : "video");
    }
  };

  const handleSubmit = async () => {
    if (!text && !media) return;

    const postData = {
      text,
      mediaUrl: media, // 🔴 Upload media to Firebase Storage (not just URL.createObjectURL)
      mediaType,
      userId,
    };

    const result = await useAddPost(postData);

    if (result.success) {
      alert(result.message); // Use toast for better UI feedback
      onClose(); // Close modal after posting
    } else {
      alert(result.message);
    }
  };

  if (!isOpen) return null; // Hide modal if not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-black">
        <h2 className="text-lg font-bold mb-3">Create a New Post</h2>

        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 drop-shadow-md">
          ✨ Share Your Creativity
        </h2>

        {/* Media Upload */}
        <label className="mt-3 my-2 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg cursor-pointer shadow-lg hover:scale-105 transition-transform duration-200">
          📤 Choose File
          <input type="file" accept="image/*,video/*" onChange={handleMediaChange} className="hidden" />
        </label>

        {media && (
          <div className="mb-3">
            {mediaType === "image" ? (
              <img src={media} alt="Preview" className="w-full h-40 object-cover rounded" />
            ) : (
              <video controls className="w-full h-40 rounded">
                <source src={media} type="video/mp4" />
              </video>
            )}
          </div>
        )}

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