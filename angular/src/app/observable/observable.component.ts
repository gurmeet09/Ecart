import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BookService } from '../services/book.services';
import { Book } from '/home/user/Desktop/Angular2/http/src/model/book';
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  observableBooks: Observable<Book[]>
   books: Book[];
   errorMessage: String;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
   {
    this.observableBooks = this.bookService.getBooksWithObservable();
    this.observableBooks.subscribe(
        books => this.books = books,
     
        error =>  this.errorMessage = <any>error);

  }

}
}
