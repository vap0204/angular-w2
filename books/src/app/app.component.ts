import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  mainTitle = 'Rating Book';
  currentIndex: number = 0;
  endOfReview = false;

  books = [
    {
      title: 'To Kill a Mockingbird',
      description: 'A novel set in the American South during the Great Depression, exploring themes of racism and morality through the trial of a black man accused of raping a white woman.',
      author: 'Harper Lee',
      numberOfRatings: 0,
      rating: 0,
    },
    {
      title: 'Pride and Prejudice',
      description: 'A romantic novel set in early 19th-century England, revolving around the lives of the Bennet family and their interactions with the wealthy Mr. Darcy.',
      author: 'Jane Austen',
      numberOfRatings: 0,
      rating: 0,
    },
    {
      title: 'The Great Gatsby',
      description: 'A novel set in the Roaring Twenties, exploring themes of decadence, idealism, and the American Dream through the life of the mysterious Jay Gatsby and his love for the enigmatic Daisy Buchanan.',
      author: 'F. Scott Fitzgerald',
      numberOfRatings: 0,
      rating: 0,
    },

    {
      title: 'To the Lighthouse',
      description: 'A modernist novel that follows the Ramsay family and their guests as they spend a summer on the Isle of Skye, exploring themes of perception, subjectivity, and the passage of time.',
      author: 'Virginia Woolf',
      numberOfRatings: 0,
      rating: 0,
    },

    {
      title: 'The Catcher in the Rye',
      description: 'A coming-of-age novel that follows the rebellious teenager Holden Caulfield as he navigates the complexities of adolescence and adulthood in New York City.',
      author: 'J.D. Salinger',
      numberOfRatings: 0,
      rating: 0,
    }
  ];

  get selectedBook() {
    return this.books[this.currentIndex];
  }

  rateBook(rating: number) {
    this.selectedBook.rating += rating;
    this.selectedBook.numberOfRatings++;
    if (this.currentIndex < this.books.length - 1) {
      this.currentIndex++;
    } else {
      this.endOfReview = true;
    }
  }

  calculateAverageRating() {
    const numberOfRatings = this.selectedBook.numberOfRatings === 0 ? 1 : this.selectedBook.numberOfRatings;
    return (this.selectedBook.rating / numberOfRatings).toFixed(2);
  }

  restart() {
    this.currentIndex = 0;
    this.endOfReview = false;
  }
}
