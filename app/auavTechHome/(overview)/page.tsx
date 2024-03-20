import Image from "next/image";
import cityBowlBG from "@/public/bgImages/cityBowlLookOut_Bg.webp";

export default function Page() {
    return (
        <main>
            <div className='flex'>
            <Image
                src={cityBowlBG}
                alt="African UAV Technologies"
                objectFit="contain"
                />
             <h1>African UAV Technologies is currently under maintenance</h1>   
            </div>
        </main>
    );
}