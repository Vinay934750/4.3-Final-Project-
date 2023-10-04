import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from './book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
})
export class UpdateBookComponent {
  book: Book = { title: '', author: '', genre: '', year: null };

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {
    // Retrieve book details using route parameters.
  }

  updateBook() {
    // Implement logic to update book details.
  }
}
