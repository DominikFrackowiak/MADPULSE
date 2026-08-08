import carmenImage from '../src/assets/teachers/carmen-cropped.webp'
import cataImage from '../src/assets/teachers/cata-cropped.webp'
import jesusImage from '../src/assets/teachers/jesus-cropped.webp'
import luciaImage from '../src/assets/teachers/lucia-cropped.webp'
import martaImage from '../src/assets/teachers/marta-cropped.webp'
import sergioImage from '../src/assets/teachers/sergio-cropped.webp'

export const navItems = [

	{
		title: 'nav.program',
		url: 'program',
	},
	{
		title: 'nav.teachers',
		url: null,
		dropdown: 'teachers',
	},
	{
		title: 'nav.space',
		url: 'space',
	},
	{
		title: 'nav.registration',
		url: 'registration',
	},
	{
		title: 'nav.gallery',
		url: null,
		dropdown: 'gallery',
	},
] as const

export const galleriesNavigation = [
	{
		title: '2025',
		url: '/gallery/2025'
	},
] as const

export const teachers = [
	{
		title: 'Carmen Alcalde',
		url: '/teachers/carmen-alcalde',
	},
	{
		title: 'Lucía Sánchez',
		url: '/teachers/lucia-sanchez',
	},
	{
		title: 'Sergio Palomares',
		url: '/teachers/sergio-palomares',
	},
	{
		title: 'Cata Mahecha',
		url: '/teachers/cata-mahecha',
	},
	{
		title: 'Marta Wrzesińska',
		url: '/teachers/marta-wrzesinska',
	},
	{
		title: 'Jesús Alonso',
		url: '/teachers/jesus-alonso',
	},
] as const

export type NavItem = (typeof navItems)[number]

export const mobileNavItems = [

	{
		title: 'nav.program',
		url: 'program',
	},

	{
		title: 'nav.carmen-alcalde',
		url: 'teachers/carmen-alcalde',
	},
	{
		title: 'nav.lucia-sanchez',
		url: 'teachers/lucia-sanchez',
	},
	{
		title: 'nav.sergio-palomares',
		url: 'teachers/sergio-palomares',
	},
	{
		title: 'nav.cata-mahecha',
		url: 'teachers/cata-mahecha',
	},
	{
		title: 'nav.marta-wrzesinska',
		url: 'teachers/marta-wrzesinska',
	},
	{
		title: 'nav.jesus-alonso',
		url: 'teachers/jesus-alonso',
	},
	{
		title: 'nav.space',
		url: 'space',
	},
	{
		title: 'nav.registration',
		url: 'registration',
	},
	{
		title: 'nav.gallery',
		url: 'gallery/2025',
	},
] as const

