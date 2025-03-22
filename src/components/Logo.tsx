
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  linkClassName?: string;
}

const Logo: React.FC<LogoProps> = ({ className, linkClassName }) => {
  return (
    <Link to="/" className={cn("inline-flex items-center group", linkClassName)}>
      <div className={cn("font-display text-blue-600 font-bold text-xl", className)}>
        <span className="mr-0.5">Sell</span>
        <span className="text-teal-500">My</span>
        <span className="mr-0.5">Timeshare</span>
      </div>
    </Link>
  );
};

export default Logo;
