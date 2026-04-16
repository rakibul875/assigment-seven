import React, { useEffect, useState } from "react";
import FriendCart from "../../ui/FriendCart";
import { MoonLoader } from "react-spinners";

const AllFriends = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const friendsData = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();
        setFriends(data);
        setLoading(false);
    };
    friendsData();
  }, []);

  return (
    <div className="">
      {loading ? (
        <div className="container mx-auto my-10 bg-base-200">
            <div className="flex justify-center items-center py-30">
            <MoonLoader color="red"/>
            </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 container mx-auto">
          {friends.map((friend) => (
            <FriendCart friend={friend} key={friend.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllFriends;
