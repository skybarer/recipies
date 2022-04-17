import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './../../Models/user';
import { Recipe } from 'src/app/Models/recipies';

@Injectable({
    providedIn: 'root'
})
export class AdminRecipeCrudService {

    constructor(private http: HttpClient) {

    }

    ADMIN_LOGIN_URL = 'http://localhost:8080/api/product/';

    // get all client details
    addRecipeList(recipie: Recipe): Observable<any> {
        return this.http.post<Recipe>(this.ADMIN_LOGIN_URL + 'add', recipie);
    }

    getRecipeList(): Observable<any> {
        return this.http.get<any>(this.ADMIN_LOGIN_URL + 'list');
    }



}