"use client";
import { navItems } from "@/data";
import React, { useEffect, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import Hamburger from "hamburger-react";
import { useLanguage } from "@/hooks/LanguageContext";

export const FloatingNav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const {language} = useLanguage();
    const [activeSection, setActiveSection] = useState<string>("");


    const handleMobileNavClick = (link: string) => {
        setIsMobileMenuOpen(false);
        window.location.href = link;
    }

    //cerrar menu al hacer click afuera o en una x 
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMobileMenuOpen(false);
            }
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Detectar la sección activa al hacer scroll
    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        
        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry =>{
                if(entry.isIntersecting){
                    const id = entry.target.getAttribute("id");
                    if (id) setActiveSection(`#${id}`);
                }
            })
        };

        const observer = new IntersectionObserver(callback, {
            root: null,
            rootMargin: "0px",
            threshold: [0.1, 0.25, 0.5, 0.75, 1.0],
        });

        sections.forEach((section) => {
            observer.observe(section);
        })

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };

    }, []);

    return (
        <>
            {/* <header className="fixed top-0 left-1/2 -translate-x-1/2 z-[1000] mx-auto mt-2 w-auto"> */}
            <header className="fixed top-0 md:right-1/2 md:translate-x-1/2 z-[1000] mx-auto mt-2 w-auto right-2 translate-x-0">

                <nav className="flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 
                    justify-center items-center bg-gradient-to-r from-[#0f172a]  to-[#334155]">

                    <div className="hidden md:flex items-center">
                        {navItems.map(({ name, nameEs, link }, index) => (
                            <a
                                key={index}
                                href={link.toString()}
                                aria-label={name}
                                className={`relative block px-2 py-2 transition hover:text-blue-400 dark:hover:text-blue-500
                                ${activeSection === link ? "text-blue-400 dark:text-blue-500 font-bold" : ""}`}
                            >
                                {language === 'EN' ? name : nameEs}
                            </a>
                        ))}
                        <LanguageSelector />
                    </div>

                    {/* btn hamburguer available mobile devices */}
                    <div className="md:hidden flex items-end ml-auto">
                        <Hamburger toggled={isMobileMenuOpen} toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} size={20} />
                    </div>
                </nav>
            </header >

            {/* Menú Mobile - Fullscreen */}
            {
                isMobileMenuOpen && (
                    // <div className="md:hidden fixed inset-0 z-[999] bg-slate-900/95 backdrop-blur-md">
                    <div className="md:hidden fixed inset-0 z-[999] bg-[linear-gradient(58deg,rgb(0_3_25)_0%,rgb(63_63_82)_47%,rgb(0_3_25)_100%)]">
                        <div className="flex flex-col items-center justify-center h-full space-y-8">
                            {navItems.map(({ name, link, nameEs }, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleMobileNavClick(link)}
                                    className="text-xl font-medium text-gray-200 hover:text-blue-400 transition-colors duration-200 py-2 px-8 rounded-full hover:bg-slate-800/50"
                                >
                                    {language === 'EN' ? name : nameEs}
                                </button>
                            ))}
                            <LanguageSelector />
                        </div>
                    </div>
                )
            }
        </>
    );
};