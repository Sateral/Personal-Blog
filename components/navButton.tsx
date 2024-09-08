import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type Props = {
  href: string;
  label: string;
  isActive?: boolean;
};

const NavButton = ({ href, label, isActive = false }: Props) => {
  return (
    <Button
      asChild
      size='sm'
      variant='outline'
      className={cn(
        'w-full lg:w-auth justify-between font-normal dark:hover:bg-white/20 hover:bg-black/20 border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none focus:bg-white/30 transition',
        isActive ? 'bg-black/10 dark:bg-white/10' : 'bg-transparent'
      )}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default NavButton;
