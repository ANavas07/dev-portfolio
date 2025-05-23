"use client";
import { navItems } from "@/data";
import React, { useEffect } from "react";

export const FloatingNav = () => {

    return (
        <header className="fixed top-0 left-1/2 -translate-x-1/2 z-[1000] mx-auto mt-2 w-auto">
            <nav className="flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center">
                {navItems.map(({ name, link }, index) => (
                    <a
                        key={index}
                        href={link.toString()}
                        aria-label={name}
                        className="relative block px-2 py-2 transition hover:text-blue-400 dark:hover:text-blue-500"
                    >
                        {name}
                    </a>
                ))}
            </nav>
        </header>
    );
};