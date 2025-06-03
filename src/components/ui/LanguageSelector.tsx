import { useLanguage } from "@/hooks/LanguageContext";
import { code } from "motion/react-client"
import { useState } from "react"
import { RiArrowDropDownLine } from "react-icons/ri";

export const LanguageSelector = () => {
    // const [selectedLanguage, setSelectedLanguage] = useState("EN");
    const { language, changeLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const availableLanguages = [
        { code: "EN", name: "English", flag: "/en.svg" },
        { code: "ES", name: "Spanish", flag: "/es.svg" },
    ]

    const currentLanguage = availableLanguages.find(lang => lang.code === language);

    const handleChangeLanguage = (code: string) => {
        changeLanguage(code);
        setIsOpen(false);
    }

    return (
        <>
            {/* Separador */}
            <div className="w-px h-6 bg-slate-600 mx-2"></div>

            {/* Selector de idiomas */}
            <div className="relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-200 hover:bg-slate-800/50 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    aria-label="Seleccionar idioma"
                >
                    <img src={currentLanguage?.flag} alt="" className="w-4" />
                    <span className="font-medium">{language}</span>
                    <RiArrowDropDownLine
                        className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                </button>

                {/* Dropdown */}
                {isOpen && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-slate-800 rounded-xl shadow-xl border border-slate-600 overflow-hidden z-50">
                        <div className="p-2">
                            {availableLanguages.map((languages) => (
                                <button
                                    key={languages.code}
                                    onClick={() => handleChangeLanguage(languages.code)}
                                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 text-left ${language === languages.code
                                        ? 'bg-blue-600 text-white'
                                        : 'text-gray-200 hover:bg-slate-700 hover:text-blue-400'
                                        }`}
                                >
                                    <img src={languages?.flag} alt="" className="w-4" />
                                    <div className="flex flex-col">
                                        <span className="font-medium">{languages.code}</span>
                                        <span className="text-xs opacity-75">{languages.name}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default LanguageSelector