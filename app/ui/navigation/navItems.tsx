"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {clsx} from 'clsx';
import Image from 'next/image';
import auavtechlogo  from "@/public/auavtech-logo.png"

import {
    HomeIcon,
    BuildingStorefrontIcon,
    InboxIcon,
    BookmarkIcon
} from '@heroicons/react/24/solid';

const itemLinks = [
    {name: 'Overview', href: '/', icon: HomeIcon},
    {name: 'Services', href: '/services', icon: InboxIcon},
    {name: 'Operations', href: '/operations', icon: InboxIcon},
    {name: 'Company', href: '/company', icon: BuildingStorefrontIcon},
    {name: 'Blog', href: '/blog', icon: BookmarkIcon},
    {name: 'Contact', href: '/contact', icon: InboxIcon},
];


export default function NavItems() {
    const pathName = usePathname();
  return (
<>
  <div className="flex items-center justify-between w-full"> 
    <div>
     <Image src={auavtechlogo} alt='Company Logo' width={60} height={60} />
    </div>

    <div className="flex justify-end">
      {itemLinks.map((link) => {
        const LinkIcon = link.icon;
        return (
          <div key={link.name}> 
            <Link
              href={link.href}
              className={clsx(
                'flex h-[40px] w-30 m-1 items-center justify-center shrink gap-2  text-sm font-medium hover:underline text md:flex-row md:justify-center md:p-2 md:px-3',
                { 
                  'underline text-green-500:': pathName === link.href
                }
              )}
            >
              <LinkIcon className='flex flex-row h-6 w-6' />
              <p className='hidden md:block'>{link.name}</p>
            </Link>
          </div>
        );
      })}
    </div>
  </div>
</>
);
}

