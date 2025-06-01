export interface AuthForm {
    name?: string,
    email: string,
    password: string
}

export interface User {
    id: number,
    name: string,
    email: string,
    password: string
}

export interface ReportForm {
    reportingUserId: number | null | undefined,
    street: string,
    number: string,
    neighborhood: string,
    referencePoint: string,
    description: string
}

export interface Report {
    id: number,
    reportingUserId: number | null | undefined,
    street: string,
    number: string,
    neighborhood: string,
    referencePoint: string,
    description: string
}