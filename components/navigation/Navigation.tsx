"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { navItems } from "@/constants";
import "./navigation.css";
import useIsMobile from "@/hooks/useIsMobile"

interface NavigationProps {
  className?: string;
  showMenuItem?: boolean;
  toggleMenu?: () => void;
}


const Navigation = ({ className,showMenuItem= false,toggleMenu  } : NavigationProps) => {
    const currentPath = usePathname();
    const isMobile = useIsMobile();

  return (

      <ul className={className}>
        {showMenuItem && ( 
          <li className="font-black uppercase ">Menu</li>
        )}
        {navItems.map((item) => (
          <li key={item.name} className={`${currentPath === item.href ? "after:bg-crayola" : ""} `}>
            <Link href={item.href} 
            onClick={isMobile ? toggleMenu : undefined}
            className={`lg:hover:text-crayola lg:transition-colors lg:duration-400 ${currentPath === item.href ? "text-crayola" : ""} `}
             >
             {item.name}
            </Link>
          </li>
        ))}
      </ul>

  );
};

export default Navigation;
