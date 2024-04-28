import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroments } from '../../../enviroments/enviroments.prod';
import { Doc } from '../interfaces/doc.interface';

@Injectable({providedIn: 'root'})
export class DocsService {

    private baseUrl: string = enviroments.baseUrl;

    constructor(
        private http: HttpClient
    ) { }

    getDocs(): Observable<Doc[]> {
       return this.http.get<Doc[]>(`${this.baseUrl}/docs`);
    }
}