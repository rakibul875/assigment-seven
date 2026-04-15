import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { FriendsContext } from "../../context/friendsContext/FriendProvider";

const FriendsDetails = () => {
  const { friendsId } = useParams();

  const [friendDetails, setFriendDetails] = useState([]);

  useEffect(() => {
    const friendsDetails = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();
      setFriendDetails(data);
    };
    friendsDetails();
  }, []);

  const exactFriend = friendDetails.find((friend) => friend.id == friendsId);
  if (!exactFriend) {
    return <p>Loading...</p>;
  }

  const {
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = exactFriend;

  const { handelContact } = useContext(FriendsContext);

  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="col-span-1">
          <div className="px-10 py-5 bg-base-200 shadow-lg">
            <div className="space-y-5">
              <img className="rounded-full mx-auto" src={picture} />
              <h1 className="text-center text-3xl font-bold">{name}</h1>
              <p className="text-2xl font-semibold text-gray-400 text-center">
                {days_since_contact}d ago
              </p>
              <div className="flex gap-2 justify-center">
                {tags.map((tag, index) => (
                  <p
                    key={index}
                    className="bg-green-400 text-md text-white rounded-full px-2 py-1 text-center"
                  >
                    {tag}
                  </p>
                ))}
              </div>
              <div className="flex justify-center">
                <p
                  className={`text-center w-25 text-white px-2 py-1 rounded-full ${status === "almost due" ? "bg-yellow-500" : status === "on-track" ? "bg-green-800" : "bg-red-600"}`}
                >
                  {status}
                </p>
              </div>
              <p className="text-gray-600 text-center text-2xl font-bold">
                "{bio}"
              </p>
              <p className="text-gray-500 text-xl text-center">
                Preferred:{email}
              </p>
            </div>
          </div>
          <div className="space-y-4 mt-5">
            <button className="btn btn-xl bg-base-300 w-full text-3xl">
              Snooze 2 weeks
            </button>
            <button className="btn btn-xl bg-base-300 w-full text-3xl">
              Archive
            </button>
            <button className="btn btn-xl bg-base-300 w-full text-3xl  text-red-500">
              Delete
            </button>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-4">
              <div className="px-10 py-9 bg-base-200 shadow rounded-xl">
                <h1 className="font-bold text-green-900 text-3xl">
                  {days_since_contact}
                </h1>
                <p className="font-semibold text-gray-500 text-md mt-2">
                  Days Since Contact
                </p>
              </div>
              <div className="px-10 py-9 bg-base-200 shadow rounded-xl">
                <h1 className="font-bold text-green-900 text-3xl">{goal}</h1>
                <p className="font-semibold text-gray-500 text-md mt-2">
                  Goal (Days)
                </p>
              </div>
              <div className="px-10 py-9 bg-base-200 shadow rounded-xl">
                <h1 className="font-bold text-green-900 text-3xl">
                  {next_due_date}
                </h1>
                <p className="font-semibold text-gray-500 text-md mt-2">
                  Next Due
                </p>
              </div>
            </div>
            <div className="bg-base-200 rounded-xl shadow py-10 mt-5">
              <div className="flex justify-between mx-5">
                <h1 className="text-2xl font-bold">Relationship Goal</h1>
                <button className="btn btn-lg">Edit</button>
              </div>
              <h1 className="text-xl font-semibold text-gray-400 mx-5">
                Connect every <span className="text-black">{goal}days</span>
              </h1>
            </div>
            <div className="bg-base-200 rounded-xl shadow py-10 mt-5">
              <h1 className="text-2xl font-bold mx-5">Quick Check-In</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mt-5 gap-4">
                <button
                  className="btn btn-xl mx-4 p-10"
                  onClick={() => handelContact(exactFriend)}
                >
                  Call
                </button>
                <button
                  className="btn btn-xl mx-4 p-10"
                  onClick={() => handelContact(exactFriend)}
                >
                  Text
                </button>
                <button
                  className="btn btn-xl mx-4 p-10"
                  onClick={() => handelContact(exactFriend)}
                >
                  Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;
