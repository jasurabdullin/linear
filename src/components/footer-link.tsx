import { FooterLinks as Links } from '@/lib/data';
import Link from 'next/link';

export const FooterLink = () => {
  return (
    <div className="flex flex-wrap">
      {Links.map((column) => (
        <div
          key={column.title}
          className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem] space-y-4"
        >
          <h3 className="mb-3 font-medium text-sm opacity-70">{column.title}</h3>
          <ul className='space-y-4'>
            {column.links.map((link) => (
              <li key={link.label} className="[&_a]:last:mb-0 text-sm font-light">
                <Link
                  href={link.href}
                  className="mb-3 block text-gray-400 transition-colors hover:text-gray-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
