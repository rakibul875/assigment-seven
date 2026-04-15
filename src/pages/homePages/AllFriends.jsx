import React, { useEffect, useState } from 'react';
import FriendCart from '../../ui/FriendCart';

const AllFriends = () => {

    const [friends,setFriends]=useState([])

    useEffect(()=>{
        const friendsData=async()=>{
            const res= await fetch("/friends.json")
            const data= await res.json()
            setFriends(data)
        }
        friendsData()
    },[])
   

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {
                friends.map(friend=> <FriendCart friend={friend} key={friend.id}/>)
            }
        </div>
    );
};

export default AllFriends;