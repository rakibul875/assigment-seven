import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const FriendsContext = createContext();

const FriendProvider = ({ children }) => {
  const [contact, setContact] = useState([]);


  const handelContact = (exactFriend) => {
    setContact([...contact, exactFriend]);
    toast.success('Contact Successful')
  };

  const FriendsData = {
    handelContact,
    contact,
  };
  return (
    <div>
      <FriendsContext.Provider value={FriendsData}>
        {children}
      </FriendsContext.Provider>
    </div>
  );
};

export default FriendProvider;
