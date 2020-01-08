export interface User {
    uid: string;
    username: string;
    idNumber: string;
    email: string;
    emailVerified: boolean;
    jobType: string;
    mobile: string;
    displayName?: string;
    status: string;
}
