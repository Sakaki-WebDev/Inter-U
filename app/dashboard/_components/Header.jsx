'use client';
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

function Header() {
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
      <Link href={'/'}>
        <Image src={'/logo2.svg'} width={100} height={100} alt='logo2' />
      </Link>
      <ul className=' hidden md:flex gap-12'>
        <Link href={'/'}>
          <li
            className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer
            ${path == '/' && 'text-primary font-bold'}
            `}
          >
            Home
          </li>
        </Link>
        <Link href={'/dashboard'}>
          <li
            className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer
            ${path == '/dashboard' && 'text-primary font-bold'}
            `}
          >
            Dashboard
          </li>
        </Link>

        <Link href={'#'}>
          <li
            className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer
            ${path == '/dashboard/upgrade' && 'text-primary font-bold'}
            `}
          >
            Upgrade
          </li>
        </Link>
        <Link href={'/dashboard/how'}>
          <li
            className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer
            ${path == '/dashboard/how' && 'text-primary font-bold'}
            `}
          >
            How it Works?
          </li>
        </Link>
      </ul>
      <UserButton />
    </div>
  );
}

export default Header;
