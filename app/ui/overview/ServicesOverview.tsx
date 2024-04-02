'use client'

import React,{ useState } from 'react';
import { motion } from 'framer-motion';

export default function ServicesOverview() {

    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    function handleFlip() {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    }
  
    return (
        <div className='flex items-center justify-center bg-black h-[600px] cursor-pointer'>
            <div className='flip-card w-[600px] h-[360px] rounded-md' onClick={handleFlip}>
                <motion.div className='flip-card-inner w-[100%] h-[100%]'
                    initial={false}
                    animate={{ rotateY: isFlipped ? 180 : 360 }} 
                    transition={{ duration: 1 , animationDirection: 'alternate', ease: 'easeInOut'}}
                    onAnimationComplete={() => setIsAnimating(false)}
                    >

                        <div className='flip-card-front w-[100%] border-[1px] bg-red-500 rounded-lg p-4'>
                            <h1 className='text-white text-2xl font-bold'>Front</h1>
                            <p>On top of the world</p>
                        </div>

                        <div className='flip-card-back w-[100%] border-[1px] bg-green-500 rounded-lg p-4'>
                            <h1 className='text-white text-2xl font-bold'>Back</h1>
                            <p>underneath of the world</p>
                        </div>

                </motion.div>
            </div>
        </div>
    );
}