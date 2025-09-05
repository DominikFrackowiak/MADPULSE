export const navItems = [
	{
		title: 'nav.welcome',
		url: '/',
	},
	{
		title: 'nav.program',
		url: 'program',
	},
	{
		title: 'nav.teachers',
		url: null,
	},
	{
		title: 'nav.space',
		url: 'space',
	},
	{
		title: 'nav.registration',
		url: 'registration',
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
		url: '/teachers/jesus-alonso-marta-wrzesinska',
	},
	{
		title: 'Jesús Alonso',
		url: '/teachers/jesus-alonso-marta-wrzesinska',
	},
	,
] as const

export type NavItem = (typeof navItems)[number]

export const mobileNavItems = [
	{
		title: 'nav.welcome',
		url: '/',
	},
	{
		title: 'nav.program',
		url: 'program',
	},
	// {
	// 	title: 'nav.teachers',
	// 	url: null,
	// },
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
		url: 'teachers/jesus-alonso-marta-wrzesinska',
	},
	{
		title: 'nav.jesus-alonso',
		url: 'teachers/jesus-alonso-marta-wrzesinska',
	},
	{
		title: 'nav.space',
		url: 'space',
	},
	{
		title: 'nav.registration',
		url: 'registration',
	},
] as const
