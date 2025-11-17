import { Carousel } from '@ark-ui/react/carousel'
import { useState } from 'react'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { IconContext } from 'react-icons/lib'

const images = [
	{ src: '/images/space/1.jpeg' },
	{ src: '/images/space/2.jpeg' },
	{ src: '/images/space/3.jpeg' },
	{ src: '/images/space/4.jpeg' },
	{ src: '/images/space/5.jpeg' },
]

function InsideCarousel() {
	return (
		<>
			<Carousel.ItemGroup>
				{images.map((image, index) => (
					<Carousel.Item key={index} index={index}>
						<img
							src={image.src}
							alt={`Slide ${index}`}
							className='h-full w-full object-cover px-2'
						/>
					</Carousel.Item>
				))}
			</Carousel.ItemGroup>
		</>
	)
}

export const CustomCarousel = () => {
	return (
		<div className='my-10'>
			<div className='hidden lg:block'>
				<Carousel.Root
					slideCount={images.length}
					autoplay
					loop
					slidesPerPage={3}
				>
					<InsideCarousel />
				</Carousel.Root>
			</div>
			<div className='block lg:hidden'>
				<Carousel.Root
					slideCount={images.length}
					autoplay
					loop
					slidesPerPage={1}
				>
					<InsideCarousel />
				</Carousel.Root>
			</div>
		</div>
	)
}
