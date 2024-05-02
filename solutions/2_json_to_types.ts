export type LocationId = string
export type LocationIcons = 'work' // We can make this more strict, as we can imagine that there's only a few available options for this. Else it would be a string.
export interface Location {
	latitude: number
	longitude: number
}
export interface Creation {
	user: string
	createdAt: number
	lastEdited: number
}
export interface LocationData {
	id: LocationId
	location: Location
	icon: LocationIcons
	name: string
	creation: Creation
}

const data = {
	id: 'gfjdvlk934590afdjl41_539s0',
	location: {
		latitude: 52.056881,
		longitude: 5.111532
	},
	icon: 'work',
	name: 'My work',
	creation: {
		user: 'user.name',
		createdAt: 1568023200,
		lastEdited: 1568629455
	}
} satisfies LocationData
