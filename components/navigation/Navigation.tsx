"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { navItems } from "@/constants";
import "./navigation.css";

interface NavigationProps {
  className?: string;
  showMenuItem?: boolean;
  toggleMenu?: () => void;
}


const Navigation = ({ className,showMenuItem= false,toggleMenu  } : NavigationProps) => {
    const currentPath = usePathname();
   
  return (

      <ul className={className}>
        {showMenuItem && ( 
          <li className="font-black uppercase ">Menu</li>
        )}
        {navItems.map((item) => (
          <li key={item.name} className={`${currentPath === item.href ? "after:bg-crayola" : ""} `}>
            <Link href={item.href} 
             onClick={toggleMenu} 
            className={`${currentPath === item.href ? "text-crayola" : ""} `}
             >
             {item.name}
            </Link>
          </li>
        ))}
      </ul>

  );
};

export default Navigation;
