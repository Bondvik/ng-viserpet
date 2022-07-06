import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {
  // items!: MegaMenuItem[];
  items!: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Dog food',
        icon: 'demo-icon icon-dog',
        items:[
          {
             label:'New',
             icon:'pi pi-fw pi-plus',
             items:[
                {
                   label:'Bookmark',
                   icon:'pi pi-fw pi-bookmark'
                },
                {
                   label:'Video',
                   icon:'pi pi-fw pi-video'
                },

             ]
          },
          {
             label:'Delete',
             icon:'pi pi-fw pi-trash'
          },
          {
             separator:true
          },
          {
             label:'Export',
             icon:'pi pi-fw pi-external-link'
          }
       ]
      },
      {
        label: 'Cat food',
        icon: 'demo-icon icon-cat',
      },
      {
        label: 'Fish',
        icon: 'demo-icon icon-fish',
      },
      {
        label: 'Pet toy',
        icon: 'demo-icon icon-toys',
      },
      {
        label: 'Parrot',
        icon: 'demo-icon icon-parrot',
      },
      {
        label: 'Rabbit',
        icon: 'demo-icon icon-rabbit',
      },
      {
        label: 'Accessories',
        icon: 'demo-icon icon-accessories',
      },
      {
        label: 'Small pet',
        icon: 'demo-icon icon-small-pet',
      }
  ]
  }
}
