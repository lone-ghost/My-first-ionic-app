export interface NewUserCredential {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
}

export interface UserCredential{
    email: string;
    password: string;
}

export interface UserResetCredential {
    email: string;
}

export interface UserProfile {
    email: string;
    password: string;
    fullName: string;
}