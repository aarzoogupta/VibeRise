import { db, storage } from "../Firebase/FirebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

/**
 * Adds a new post to Firestore under the correct user ID.
 * Uploads media (if any) to Firebase Storage and stores its URL in Firestore.
 * 
 * @param {Object} postData - { text, mediaFile, mediaType }
 * @returns {Promise<Object>} - { success: boolean, message: string }
 */
const useAddPost = async ({ text, mediaUrl, mediaType }) => {
  try {
    // Retrieve logged-in user details from localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.id) {
      return { success: false, message: "User not logged in" };
    }

    const userId = user.id;
    

    // Reference to the user's posts subcollection
    const postsRef = collection(db, `users/${userId}/posts`);

    // Add post document to Firestore
    await addDoc(postsRef, {
      text,
      mediaUrl, // Now properly assigned
      mediaType,
      timestamp: serverTimestamp(),
    });

    return { success: true, message: "Post added successfully!" };
  } catch (error) {
    console.error("Error adding post:", error);
    return { success: false, message: "Failed to add post" };
  }
};

export default useAddPost;
