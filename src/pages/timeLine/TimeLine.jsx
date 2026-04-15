import React, { useContext } from 'react';
import { FriendsContext } from '../../context/friendsContext/FriendProvider';
import EmptyPage from '../../ui/EmptyPage';
import ContactCart from '../../ui/ContactCart';

const TimeLine = () => {
 
    const {contact}=useContext(FriendsContext)
    console.log(contact.length)
    

    return (
        <div className='container mx-auto my-20'>
            <h1 className='text-3xl font-bold'>Time Line</h1>

            {
                contact.length==0? <EmptyPage/>: contact.map((cont,index)=><ContactCart cont={cont} key={index} />)
            }
        
        </div>
    );
};

export default TimeLine;