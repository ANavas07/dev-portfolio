'use client'
import { createContext, useState, useContext, ReactNode } from 'react';

// Define el tipo para el contexto
type LanguageContextType = {
    language: string;
    changeLanguage: (lang: string) => void;
};

// Crea el contexto con tipo y valor inicial null (necesita casteo)
const LanguageContext = createContext<LanguageContextType | null>(null);

// Define las props del Provider (children debe tener tipo ReactNode)
type LanguageProviderProps = {
    children: ReactNode;
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
    const [language, setLanguage] = useState('EN');

    const changeLanguage = (lang: string) => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Hook personalizado con verificación de null
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};