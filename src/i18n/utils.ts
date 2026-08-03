import { ui, defaultLang } from "./ui";

export type Lang = keyof typeof ui;
export type TranslationKey = keyof (typeof ui)[typeof defaultLang];
export type Translate = (key: TranslationKey) => string;

export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split("/");
	if (lang in ui) return lang as Lang;
	return defaultLang;
}

export function useTranslations(lang: Lang): Translate {
	const localizedUI: Record<string, string> = ui[lang];
	return function t(key: TranslationKey) {
		return key in localizedUI ? localizedUI[key] : ui[defaultLang][key];
	};
}
