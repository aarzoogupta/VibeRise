import React, { useState, useContext } from "react";
import MyContext from "../Context/MyContext";
import { useNavigate } from "react-router-dom";

function OrganizeEvent() {
  const { addEvent } = useContext(MyContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Name: "",
    type: "",
    dateTime: "",
    venue: "",
    Address: "",
    OrganizerName: "",
    OrganizerContact: "",
    isPaid: "Free",
    Cost: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(formData);
    navigate('/Event')
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 via-blue-500 to-green-500 bg-opacity-10 color-black p-6 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white-400 text-white p-6 rounded-lg shadow-lg w-full max-w-lg border border-white-500">
        <h2 className="text-2xl font-semibold text-yellow-200 mb-4 text-center">🎭 Organize an Event</h2>

        <label className="block mb-2">Event Name</label>
        <input
          type="text"
          name="Name"
          placeholder="Enter event name"
          value={formData.Name}
          onChange={handleChange}
          className="w-full p-2 rounded  border border-gray-700"
          required
        />

        
        <label className="block mt-4 mb-2">Event Type</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full p-2 rounded  border border-gray-700"
          required
        >
          <option value="">Select event type</option>
          <option value="Dance">Dance</option>
          <option value="Music">Music</option>
          <option value="Film">Film</option>
          <option value="Other">Other</option>
        </select>

        
        <label className="block mt-4 mb-2">Event Date & Time</label>
        <input
          type="datetime-local"
          name="dateTime"
          onChange={handleChange}
          className="w-full p-2 rounded  border border-gray-700"
          required
        />

        {/* Venue */}
        <label className="block mt-4 mb-2">Venue Name</label>
        <input
          type="text"
          name="venue"
          placeholder="Enter venue name"
          value={formData.venue}
          onChange={handleChange}
          className="w-full p-2 rounded  border border-gray-700"
          required
        />

        {/* Venue Address */}
        <label className="block mt-4 mb-2">Venue Address</label>
        <input
          type="text"
          name="Address"
          placeholder="Enter venue address"
          value={formData.Address}
          onChange={handleChange}
          className="w-full p-2 rounded  border border-gray-700"
          required
        />

        {/* Organizer Name */}
        <label className="block mt-4 mb-2">Organizer Name</label>
        <input
          type="text"
          name="OrganizerName"
          placeholder="Enter organizer name"
          value={formData.OrganizerName}
          onChange={handleChange}
          className="w-full p-2 rounded  border border-gray-700"
          required
        />

        {/* Organizer Contact */}
        <label className="block mt-4 mb-2">Organizer Contact</label>
        <input
          type="text"
          name="OrganizerContact"
          placeholder="Enter contact details"
          value={formData.OrganizerContact}
          onChange={handleChange}
          className="w-full p-2 rounded  border border-gray-700"
          required
        />

        {/* Is Entry Paid? */}
        <label className="block mt-4 mb-2">Is Entry Paid?</label>
        <select
          name="isPaid"
          value={formData.isPaid}
          onChange={handleChange}
          className="w-full p-2 rounded border border-gray-700"
        >
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>

        {/* Entry Cost (Only if Paid) */}
        {formData.isPaid === "Paid" && (
          <div>
            <label className="block mt-4 mb-2">Entry Cost</label>
            <input
              type="number"
              name="Cost"
              placeholder="Enter cost"
              value={formData.Cost}
              onChange={handleChange}
              className="w-full p-2 rounded  border border-gray-700"
            />
          </div>
        )}

        {/* Event Image */}
        <label className="block mt-4 mb-2">Event Image URL</label>
        <input
          type="text"
          name="imageUrl"
          placeholder="Paste image URL"
          value={formData.imageUrl}
          onChange={handleChange}
          className="w-full p-2 rounded  border border-gray-700"
        />

        {/* Submit Button */}
        <button type="submit"
         onClick={handleSubmit}
         className="mt-6 w-full bg-yellow-200 text-gray-900 p-2 rounded hover:bg-yellow-400">
          📅 Create Event
        </button>
      </form>
    </div>
  );
}

export default OrganizeEvent;

