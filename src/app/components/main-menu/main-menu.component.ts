import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  items!: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home', routerLink: ['/']
      },
      {
        label: 'Categories',
        items: [
          {
            label: 'Dog food',
            items: [
              {
                label: 'Item-1'
              },
              {
                label: 'Item-2'
              },
            ]
          },
          {
            label: 'Cat food'
          },
          {
            label: 'Fish'
          },
          {
            label: 'Pet toy'
          },
          {
            label: 'Parrot',
            items: [
              {
                label: 'Item-11'
              },
              {
                label: 'Item-22'
              },
              {
                label: 'Item-33'
              },
              {
                label: 'Item-44'
              }
            ]
          },
          {
            label: 'Rabbit'
          },
          {
            label: 'Accessories'
          },
          {
            label: 'Small pet'
          }
        ]
      },
      {
        label: 'Blog', routerLink: ['/blog']
      },
      {
        label: 'About us', routerLink: ['/about']
      },
      {
        label: 'Contact', routerLink: ['/contact']
      }
  ];

  }

}
