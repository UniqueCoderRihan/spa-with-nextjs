'use client'
import React from 'react';
import Image from 'next/image';

const CouresCard = ({ coures }) => {
    return (
        <div className="card w-96 bg-base-200 shadow-xl">
            <figure> <Image src={coures?.img} width={250} height={250} alt='An Image' /> </figure>
            <div className="card-body">
                <h2 className="card-title font-semibold text-2xl">
                    {coures?.couresName}
                </h2>
                <p>{coures?.desc}</p>
                <button className='button'>Add Now</button>
            </div>
        </div>
    );
};

export default CouresCard;