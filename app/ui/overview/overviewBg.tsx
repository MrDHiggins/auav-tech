import Image from 'next/image';
import cityBowlBG from '@/public/bgImages/cityBowlLookOut_Bg.webp'

export default function OverviewBg() {
    return (
            <Image
                src={cityBowlBG}
                alt='City Bowl Look Out Background Image'
                objectFit='contain'
                className='flex w-full h-1/2'
            />
    );
}