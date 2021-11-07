import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner4',
  templateUrl: './banner4.component.html',
  styleUrls: ['./banner4.component.css']
})
export class Banner4Component implements OnInit {

  cards: any = [
    {
      name: 'Starter',
      title: 'Free.png',
      description: ['1 Website', ' 5 GB Hosting', 'Limited Support'],
      buttonText: 'Get started',
      card_class: 'bg-light'
    },

    {
      name: 'Premium',
      title: 'month.png',
      description: ['10 Website', ' 15 GB Hosting', 'Premium Support'],
      buttonText: 'Get started',
      card_class: 'activeCard'
    },

    {
      name: 'Enterprise',
      title: 'month0.png',
      description: ['Unlimited Website', ' 50 GB Hosting', 'Premium Support'],
      buttonText: 'Get started',
      card_class: 'bg-light'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
