import { internalRoute } from '@/constant/route';
import Link from 'next/link';

const NavMenu = () => {
  return (
    <nav>
      <ul className="flex-align gap-[16px]">
        {internalRoute?.map((route) => (
          <li key={route.path} className="none-draggable">
            <Link href={route.path}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
