import TopNav from "../ui/navigation/topNav";
import BackgroundImage from '@/app/ui/overview/backgroundImage';

export default function Layout ({ children }: { children: React.ReactNode }) {
    return (
        <main>
        <TopNav />
        {children}
        </main>
    );
}