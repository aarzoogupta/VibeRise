"use client"
import React from "react";
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

// Simulated API call to fetch artists
const fetchArtists = async () => {
  // In a real application, replace this with an actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Alice Johnson",
          category: "Dance",
          bio: "Contemporary dancer with 10 years of experience",
          image: "./dance.jpg",
          socialMedia: { instagram: "@alice_dance", twitter: "@alicejohnson" },
          followers: 10000,
          badges: ["Top Rising Talent"],
        },
        {
          id: 2,
          name: "Bob Williams",
          category: "Music",
          bio: "Electronic music producer and DJ",
          image: "./music.jpg",
          socialMedia: { instagram: "@bob_music", twitter: "@bobwilliams" },
          followers: 25000,
          badges: ["Sponsored"],
        },
        {
          id: 3,
          name: "Charlie Brown",
          category: "Filmmaking",
          bio: "Independent filmmaker specializing in documentaries",
          image: "./filmMaking.jpeg",
          socialMedia: { instagram: "@charlie_films", twitter: "@charliebrown" },
          followers: 15000,
          badges: ["Featured"],
        },
        // Add more artists as needed
      ])
    }, 1000)
  })
}

const DiscoverArtists = () => {
  const [artists, setArtists] = useState([])
  const [filteredArtists, setFilteredArtists] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOption, setSortOption] = useState("Most Popular")

  useEffect(() => {
    const loadArtists = async () => {
      const data = await fetchArtists()
      setArtists(data)
      setFilteredArtists(data)
      setLoading(false)
    }
    loadArtists()
  }, [])

  useEffect(() => {
    let result = artists

    // Filter by category
    if (activeCategory !== "All") {
      result = result.filter((artist) => artist.category === activeCategory)
    }

    // Filter by search term
    if (searchTerm) {
      result = result.filter(
        (artist) =>
          artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          artist.bio.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Sort artists
    switch (sortOption) {
      case "Most Popular":
        result = result.sort((a, b) => b.followers - a.followers)
        break
      case "Newest":
        result = result.sort((a, b) => b.id - a.id)
        break
      case "Highest Rated":
        // Assuming we had a rating field, we would sort by that here
        break
      default:
        break
    }

    setFilteredArtists(result)
  }, [artists, activeCategory, searchTerm, sortOption])

  const categories = ["All", "Dance", "Music", "Filmmaking"]

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Discover Artists</h1>

      {/* Filters and Search */}
      <div className="mb-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex space-x-2 overflow-x-auto pb-2 md:pb-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search artists..."
          className="px-4 py-2 border rounded-full"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select className="px-4 py-2 border rounded-full" onChange={(e) => setSortOption(e.target.value)}>
          <option>Most Popular</option>
          <option>Newest</option>
          <option>Highest Rated</option>
        </select>
      </div>

      {/* Artist Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArtists.map((artist) => (
          <motion.div
            key={artist.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <img src={artist.image || "/placeholder.svg"} alt={artist.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-blue-700 text-xl font-semibold mb-2">{artist.name}</h2>
              <p className="text-gray-600 mb-2">{artist.category}</p>
              <p className="text-gray-700 mb-4">{artist.bio}</p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-2">
                  {artist.socialMedia.instagram && (
                    <a
                      href={`https://instagram.com/${artist.socialMedia.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Instagram
                    </a>
                  )}
                  {artist.socialMedia.twitter && (
                    <a
                      href={`https://twitter.com/${artist.socialMedia.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Twitter
                    </a>
                  )}
                </div>
                <span className="text-gray-600">{artist.followers.toLocaleString()} followers</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {artist.badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-2 py-1 bg-yellow-200 text-yellow-800 text-xs font-semibold rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <Link to={`/artist/${artist.id}`}>
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                  View Profile
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default DiscoverArtists;

