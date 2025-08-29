import { cn } from 'utils/twMerge'
// const { isMain, lang } = Astro.props
import { Popover } from '@ark-ui/react'
import { PiGlobe } from 'react-icons/pi'

const languages = [
	{
		language: 'ES',
		id: 'es',
	},
	{
		language: 'EN',
		id: 'en',
	},
]

const getPathForLang = (targetLang: string, currentPath: string) => {
	const segments = currentPath.split('/')
	segments[1] = targetLang
	return segments.join('/')
}

function LanguageNav({
	isMain,
	lang,
	currentPath,
}: {
	isMain: boolean
	lang: string
	currentPath: string
}) {
	return (
		<Popover.Root>
			<Popover.Trigger>
				<div className='cursor-pointer'>
					<PiGlobe className='text-white text-2xl ' />
				</div>
			</Popover.Trigger>
			<Popover.Positioner>
				<Popover.Content className='flex flex-col items-center gap-4 bg-white text-almost-black !py-5 !px-3 rounded-2xl shadow-xl'>
					{languages.map(l => (
						<a
							href={getPathForLang(l.id, currentPath)}
							key={l.id}
							className={cn(
								'cursor-pointer pb-0 font-open-sans !text-xs !3xl:text-md ',
								l.id === lang ? 'border-b-2 ' : '',
								isMain && l.id === lang
									? 'border-custom-green '
									: 'border-custom-blue '
							)}
						>
							{l.language}
						</a>
					))}
				</Popover.Content>
			</Popover.Positioner>
		</Popover.Root>
	)
}

export default LanguageNav
