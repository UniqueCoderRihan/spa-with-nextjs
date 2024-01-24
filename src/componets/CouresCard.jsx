'use client'
import React from 'react';
import Image from 'next/image';

const CouresCard = ({ addNewCart, coures }) => {
    const handleAddToCart =()=>{
        addNewCart(coures);
    }
    return (
        <div className="card w-96 bg-base-200">
            <figure> <Image src={coures?.img} width={250} height={250} alt='An Image' /> </figure>
            <div className="card-body">
                <h2 className="card-title font-semibold text-2xl">
                    {coures?.couresName}
                </h2>
                <p className='font-semibold text-red-400'>Coures Price: {coures.price}</p>
                <p>{coures?.desc}</p>
                <button onClick={handleAddToCart} className='button'>Add Now</button>
            </div>
        </div>
    );
};

export default CouresCard;