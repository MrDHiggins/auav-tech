"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {clsx} from 'clsx';

import {
    HomeIcon,
    BuildingStorefrontIcon,
    InboxIcon,
    BookmarkIcon
} from '@heroicons/react/24/solid';

const itemLinks = [
    {name: 'Overview', href: '/auavTechHome', icon: HomeIcon},
    {name: 'Services Offered', href: '/auavTechHome/services', icon: InboxIcon},//Must be
    {name: 'Operations', href: '/auavTechHome/operations', icon: InboxIcon},
    {name: 'Company', href: '/auavTechHome/company', icon: BuildingStorefrontIcon},
    {name: 'Blog', href: '/auavTechHome/blog', icon: BookmarkIcon},
    {name: 'Contact', href: '/auavTechHome/contact', icon: InboxIcon},
];


export default function NavItems() {
    const pathName = usePathname();
  return (
    <>
    {itemLinks.map((link) => {
        const LinkIcon = link.icon;
        return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex h-[40px] m-1 grow items-center justify-center gap-2   p-3 text-sm font-medium hover:bg-sky-100 hover:text-gray-600 md:flex-row md:justify-center md:p-2 md:px-3',
                {
                  'text-black': pathName === link.href,
                },
              )}
            >
                <LinkIcon className='flex flex-row h-6 w-6' />
                <p className='hidden md:block'>{link.name}</p>
            </Link>
        );
    }
    )}
    </>
  );
}