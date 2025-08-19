import { MapPin, Calendar } from "lucide-react";
import Header from "./Header";

// Company Data
const companyData = {
  id: 1,
  name: "Graffersid Web and App Development",
  address:
    "816, Shekhar Central, Manorama Ganj, AB Road, New Palasia, Indore (M.P.)",
  rating: 4.5,
  reviews: 41,
  founded: "01-01-2018",
  logo: "G",
  logoColor: "bg-slate-800",
};

// Reviews Array
const reviews = [
  {
    id: 1,
    author: "Jorgue Watson",
    date: "01-01-2022, 14:33",
    rating: 4,
    content:
      "Graffersid one of the best Company dolor sit amet, consectetur adipiscing elit. Congue netus feugiat elit suspendisse commodo. Pellentesque risus suspendisse mattis et massa. Ultrices ac at nibh et. Aliquam aliquam ultrices ac pulvinar eleifend duis. Eget congue fringilla quam ut mattis tortor posuere semper ac. Sem egestas vestibulum faucibus montes. Gravida sit non arcu consequat.",
    avatar: "/thoughtful-man.png",
  },
  {
    id: 2,
    author: "Jenny Kole",
    date: "12-01-2022, 15:00",
    rating: 4,
    content:
      "Graffersid one of the best Company dolor sit amet, consectetur adipiscing elit. Congue netus feugiat elit suspendisse commodo. Pellentesque risus suspendisse mattis et massa. Ultrices ac at nibh et.",
    avatar: "/diverse-woman-portrait.png",
  },
  {
    id: 3,
    author: "Ayush Patel",
    date: "12-01-2022, 15:00",
    rating: 4,
    content: "Graffersid one of the best Company in App Development",
    avatar: "/man-2.png",
  },
];

// ⭐ Star Rating Component
function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-lg ${
            star <= Math.floor(rating)
              ? "text-yellow-400"
              : star - 0.5 <= rating
              ? "text-yellow-400"
              : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

// 📄 Main Component
export default function CompanyDetailPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <Header />

      {/* Company Header Section */}
      <div className="bg-white py-8 mt-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-6">
            {/* Logo */}
            <div
              className={`w-20 h-20 ${companyData.logoColor} rounded-lg flex items-center justify-center text-white font-bold text-2xl`}
            >
              {companyData.logo}
            </div>

            {/* Company Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    {companyData.name}
                  </h1>
                  <p className="text-gray-600 mb-4 flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {companyData.address}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold">
                        {companyData.rating}
                      </span>
                      <StarRating rating={companyData.rating} />
                      <span className="text-gray-600">
                        {companyData.reviews} Reviews
                      </span>
                    </div>
                  </div>
                </div>

                {/* Founded and Add Review Button */}
                <div className="text-right">
                  <p className="text-gray-500 text-sm mb-4">
                    Founded on {companyData.founded}
                  </p>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
                    + Add Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> {/* End Company Header */}

      {/* Reviews Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-gray-600 mb-6">
          Result Found: {reviews.length}
        </p>

        <div className="space-y-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white border rounded p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <img
                  src={review.avatar || "/placeholder.svg"}
                  alt={review.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {review.author}
                      </h3>
                      <p className="text-gray-500 text-sm flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {review.date}
                      </p>
                    </div>
                    <StarRating rating={review.rating} />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {review.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> {/* End Reviews */}
    </div>
  );
}