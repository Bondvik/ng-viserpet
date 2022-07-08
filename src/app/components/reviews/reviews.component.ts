import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  reviews = [
    {
      text: 'A great about us block helps builds trubetween you customers. The more content you provide about you and your business',
      img: 'https://dummyimage.com/582x431/c9c9c9/ffffff.png&text=review-1'
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur porro laboriosam quo aspernatur esse facere ut? Pariatur, quod aspernatur. Rerum!',
      img: 'https://dummyimage.com/582x431/c9c9c9/ffffff.png&text=review-2'
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur porro laboriosam quo aspernatur esse facere ut? Pariatur, quod aspernatur. Rerum!',
      img: 'https://dummyimage.com/582x431/c9c9c9/ffffff.png&text=review-3'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
