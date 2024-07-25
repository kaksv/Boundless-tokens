'use client'

import {
  UserGroupIcon,
  HomeIcon,
  CalendarDaysIcon,
  DocumentDuplicateIcon,
  BriefcaseIcon,
  Square3Stack3DIcon,
  BanknotesIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
// import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: 'NFT Market places',
    href: '#',
    icon: BriefcaseIcon,
  },
  { name: 'My NFTs', href: '/wallet/id', icon: Square3Stack3DIcon },
  { name: 'Stake TBA Assets', href: '/staking', icon: BanknotesIcon },
]

export default function NavLinks() {
  const pathname = usePathname()
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'sm:flex h-[64] sm:h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 shadow-xl p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 shadow-sm text-blue-600 ': pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="">{link.name}</p>
          </Link>
        )
      })}
    </>
  )
}