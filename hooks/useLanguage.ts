import { useState } from "react";

export enum Language {
  portuguese = "portuguese",
  english = "english",
}

export function useLanguage() {
  const [language, setLanguage] = useState(Language.english);

  const handleSwitchLanguage = () => {
    setLanguage((prev) =>
      prev === Language.english ? Language.portuguese : Language.english
    );
  };

  return {
    handleSwitchLanguage,
    language,
  };
}
