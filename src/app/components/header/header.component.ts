import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isActive: string = 'home';

  constructor() { }

  ngOnInit(): void {
  }

  scrollFn(el: HTMLElement, name: string) {
    el.scrollIntoView({ behavior: 'smooth' });
    this.isActive = name;
  }
}
