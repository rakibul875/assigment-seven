import React, { createContext, useState} from 'react';

export const FriendsContext= createContext()

const FriendProvider = ({children}) => {


    const [contact,setContact]=useState([])

    const handelContact=(exactFriend)=>{
        setContact([...contact,exactFriend])
    }

    const FriendsData={
        handelContact,
        contact
    }
    return (
        <div>
            <FriendsContext.Provider value={FriendsData}>
                {children}
            </FriendsContext.Provider>
        </div>
    );
};

export default FriendProvider;