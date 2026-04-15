import React, { useContext } from 'react';
import { FriendsContext } from '../../context/friendsContext/FriendProvider';

const TimeLine = () => {
 
    const {contact}=useContext(FriendsContext)
    console.log(contact.length)
    

    return (
        <div className='container mx-auto my-20'>
            <h1 className='text-3xl font-bold'>Time Line</h1>
          
          <div className="text-center py-25">
            <h1 className='text-2xl font-bold'>No timelines yet</h1>
            <p className='text-xl font-semibold text-gray-400'>Your timeline is empty. Start adding important timelines or <br />timelines to see them appear here.</p>
          </div>
        </div>
    );
};

export default TimeLine;