// Exercise 7 - Utility Types
// Rewrite the types underneath, using Utility Types, to make them more flexible. You're free to assign new Types, as long as they're based on a central one!
// The functions may contain errors, try to fix those whilst keeping the types in line.

// Consider this mocked array as data that we would receive from a server.
const USERS = [
    { id: 'abc-123', name: 'Test User', type: 'User', address: {
        street: 'Ringwade', housenumber: 1, city: 'Nieuwegein', postcode: '3439LM'
    }}, 
    { id: 'bcd-234', name: 'Test Admin', type: 'Admin', address: {
        street: 'Ringwade', housenumber: 1, city: 'Nieuwegein', postcode: '3439LM'
    }}
] satisfies User[]
export interface User {
    id: string
    name: string
    type: 'Admin' | 'Moderator' | 'User'
    password?: string
    address: {
        street: string
        housenumber: number
        additions?: string
        city: string
        postcode: string
    }
}

export function createNewUser(name: string, type: string = 'User') {
    return {
        name,
        type
    }
}

export function getUsers(): User[] {
    return USERS
}

export function updateUsers(user: User, changes: Partial<User>): User {
    return Object.assign(user, changes)
}

updateUsers(USERS[0], { type: 'Moderator' })
