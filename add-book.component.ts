import { Component } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
})
export class AddBookComponent {
  book: Book = { title: '', author: '', genre: '', year: null };

  constructor(private bookService: BookService) {}

  addBook() {
    // Implement logic to add a new book.
  }
}
