// src/TranslationContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import translations, { Language } from './translations';

const defaultLanguage: Language = 'en'; // Default language

interface TranslationContextType {
    language: Language;
    setLanguage: (language: Language) => void;
    t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState(defaultLanguage as Language);

    const t = (key: string) => translations[key][language] || translations[key][defaultLanguage];

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
