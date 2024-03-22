import BackgroundImage from "@/app/ui/overview/backgroundImage";
import Services from "@/app/ui/services";
import Partners from "@/app/ui/partners";

export default function Page() {
    return (
        <>
        <main className='h-screen'> 
            <BackgroundImage />  
            <Services />
            <Partners />
        </main>
        </>
    );
}