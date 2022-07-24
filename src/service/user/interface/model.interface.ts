export enum SystemRole {
    Administrator = 'administrator',
    Agent = 'agent',
}

export interface IUser {
    getName(): string

    getUserName(): string

    getEmail(): string

    setName(name: string): void

    setEmail(email: string): void

    setUserName(user: string): void

    setRole(role: SystemRole): void

    getRole(): SystemRole

    setSuspend(flag: boolean): void

    isSuspended(): boolean

    setPassword(password: string): string

    setPhone(number: string): void

    getPhone(): string

    challengePassword(password: string): boolean

}
