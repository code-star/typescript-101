const firstName: string = 'Henk'
const age: number = 33
const hasChildren: boolean = false
const parents: string[] = ['John', 'Mary']
const parentAges: number[] = [55, 48]
const variousValues: Array<string | number> = ['22', 21, 98, '33', '11']

const userInfo = {
	name: firstName,
	age: age,
	hasChildren: hasChildren
}

function isAdult(age: number): boolean {
	return age > 18
}

function makeString(input: number): string {
	return input.toString()
}
