"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { navItems } from "@/constants";
import "./navigation.css";

interface NavigationProps {
  className?: string;
  showMenuItem?: boolean;
}


const Navigation = ({ className,showMenuItem = false } : NavigationProps) => {
    const currentPath = usePathname();
  return (

      <ul className={className}>
        {showMenuItem && ( 
          <li className="font-black uppercase ">Menu</li>
        )}
        {navItems.map((item) => (
          <li key={item.name}>
            <Link href={item.href} className={currentPath === item.href ? "text-crayola" : ""}>
             {item.name}
            </Link>
          </li>
        ))}
      </ul>

  );
};

export default Navigation;
