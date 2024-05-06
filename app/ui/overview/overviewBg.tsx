import Image from 'next/image';
import cityBowlBG from '@/public/bgImages/HeroDroneCT.webp'

export default function OverviewBg() {
    return (
            <Image
                src={cityBowlBG}
                alt='City Bowl Look Out Background Image'
                priority={true}
                className='flex w-full h-full object-contain bg-center bg-no-repeat bg-cover'
            />
    );
}