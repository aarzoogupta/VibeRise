import { useState } from "react";
import { db } from "../firebase/FirebaseConfig"; // Adjust based on your file structure
import { collection, query, where, getDocs } from "firebase/firestore";

const useGetInfo = () => {
  const [loading, setLoading] = useState(false);

  const getUserInfo = async (email, password) => {
    setLoading(true);
    try {
      // Query Firestore for the user with the given email
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();

        if (userData.password === password) {
          setLoading(false);
          return { ...userData, id: querySnapshot.docs[0].id };
        } else {
          setLoading(false);
          return null; // Password does not match
        }
      } else {
        setLoading(false);
        return null; // No user found
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      setLoading(false);
      return null;
    }
  };

  return { getUserInfo, loading };
};

export default useGetInfo;
