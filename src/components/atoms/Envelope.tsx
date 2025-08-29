import { PiEnvelopeThin } from 'react-icons/pi'

export default function Envelope() {
	return (
		<div className='flex items-center justify-end h-full w-full max-w-screen-2xl mx-auto px-10'>
			<a href='mailto:test@test.com' className='text-white font-open-sans'>
				<div className='flex gap-2'>
					<PiEnvelopeThin className='text-2xl text-white' />
					test@test.es
				</div>
			</a>
		</div>
	)
}
