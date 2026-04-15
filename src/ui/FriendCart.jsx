import React from "react";
import { Link } from "react-router";

const FriendCart = ({ friend }) => {
  return (
    <Link to={`/friendsDetails/${friend.id}`} className="px-10 py-5 bg-base-200 shadow-lg my-10">
      <div className="space-y-5">
        <img className="rounded-full mx-auto" src={friend.picture} />
        <h1 className="text-center text-3xl font-bold">{friend.name}</h1>
        <p className="text-2xl font-semibold text-gray-400 text-center">
          {friend.days_since_contact}d ago
        </p>
        <div className="flex gap-2 justify-center">
          {friend.tags.map((tag, index) => (
            <p key={index} className="bg-green-400 text-md text-white rounded-full px-2 py-1 text-center">
              {tag}
            </p>
          ))}
        </div>
        <div className="flex justify-center">
          <p
            className={`text-center w-25 text-white px-2 py-1 rounded-full ${friend.status === "almost due" ? "bg-yellow-500" : friend.status === "on-track" ? "bg-green-800" : "bg-red-600"}`}
          >
            {friend.status}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FriendCart;
