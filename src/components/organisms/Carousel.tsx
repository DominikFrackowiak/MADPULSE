import { Carousel } from '@ark-ui/react/carousel'
import { useState } from 'react'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { IconContext } from 'react-icons/lib'

const images = [
	{ src: '/images/space/1.jpg' },
	{ src: '/images/space/2.jpg' },
	{ src: '/images/space/3.png' },
	{ src: '/images/space/4.png' },
	{ src: '/images/space/5.png' },
]

export const CarouselControlled = () => {
	const [page, setPage] = useState(0)

	return (
		<Carousel.Root
			autoplay={true}
			slideCount={images.length}
			page={page}
			onPageChange={e => setPage(e.page)}
		>
			<div className='relative w-full max-w-screen-2xl mx-auto overflow-hidden  !px-12'>
				<Carousel.PrevTrigger
					aria-label='Previous image'
					className='absolute left-20 top-1/2 -translate-y-1/2 bg-almost-black/40 rounded-full'
				>
					<IconContext.Provider
						value={{ className: 'cursor-pointer text-white text-4xl' }}
					>
						<GoChevronLeft />
					</IconContext.Provider>
				</Carousel.PrevTrigger>
				<Carousel.ItemGroup className='w-full max-w-screen-2xl'>
					{images.map((image, index) => (
						<Carousel.Item key={index} index={index}>
							<img
								src={image.src}
								alt={`Slide ${index + 1}`}
								className='w-full h-full object-cover'
							/>
						</Carousel.Item>
					))}
				</Carousel.ItemGroup>

				<Carousel.NextTrigger
					aria-label='Next image'
					className='absolute right-20 top-1/2 -translate-y-1/2 bg-almost-black/40 rounded-full'
				>
					<IconContext.Provider
						value={{ className: 'cursor-pointer text-white text-4xl ' }}
					>
						<GoChevronRight />
					</IconContext.Provider>
				</Carousel.NextTrigger>
			</div>

			{/* DOTS INDICATOR*/}
			<Carousel.IndicatorGroup className='mt-10 flex justify-center gap-2'>
				{images.map((_, index) => (
					<Carousel.Indicator
						key={index}
						index={index}
						className='h-2 w-2 rounded-full bg-custom-blue/50 data-[current]:bg-custom-blue'
					/>
				))}
			</Carousel.IndicatorGroup>
		</Carousel.Root>
	)
}
