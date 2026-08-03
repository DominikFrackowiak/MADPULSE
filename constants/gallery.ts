import type { ImageMetadata } from 'astro'

type GalleryImage = {
	src: ImageMetadata
	alt: string
}

const createGalleryImages = (
	modules: Record<string, { default: ImageMetadata }>,
	alt: string
): GalleryImage[] =>
	Object.entries(modules)
		.sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
		.map(([, image]) => ({
			src: image.default,
			alt,
		}))

const gallery2024Images = createGalleryImages(
	import.meta.glob<{ default: ImageMetadata }>('../src/assets/gallery/2024/*.{jpg,jpeg,png,webp,avif}', {
		eager: true,
	}),
	'Photos from Mad Pulse 2024'
)

const gallery2025Images = createGalleryImages(
	import.meta.glob<{ default: ImageMetadata }>('../src/assets/gallery/2025/*.{jpg,jpeg,png,webp,avif}', {
		eager: true,
	}),
	'Photos from Mad Pulse 2025'
)

export const galleryYears = [
	{
		year: '2025',
		title: 'gallery.2025.title',
		images: gallery2025Images,
	}
] as const

export const thePlaceGallery = createGalleryImages(
	import.meta.glob<{ default: ImageMetadata }>('../src/assets/the-place/*.{jpg,jpeg,png,webp,avif}', {
		eager: true,
	}),
	'The Place'
)



