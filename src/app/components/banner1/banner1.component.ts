import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner1',
  templateUrl: './banner1.component.html',
  styleUrls: ['./banner1.component.css']
})
export class Banner1Component implements OnInit {
  images:any = [
    {name: 'Group.png'},
    {name: 'Group(1).png'},
    {name: 'Group(2).png'},
    {name: 'Group(3).png'},
    {name: 'Group(4).png'},
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.images[0].name);
    
  }

}
