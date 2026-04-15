import React, { useEffect, useState } from 'react';

const FriendsDetails = () => {

    const [friendDetails,setFriendDetails]=useState([])

    useEffect(()=>{
        const friendsDetails= async()=>{
            const res= await fetch('/friends.json')
            const data= await res.json()
            setFriendDetails(data)
        }
        friendsDetails()
    },[])

    return (
        <div>
            <h1>{friendDetails.length}</h1>
        </div>
    );
};

export default FriendsDetails;