import OverviewBg from "@/app/ui/overview/overviewBg";
import ServicesOverview from "@/app/ui/overview/ServicesOverview";
import PartnerOverview from "@/app/ui/overview/partnersOverview";

export default function Page() {
    return (
        <>
        <main className='h-screen'> 
            <OverviewBg />  
            <ServicesOverview />
            <PartnerOverview />
        </main>
        </>
    );
}