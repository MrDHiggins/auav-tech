import TopNav from "../ui/navigation/topNav";

export default function Layout ({ children }: { children: React.ReactNode }) {
    return (
        <main>
        <TopNav />
        {children}
        </main>
    );
}