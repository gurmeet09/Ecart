import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


import { Book } from '/home/user/Desktop/Angular2/http/src/model/book';

@Injectable()
export class BookService {
    url = "http://localhost:4200/assets/data/books.json";
    constructor(private http:Http) { }
    getBooksWithObservable(): Observable<Book[]> {
        return this.http.get(this.url)
	        .map(this.extractData)
	        .catch(this.handleErrorObservable);
    }
    
    private extractData(res: Response) {
	let body = res.json();
        return body;
    }
    private handleErrorObservable (error: Response | any) {
	console.error(error.message || error);
	return Observable.throw(error.message || error);
    }
    
} 