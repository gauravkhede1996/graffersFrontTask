import React, { useState } from "react";
import { Search, MapPin } from "lucide-react";

const companies = [
  {
    id: 1,
    name: "Graffersid Web and App Development",
    address: "816, Shekhar Central, Manorama Ganj, AB road, New Palasia, Indore (M.P.)",
    rating: 4.5,
    reviews: 41,
    founded: "01-01-2016",
    logo: "G",
    logoColor: "bg-slate-800",
  },
  {
    id: 2,
    name: "Code Tech Company",
    address: "414, Kanha Appartment, Bhawarkua, Indore (M.P.)",
    rating: 4.5,
    reviews: 0,
    founded: "01-01-2016",
    logo: "<CT>",
    logoColor: "bg-green-600",
  },
  {
    id: 3,
    name: "Innogent Pvt. Ltd.",
    address: "910, Shekhar Central, Manorama Ganj, AB road, New Palasia, Indore (M.P.)",
    rating: 4.5,
    reviews: 0,
    founded: "01-01-2016",
    logo: "☀",
    logoColor: "bg-orange-500",
  },
  {
    id: 4,
    name: "Pixel Web and App Development",
    address: "410, Bansi Trade Center, Indore (M.P.)",
    rating: 4.5,
    reviews: 0,
    founded: "01-01-2016",
    logo: "P",
    logoColor: "bg-blue-600",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-sm ${
            star <= Math.floor(rating) ? "text-yellow-400" : star - 0.5 <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function HomePage() {
  const [sortBy, setSortBy] = useState("name");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">★</span>
              </div>
              <span className="text-xl font-semibold">
                Review<span className="font-bold">&RATE</span>
              </span>
            </div>

            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-4 pr-10 border rounded w-full h-9"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-600 w-4 h-4" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="hover:underline">SignUp</button>
              <button className="hover:underline">Login</button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex-1 min-w-64">
              <label className="block text-sm font-medium text-gray-700 mb-2">Select City</label>
              <div className="relative">
                <input
                  type="text"
                  value="Indore, Madhya Pradesh, India"
                  className="pl-4 pr-10 border rounded w-full h-9"
                  readOnly
                />
                <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-600 w-4 h-4" />
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
                Find Company
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
                + Add Company
              </button>
            </div>

            <div className="ml-auto mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort:</label>
              <select
                className="border rounded px-2 py-1"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="name">Name</option>
                <option value="rating">Rating</option>
                <option value="reviews">Reviews</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-gray-600 mb-6">Result Found: {companies.length}</p>

        <div className="space-y-6">
          {companies.map((company) => (
            <div key={company.id} className="bg-white border rounded p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div
                  className={`w-16 h-16 ${company.logoColor} rounded-lg flex items-center justify-center text-white font-bold text-xl`}
                >
                  {company.logo}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{company.name}</h3>
                      <p className="text-gray-600 text-sm mb-3 flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {company.address}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-semibold">{company.rating}</span>
                          <StarRating rating={company.rating} />
                          {company.reviews > 0 && (
                            <span className="text-gray-600 text-sm">{company.reviews} Reviews</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-gray-500 text-sm mb-3">Founded on {company.founded}</p>
                      <button className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded">
                        Detail Review
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
