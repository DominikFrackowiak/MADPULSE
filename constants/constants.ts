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
		title: 'Marta Wrzesinska',
		url: '/teachers/marta-wrzesinska',
	},
	{
		title: 'Jesus Alonso',
		url: '/teachers/jesus-alonso',
	},
	{
		title: 'Carmen Alcalde',
		url: '/teachers/carmen-alcalde',
	},
] as const

export type NavItem = (typeof navItems)[number]
