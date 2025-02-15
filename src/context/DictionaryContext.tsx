import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { Locale } from "../../i18n-config";
import { getDictionary } from "../getDictionary";
import { dictionariesProps } from "@/types/dictionaries";
import { setCookie, parseCookies } from "nookies";

type DictionaryContextType = {
  dictionary: dictionariesProps | null;
  lang: Locale;
  changeLanguage: (newLang: Locale) => void;
};

const DictionaryContext = createContext<DictionaryContextType | undefined>(
  undefined,
);

export function DictionaryProvider({
  children,
  lang: initialLang,
}: {
  children: ReactNode;
  lang: Locale;
}) {
  const cookies = parseCookies();
  const storedLang = (cookies.language as Locale) || initialLang;

  const [lang, setLang] = useState<Locale>(storedLang);
  const [dictionary, setDictionary] = useState<dictionariesProps | null>(null);

  useEffect(() => {
    const loadDictionary = async () => {
      const dict = await getDictionary(lang);
      setDictionary(dict);
    };
    loadDictionary();
  }, [lang]);

  const changeLanguage = (newLang: Locale) => {
    setLang(newLang);
    setCookie(null, "language", newLang, { path: "/" });
    window.location.href = `/${newLang}`;
  };

  return (
    <DictionaryContext.Provider value={{ dictionary, lang, changeLanguage }}>
      {children}
    </DictionaryContext.Provider>
  );
}

/**
 * Hook to access the current dictionary and change language.
 *
 * Must be used within a {@link DictionaryProvider} component.
 */
export function useDictionary() {
  const context = useContext(DictionaryContext);
  if (!context) {
    throw new Error("useDictionary must be used within a DictionaryProvider");
  }
  return context;
}
