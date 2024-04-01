
interface FooterProps {
    showCopyRight?: boolean;
    socialLinks?: {
        facebook?: string;
        twitter?: string;
        instagram?: string;
      }; 
}

export const Footer = ({ showCopyRight = true, socialLinks }: FooterProps) => {
    return (
        <footer className="flex flex-col h-full w-full relative bg-gray-800 bottom-0 text-white block">
            <div className="flex py-8">
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Logo</h1>
                        <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget turpis nec nunc.</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Links</h1>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Contact</h1>
                        <p>123 Main Street</p>
                        <p>City, State, 12345</p>
                        <p>
                            <a href="tel:123-456-7890">123-456-7890</a>
                        </p>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Social</h1>
                        <ul>
                            {socialLinks?.facebook && <li><a href={socialLinks.facebook}>Facebook</a></li>}
                            {socialLinks?.twitter && <li><a href={socialLinks.twitter}>Twitter</a></li>}
                            {socialLinks?.instagram && <li><a href={socialLinks.instagram}>Instagram</a></li>}
                        </ul>
                    </div>
                </div>
                {showCopyRight && <p className="text-center mt-8">© 2021 All rights reserved</p>}
            </div>
        </footer>
    );
}