import { navItems } from '../../../constants/constants'
import { useTranslations } from '../../i18n/utils'
import { cn } from '../../../utils/twMerge'
import { Popover } from '@ark-ui/react/popover'
import { teachers } from '../../../constants/constants'

type NavProps = {
	lang: 'es' | 'en'
	currentPath: string
	isMain: boolean
	isHeader?: boolean
}

function normalizePath(p: string) {
	if (p.length > 1 && p.endsWith('/')) return p.slice(0, -1)
	return p
}

export default function Nav({ currentPath, lang, isMain, isHeader }: NavProps) {
	const t = useTranslations(lang)

	const normalized = normalizePath(currentPath)
	// const currentPathSplitted = currentPath.split('/')
	// const currentPage = currentPathSplitted[currentPathSplitted.length - 1]

	// console.log({ currentPage })

	return (
		<nav className='hidden xl:block'>
			<ul className='flex gap-5 items-center h-8'>
				{navItems.map((item, index) => {
					const href = normalizePath(`/${lang}/${item.url ?? ''}`)
					const isWelcome = normalized === `/${lang}`
					const isActive =
						normalized === href || (isWelcome && item.title === 'nav.welcome')
					return (
						<li
							key={index}
							className={cn(
								'text-white font-open-sans uppercase',
								isHeader ? 'pb-1' : '',
								isHeader && isActive ? 'border-b-2 border-white' : ''
							)}
						>
							{item.url ? (
								<a
									className='font-open-sans text-md 4xl:text-xl'
									href={`/${lang}/${item.url}`}
								>
									{t(item.title)}
								</a>
							) : (
								<Popover.Root>
									<Popover.Trigger>
										<span className='font-open-sans text-md 4xl:text-xl cursor-pointer'>
											{t(item.title).toUpperCase()}
										</span>
									</Popover.Trigger>
									<Popover.Positioner>
										<Popover.Content className='flex flex-col items-center gap-4 bg-white text-almost-black !py-5 !px-4 rounded-2xl shadow-xl'>
											{teachers.map((t, idx) => (
												<a
													className={cn(
														'pb-0 font-open-sans !text-xs !3xl:text-md border-b-2',
														// idx < 5 ? 'border-b-2' : null,
														isMain
															? 'border-custom-green'
															: 'border-custom-blue'
													)}
													href={`/${lang}${t?.url}`}
													key={idx}
												>
													{t?.title}
												</a>
											))}
										</Popover.Content>
									</Popover.Positioner>
								</Popover.Root>
							)}
						</li>
					)
				})}
			</ul>
		</nav>
	)
}
