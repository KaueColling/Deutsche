import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enJson from './traducoes/en.json'
import ptBRJson from './traducoes/ptBR.json'
import deJson from './traducoes/de.json'

// Inicialização da biblioteca de internacionalização i18n
i18n.use(initReactI18next).init({
    // Idioma de fallback, usado quando a tradução em um idioma específico não está disponível
    fallbackLng: "ptBR",
    interpolation: {
        escapeValue: false,
    },

    // Recursos de tradução para diferentes idiomas
    resources: {
        // Traduções em inglês
        en: enJson,
        // Traduções em português brasileiro
        ptBR: ptBRJson,
        // Traduções em alemão
        de: deJson
    }
})

// Exporta a instância do i18n configurada para ser usada em outros lugares do aplicativo
export default i18n;
