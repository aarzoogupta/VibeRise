/* eslint-disable react/prop-types */
import React from "react";
import MyContext from "./MyContext";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { fireDB } from "../Firebase/FirebaseConfig";

function MyState({ children }) {
  const addEvent = async (formData) => {
    try {
      const eventRef = collection(fireDB, "events");
      await addDoc(eventRef, {
        ...formData,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      });
      toast.success("Event added successfully");
    } catch (error) {
      console.error("Error adding event:", error);
      toast.error("Error adding event. Try again.");
    }
  };

  return (
    <MyContext.Provider value={{ addEvent }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyState;
