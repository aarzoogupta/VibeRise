import { db } from '../Firebase/FirebaseConfig';
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';


const useAddUser = async (userData) => {
    try {
        const usersRef = collection(db, "users");

        
        const q = query(usersRef, where("email", "==", userData.email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return { success: false, message: "User already exists with this email" };
        }

        // Add new user to Firestore
        await addDoc(usersRef, userData);

        return { success: true, message: "Sign up successful" };
    } catch (error) {
        console.error("Error signing up:", error);
        return { success: false, message: "Signup failed, try again" };
    }
};

export default useAddUser;
