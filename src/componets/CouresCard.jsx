'use client'
import React from 'react';
import Image from 'next/image';

const CouresCard = ({coures}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure> <Image src={coures?.img} width={250} height={250} alt='An Image'/> </figure>
            <div className="card-body">
                <h2 className="card-title">
                   {coures?.couresName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{coures?.desc}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default CouresCard;