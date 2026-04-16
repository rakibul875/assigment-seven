import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const FriendsContext = createContext();

const FriendProvider = ({ children }) => {
  const [contact, setContact] = useState([]);

  const handelContact = (exactFriend) => {
    setContact(contact=>[...contact, exactFriend]);
    
    if(exactFriend.type=='Call'){
        toast.success(`Calling with ${exactFriend.name}...`)
    }
    if(exactFriend.type=='Text'){
        toast.success(`Text with ${exactFriend.name}`)
    }
    if(exactFriend.type=='Video'){
        toast.success(`Video with ${exactFriend.name}`)
    }
  
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
