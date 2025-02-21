import { useState, useEffect } from "react";
import { db } from "../Firebase/FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { format } from "date-fns"; // Import date-fns for formatting

const useGetPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));  
    const userId = userData?.id;

    if (!userId) {
      console.error("No userId found in localStorage");
      setError("User ID not found. Please log in again.");
      setLoading(false);
      return;
    }

    const fetchPosts = async () => {
      try {
        console.log(`Fetching posts for userId: ${userId}`);
        const postsRef = collection(db, "users", userId, "posts");
        const querySnapshot = await getDocs(postsRef);

        const fetchedPosts = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          
          // Convert Firestore Timestamp to readable date
          let formattedTimestamp = "Unknown time";
          if (data.timestamp && data.timestamp.seconds) {
            formattedTimestamp = format(new Date(data.timestamp.seconds * 1000), "PPpp");
          }

          return {
            id: doc.id,
            ...data,
            timestamp: formattedTimestamp, // Overwrite the timestamp with formatted string
          };
        });

        console.log("Fetched posts:", fetchedPosts);
        setPosts(fetchedPosts);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to load posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};

export default useGetPosts;
