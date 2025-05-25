"use client";
import React from "react";
import { MdStar } from "react-icons/md";
import { LuThumbsDown, LuThumbsUp } from "react-icons/lu";
import { useState } from "react";
import { reviewData } from "@/app/data/Reviews";
import user from "@/app/assets/user.png";
import Image from "next/image";
export default function ReviewsList() {
  // Initialize state for each review's reaction status
  const initialReactions = Array(5).fill(null); // assuming 5 reviews for illustration
  const [reactions, setReactions] = useState(initialReactions);
  const [visibleCount, setVisibleCount] = useState(5); // Initially showing 10 reviews
  const handleReaction = (index, reactionType) => {
    const newReactions = [...reactions];
    if (newReactions[index] === reactionType) {
      // If the same button is clicked again, remove the reaction
      newReactions[index] = null;
    } else {
      // Set the reaction to either 'like' or 'dislike'
      newReactions[index] = reactionType;
    }
    setReactions(newReactions);
  };
  const loadMoreReviews = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 10, reviewData.length));
  };
  return (
    <div className="my-6 max-w-screen-md space-y-9 ps-2">
      <div>
        <div>
          <p className="text-gray-350 text-base">
            {visibleCount - 4} out {visibleCount} of 458 Reviews
          </p>
        </div>
      </div>
      {reviewData.slice(0, visibleCount).map((review, index) => (
        <div key={index}>
          <div className="flex items-start gap-4">
            <div>
              {review.userAvatar && review.userAvatar ? (
                <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
                  <Image
                    priority={false}
                    loading="lazy"
                    src={review.userAvatar || user}
                    width={48}
                    height={48}
                    alt={user.userName || "avatar"}
                    className="rounded-full"
                  />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-full bg-blue-150 text-white flex items-center justify-center text-2xl font-semibold">
                  {review.userName.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            <div className="text-base">
              <div className="mb-1.5 space-y-2">
                <h1 className="font-semibold">{review.userName}</h1>
                <div className="flex items-center text-sm text-gray-450 gap-1">
                  <div className="w-5 h-5">
                    <Image
                      priority={false}
                      loading="lazy"
                      width={20}
                      height={20}
                      src={review.countryFlagURL}
                      alt={review?.userCountry || "country"}
                    />
                  </div>
                  <p>{review.userCountry}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-1.5 sm:gap-4">
                  <div className="text-blue-150 flex items-center space-x-0.5">
                    <MdStar className="w-4" />
                    <MdStar className="w-4" />
                    <MdStar className="w-4" />
                    <MdStar className="w-4" />
                    <MdStar className="w-4" />
                    <p className="font-semibold text-sm text-gray-150">5</p>
                  </div>
                  <p className="text-sm text-gray-450">{review.reviewDate}</p>
                </div>
                <div>
                  <p className="text-gray-150">{review.reviewText}</p>
                </div>
                <div className="text-sm font-semibold flex gap-3">
                  <p className="font-sans">Helpful?</p>
                  <div
                    onClick={() => handleReaction(index, "like")}
                    className={`flex items-center gap-1 ${
                      reactions[index] === "like"
                        ? "text-green-150"
                        : "text-gray-150"
                    } text-sm cursor-pointer`}
                  >
                    <LuThumbsUp className="w-3.5 h-3.5" />
                    <p>Yes</p>
                  </div>
                  <div
                    onClick={() => handleReaction(index, "dislike")}
                    className={`flex items-center gap-1 ${
                      reactions[index] === "dislike"
                        ? "text-red-500"
                        : "text-gray-150"
                    } text-sm cursor-pointer`}
                  >
                    <LuThumbsDown className="w-3.5 h-3.5" />
                    <p>No</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="ms-16">
        {visibleCount < reviewData.length && (
          <button
            id=""
            onClick={loadMoreReviews}
            className="font-semibold text-blue-150 px-6 py-3 rounded-md border border-blue-150"
          >
            Load More Reviews
          </button>
        )}
      </div>
    </div>
  );
}
