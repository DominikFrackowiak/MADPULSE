import { cn } from 'utils/twMerge'

import { Popover } from '@ark-ui/react/popover'
import { teachers } from '../../../constants/constants'

export default function SubNavigation({isMain, lang, title}: {isMain: boolean, lang: string, title: string}) {
  return (
		<Popover.Root>
			<Popover.Trigger>
				<span className='font-open-sans text-md 4xl:text-xl cursor-pointer'>
					{title}
				</span>
			</Popover.Trigger>
			<Popover.Positioner>
				<Popover.Content className='flex flex-col items-center gap-4 bg-white text-almost-black !py-5 !px-4 rounded-2xl shadow-xl'>
					{teachers.map((t, idx) => (
						<a
							className={cn(
								'pb-0 font-open-sans !text-xs !3xl:text-md border-b-2',
								// idx < 5 ? 'border-b-2' : null,
								isMain ? 'border-custom-green' : 'border-custom-blue'
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
	)
}
