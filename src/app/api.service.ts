import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface IMockContact {
    _id: string; // Mongo ID
    index: number;
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    phone: string; // Example +1 (906) 585-2525
    address: string
}

@Injectable()
export class APIService {
    constructor(private http: HttpClient) { }

    apiURL = 'https://demo5838836.mockable.io/';

    getContacts() {
        return this.http.get<IMockContact[]>(`${this.apiURL}/contact`);
    }
}
