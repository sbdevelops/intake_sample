// src/TranslationContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import translations from './translations.tsx';

const defaultLanguage = 'en'; // Default language

interface TranslationContextType {
    language: string;
    setLanguage: (language: string) => void;
    t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState(defaultLanguage);

    const t = (key: string) => translations[language][key] || translations[defaultLanguage][key];

    return (
        <TranslationContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </TranslationContext.Provider>
    );
};

export const useTranslationContext = () => {
    const context = useContext(TranslationContext);
    if (context === undefined) {
        throw new Error('useTranslationContext must be used within a TranslationProvider');
    }
    return context;
};
