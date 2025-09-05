import { PiSubway } from 'react-icons/pi'
import { PiNavigationArrow } from 'react-icons/pi'

export default function Address({
	street,
	closeTo,
	metro,
}: {
	street: string
	closeTo: string
	metro: string
}) {
	return (
		<div className='flex flex-col gap-2 items-center lg:items-end w-full'>
			<p className='flex gap-3 items-start text-almost-black font-open-sans justify-end'>
				<span className='text-custom-darker-green text-xl'>
					<PiNavigationArrow />
				</span>
				<div className='flex flex-col items-center lg:items-end'>
					<span className=' text-end'>{street}</span>
					<span className=''>{closeTo}</span>
				</div>
			</p>

			<p className='flex gap-3 items-center text-almost-black font-open-sans justify-end'>
				<span className='text-custom-darker-green text-xl'>
					<PiSubway />
				</span>
				<span>{metro}</span>
			</p>
		</div>
	)
}
