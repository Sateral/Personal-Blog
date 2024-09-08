'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@prisma/client';
import { usePathname } from 'next/navigation';

import { Input } from '@/components/ui/input';
import NavButton from '@/components/navButton';
import { Button } from '@/components/ui/button';
import { CommandMenu } from '@/components/command-menu';
import { ThemeToggle } from '@/components/theme-toggle';
import MaxWidthWrapper from '@/components/max-width-wrapper';

interface NavbarProps {
  data: Post[];
}

const routes = [
  {
    href: '/',
    label: 'Posts',
  },
  {
    href: '/categories',
    label: 'Categories',
  },
  {
    href: '/tags',
    label: 'Tags',
  },
];

const Navbar = ({ data }: NavbarProps) => {
  const pathname = usePathname();

  return (
    <nav className='sticky bg-background]] bg-noisy-texture shadow-sm top-0 w-full  mb-4 z-50'>
      <MaxWidthWrapper className='flex flex-row h-16 justify-between items-center'>
        <div className='flex flex-row items-center gap-x-4'>
          <Link href='/' passHref>
            <p className='uppercase font-extrabold text-xl dark:hover:bg-white/20 hover:bg-black/20 hover:bg-opacity-5 transition px-2 py-1 rounded-md hover:cursor-pointer'>
              Blogs
            </p>
          </Link>
          {routes.map((route) => (
            <NavButton
              key={route.label}
              href={route.href}
              label={route.label}
              isActive={pathname === route.href}
            />
          ))}
        </div>
        <div className='flex flex-row items-center gap-2'>
          <div className='w-full flex-1 md:w-auto md:flex-none'>
            <CommandMenu data={data} />
          </div>
          <Button asChild>
            <Link href={'/new'}>New Post</Link>
          </Button>
          <ThemeToggle />
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
