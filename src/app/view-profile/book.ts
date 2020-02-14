import { Observable } from 'rxjs';
import { Url } from "url";

export interface Book {
    // uid: string;
    useremail: string,
    username: string,
    mobilenumber: number,
    bookingdesc: string,
    bookingdate: Date,
    usercity: string,
    latitude: number;
    longitude: number;
    status: string;
    workerid: string;
    bookingid: string;
    workername: string;
}
