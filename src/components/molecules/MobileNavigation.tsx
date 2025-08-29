import { mobileNavItems } from '../../../constants/constants'
import { useTranslations } from '../../i18n/utils'
import { cn } from '../../../utils/twMerge'
import { Popover } from '@ark-ui/react/popover'

import { PiList } from 'react-icons/pi'

type NavProps = {
	lang: 'es' | 'en'
	currentPath: string
	isMain: boolean
	isHeader?: boolean
}

export default function MobileNav({
	currentPath,
	lang,
	isMain,
	isHeader,
}: NavProps) {
	const t = useTranslations(lang)
	const currentPathSplitted = currentPath.split('/')
	const currentPage = currentPathSplitted[currentPathSplitted.length - 1]

	return (
		<nav className='block xl:hidden'>
			<Popover.Root>
				<Popover.Trigger>
					<span className='font-open-sans text-md 4xl:text-xl cursor-pointer text-white text-2xl'>
						<PiList />
					</span>
				</Popover.Trigger>
				<Popover.Positioner>
					<Popover.Content className='flex flex-col !w-[150px] items-center gap-6 bg-white text-almost-black !py-5 !px-4 rounded-2xl shadow-xl'>
						{mobileNavItems.map((item, idx) => (
							<a
								className={cn(
									'pb-0 font-open-sans !text-xs !3xl:text-md border-b-2',
									// idx < 5 ? 'border-b-2' : null,
									isMain ? 'border-custom-green' : 'border-custom-blue'
								)}
								href={`/${lang}/${item?.url}`}
								key={idx}
							>
								{t(item.title)}
							</a>
						))}
					</Popover.Content>
				</Popover.Positioner>
			</Popover.Root>
		</nav>
	)
}
