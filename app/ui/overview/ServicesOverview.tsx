'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface flipCardData {
    id: string; 
    title?: string;
    frontContent: string;
    backContent: string;
}

const cardServiceData: flipCardData[] = [
    {
        id: '1',
        title: 'Licensing',
        frontContent: 'We develop the most advanced drones and payloads on the market. Our drones are designed to be reliable, efficient, and easy to use.',
        backContent: 'Our manufacturing process is rigorous and ensures that our drones are built to last.',
    },
    {
        id: '2',
        title: 'Licensing',
        frontContent: 'We develop the most advanced drones and payloads on the market. Our drones are designed to be reliable, efficient, and easy to use.',
        backContent: 'Our manufacturing process is rigorous and ensures that our drones are built to last.',
    },];

export default function ServicesOverview() {
    const [flippedStates, setFlippedStates] = useState<Record<string, boolean>>(cardServiceData.reduce((acc, card) => ({ ...acc, [card.id]: false }), {}));

    function handleFlip(cardId: string) {
        setFlippedStates((prevStates) => ({
            ...prevStates,
            [cardId]: !prevStates[cardId],
        }));
    }

    const ServiceCard = ({ cardData }: { cardData: flipCardData}) => {
        return (
            <motion.div className='flip-card w-[600px] h-[360px] rounded-md' onClick={() => handleFlip(cardData.id)}>
                <motion.div className='flip-card-inner w-[100%] h-[100%]'
                    key={cardData.id}
                    initial={false}
                    animate={{ rotateY: flippedStates[cardData.id] ? 180 : 0 }}
                    transition={{ duration: 0.5 , animationDirection: 'normal'}}
                >
                    <div className="flip-card-front w-[100%] h-[100%] border-[1px] bg-red-500 rounded-lg p-1">
                        <h1 className="text-white text-2xl font-bold">{cardData.title}</h1>
                        <p>{cardData.frontContent}</p>
                    </div>

                    <div className="flip-card-back w-[100%] h-[100%] border-[1px] bg-green-500 rounded-lg p-1">
                        <p>{cardData.backContent}</p>
                    </div>
                </motion.div>
            </motion.div>
        )
    }

    return (
        <div className="flex items-center justify-center bg-black h-[600px] cursor-pointer">
            <AnimatePresence>
                {cardServiceData.map((cardData) => (
                    <ServiceCard cardData={cardData} key={cardData.id} />
                ))}
            </AnimatePresence>
        </div>
    );
}
