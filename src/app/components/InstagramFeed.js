// ANCHOR: instagram-feed - Instagram media stream integration
"use client";
import { useState, useEffect } from "react";
import { fetchInstagramMedia } from "../../../lib/instagram";

const mockInstagramPosts = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/originals/5a/f1/0f/5af10f4a6c3b115a65d094755075f2ee.gif",
    caption: "Fresh coq au vin, perfectly braised! 🍷",
    likes: 245,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400",
    caption: "Our chef preparing today's special escargots 🐌",
    likes: 189,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400",
    caption: "Classic French onion soup - comfort in a bowl! 🧅",
    likes: 312,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=400",
    caption: "Tarte Tatin made with love ❤️ #dessert",
    likes: 167,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
    caption: "Wine pairing night - Burgundy and beef! 🥩",
    likes: 278,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    caption: "Behind the scenes in our kitchen 👨‍🍳",
    likes: 203,
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400",
    caption: "Duck confit with seasonal vegetables 🦆",
    likes: 289,
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400",
    caption: "Fresh ingredients arriving this morning 🥬",
    likes: 156,
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400",
    caption: "Bouillabaisse - a Mediterranean classic 🐟",
    likes: 234,
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400",
    caption: "Intimate dining atmosphere 🕯️",
    likes: 198,
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&fit=crop&crop=entropy",
    caption: "Artisanal cheese selection 🧀",
    likes: 167,
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400",
    caption: "Perfect wine pairings for every dish 🍾",
    likes: 245,
  },
];

export default function InstagramFeed() {
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadInstagramPosts = async () => {
      try {
        // Check if we have an access token
        const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;

        if (accessToken && accessToken !== "your_access_token_here") {
          const instagramPosts = await fetchInstagramMedia(accessToken, 6);
          setPosts(instagramPosts);
        } else {
          // Fallback to mock data if no valid token
          console.log(
            "Using mock Instagram data - configure NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN for real data",
          );
          setPosts(mockInstagramPosts);
        }
      } catch (error) {
        console.error("Failed to load Instagram posts:", error);
        // Fallback to mock data on error
        setPosts(mockInstagramPosts);
      }
    };

    loadInstagramPosts();
  }, []);

  const nextSlide = () => {
    if (currentIndex < posts.length - 4) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section id="instagram" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-10">
            <h2
              className="text-2xl uppercase tracking-wide mb-4"
              style={{ fontSize: "1.5em", color: "#333333" }}
            >
              Gallery
            </h2>
            <svg
              className="mx-auto"
              width="64"
              height="12"
              viewBox="0 0 64 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6Q9 3 15 7Q21 9 27 5Q33 2 39 8Q45 10 51 4Q57 1 62 6"
                stroke="#f4610b"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
          <a
            href="https://instagram.com/lesmomesmtl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-semibold transition-all"
            style={{ backgroundColor: "#333333" }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#f4610b")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#333333")}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Follow @lesmomesmtl
          </a>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 25}%)` }}
            >
              {posts.map((post) => (
                <div key={post.id} className="w-1/4 flex-shrink-0 px-2">
                  <div className="w-full aspect-square relative">
                    <a
                      href={post.permalink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      <img
                        src={post.image}
                        alt={
                          post.caption
                            ? post.caption.substring(0, 50) + "..."
                            : "Instagram post"
                        }
                        className="w-full h-full object-cover rounded hover:opacity-90 transition-opacity"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {currentIndex > 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full transition-all"
              style={{ backgroundColor: "#f4610b" }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {currentIndex < posts.length - 4 && (
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full transition-all"
              style={{ backgroundColor: "#f4610b" }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </div>

        <div className="text-center mt-8">
          <p style={{ fontSize: "0.9em", color: "#333333" }}>
            {process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN &&
            process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN !==
              "your_access_token_here"
              ? "Showing live Instagram posts from @lesmomesmtl"
              : "Configure Instagram API credentials to show live posts"}
          </p>
        </div>
      </div>
    </section>
  );
}
