import { navItems } from '../../../constants/constants'
import { useTranslations } from '../../i18n/utils'
import { cn } from '../../../utils/twMerge'

type NavProps = {
	lang: 'es' | 'en'
	currentPath: string
	isMain: boolean
}

export default function Nav({ currentPath, lang, isMain }: NavProps) {
	const t = useTranslations(lang)
	const currentPathSplitted = currentPath.split('/')
	const currentPage = currentPathSplitted[currentPathSplitted.length - 1]

	return (
		<nav
		// className={cn(
		// 	'bg-white z-40 rounded-2xl px-4 py-1',
		// 	isMain ? ' bg-white/90' : 'bg-white/30'
		// )}
		>
			<ul className='flex gap-5'>
				{navItems.map((item, index) => (
					<li
						key={index}
						className={cn(
							'text-almost-black font-open-sans uppercase',
							currentPage === item.url ||
								(currentPage === '' && item.title === 'nav.welcome')
								? 'font-bold'
								: 'font-light'
						)}
					>
						{item.url ? (
							<a href={`/${lang}/${item.url}`}>{t(item.title)}</a>
						) : (
							<span>{t(item.title)}</span>
						)}
					</li>
				))}
			</ul>
		</nav>
	)
}
