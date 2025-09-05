import { PiEnvelopeThin } from 'react-icons/pi'

export default function Envelope({ email }: { email: string; text: string }) {
	return (
		<a href={`mailto:${email}`} className='text-white font-open-sans'>
			<PiEnvelopeThin className='text-2xl text-white' />
		</a>
	)
}