export const teacherPages = [
	{
		slug: 'carmen-alcalde',
		name: 'Carmen Alcalde',
		title: 'teachers.carmen-alcalde.title',
		quote: 'teachers.carmen-alcalde.quote',
		description1: 'teachers.carmen-alcalde.text1',
		description2: 'teachers.carmen-alcalde.text2',
		imageSrc: carmenImage,
		isImageToTheLeft: true,
		imagePosition: 'object-top',
		biographySectionWidth: 'lg:w-[56%]',
		workshopSectionWidth: 'lg:w-[40%]',
	},
	{
		slug: 'lucia-sanchez',
		name: 'Lucía Sánchez',
		title: 'teachers.lucia-sanchez.title',
		quote: 'teachers.lucia-sanchez.quote',
		description1: 'teachers.lucia-sanchez.text1',
		description2: 'teachers.lucia-sanchez.text2',
		imageSrc: luciaImage,
		isImageToTheLeft: false,
		imagePosition: 'object-top',
		biographySectionWidth: 'lg:w-[40%]',
		workshopSectionWidth: 'lg:w-[56%]',
	},
	{
		slug: 'sergio-palomares',
		name: 'Sergio Palomares',
		title: 'teachers.sergio-palomares-vicente.title',
		quote: 'teachers.sergio-palomares-cicente.quote',
		description1: 'teachers.sergio-palomares-vicente.text1',
		description2: 'teachers.sergio-palomares-vicente.text2',
		imageSrc: sergioImage,
		isImageToTheLeft: true,
		imagePosition: 'object-top',
		biographySectionWidth: 'lg:w-[40%]',
		workshopSectionWidth: 'lg:w-[56%]',
	},
	{
		slug: 'marta-wrzesinska',
		name: 'Marta Wrzesińska',
		title: 'teachers.marta-wrzesinska.title',
		quote: 'teachers.marta-wrzesinska.quote',
		description1: 'teachers.marta-wrzesinska.text1',
		description2: 'teachers.marta-wrzesinska.text2',
		imageSrc: martaImage,
		isImageToTheLeft: false,
		imagePosition: 'object-[10%_center] lg:object-center',
		biographySectionWidth: 'lg:w-[43%]',
		workshopSectionWidth: 'lg:w-[53%]',
	},
	{
		slug: 'cata-mahecha',
		name: 'Cata Mahecha',
		title: 'teachers.catalina-mahecha.title',
		quote: 'teachers.catalina-mahecha.quote',
		description1: 'teachers.catalina-mahecha.text1',
		description2: 'teachers.catalina-mahecha.text2',
		imageSrc: cataImage,
		isImageToTheLeft: false,
		imagePosition: 'object-top',
		biographySectionWidth: 'lg:w-[43%]',
		workshopSectionWidth: 'lg:w-[53%]',
	}, {
		slug: 'jesus-alonso',
		name: 'Jesús Alonso',
		title: 'teachers.jesus-alonso.title',
		quote: 'teachers.jesus-alonso.quote',
		description1: 'teachers.jesus-alonso.text1',
		description2: 'teachers.jesus-alonso.text2',
		imageSrc: jesusImage,
		isImageToTheLeft: false,
		imagePosition: 'object-[center_center] lg:object-center',
		biographySectionWidth: 'lg:w-[43%]',
		workshopSectionWidth: 'lg:w-[53%]',
	},
] as const

export const days = [
	'calendar.days.saturday',
	'calendar.days.sunday',
	'calendar.days.monday',
] as const

export const workshops = [
	{
		day: 'calendar.days.saturday',
		hours: 'calendar.hours.workshopMorning',
		title: 'calendar.workshops.ciToolbox',
		teacher: 'calendar.teachers.martaWrzesinska',
		url: 'teachers/marta-wrzesinska'
	},
	{
		day: 'calendar.days.sunday',
		hours: 'calendar.hours.workshopMorning',
		title: 'calendar.workshops.fallAfterEinstein',
		teacher: 'calendar.teachers.sergioPalomares',
		url: 'teachers/sergio-palomares'
	},
	{
		day: 'calendar.days.monday',
		hours: 'calendar.hours.workshopMorning',
		title: 'calendar.workshops.playingSeriously',
		teacher: 'calendar.teachers.carmenAlcalde',
		url: 'teachers/carmen-alcalde'
	},
	{
		day: 'calendar.days.saturday',
		hours: 'calendar.hours.workshopAfternoon',
		title: 'calendar.workshops.gazeSpaceAndMovement',
		teacher: 'calendar.teachers.luciaSanchez',
		url: 'teachers/lucia-sanchez'
	},
	{
		day: 'calendar.days.sunday',
		hours: 'calendar.hours.workshopAfternoon',
		title: 'calendar.workshops.timingSynchronicity',
		teacher: 'calendar.teachers.catalinaMahecha',
		url: 'teachers/cata-mahecha'
	},
	{
		day: 'calendar.days.monday',
		hours: 'calendar.hours.workshopAfternoon',
		title: 'calendar.workshops.permeableTissues',
		teacher: 'calendar.teachers.jesusAlonso',
		url: 'teachers/jesus-alonso'
	},
	{
		day: 'calendar.days.saturday',
		hours: 'calendar.hours.evening',
		title: 'calendar.workshops.jam',
		teacher: null,
		url: null
	},
	{
		day: 'calendar.days.sunday',
		hours: 'calendar.hours.evening',
		title: 'calendar.workshops.roundRobin',
		teacher: null,
		url: null
	},
	{
		day: 'calendar.days.monday',
		hours: 'calendar.hours.evening',
		title: 'calendar.workshops.jam',
		teacher: null,
		url: null
	},
] as const
