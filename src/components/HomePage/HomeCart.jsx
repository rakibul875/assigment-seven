import React from 'react';

const HomeCart = () => {
    return (
        <div className='container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center'>
            <div className="px-10 py-9 bg-base-200 shadow-xl">
                <h1 className='font-bold text-gray-400 text-3xl'>10</h1>
                <p className='font-semibold text-gray-400 text-md mt-2'>Total Friends</p>
            </div>
            <div className="px-10 py-9 bg-base-200 shadow-xl">
                <h1 className='font-bold text-gray-400 text-3xl'>3</h1>
                <p className='font-semibold text-gray-400 text-md mt-2'>On Track</p>
            </div>
            <div className="px-10 py-9 bg-base-200 shadow-xl">
                <h1 className='font-bold text-gray-400 text-3xl'>6</h1>
                <p className='font-semibold text-gray-400 text-md mt-2'>Need Attention</p>
            </div>
            <div className="px-10 py-9 bg-base-200 shadow-xl">
                <h1 className='font-bold text-gray-400 text-3xl'>12</h1>
                <p className='font-semibold text-gray-400 text-md mt-2'>Interactions This Month</p>
            </div>
            
        </div>
    );
};

export default HomeCart;