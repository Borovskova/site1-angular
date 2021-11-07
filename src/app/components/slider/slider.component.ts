import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgxTinySliderComponent, NgxTinySliderSettingsInterface } from 'ngx-tiny-slider';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  cards: any = [
    { title: 'Benchmarks', imgName: 'Icon001.png', description: 'See how you stack up against comparable companies in similar stages.' },
    { title: 'Pricing Audit', imgName: 'Icon002.png', description: 'Benchmark the health of your monetization and pricing strategy.' },
    { title: 'Retention Audit', imgName: 'Icon003.png', description: 'Audit where revenue leakage exists and where you can increase retention.' },
    { title: 'Benchmarks', imgName: 'Icon001.png', description: 'See how you stack up against comparable companies in similar stages.' },
    { title: 'Pricing Audit', imgName: 'Icon002.png', description: 'Benchmark the health of your monetization and pricing strategy.' },
    { title: 'Retention Audit', imgName: 'Icon003.png', description: 'Audit where revenue leakage exists and where you can increase retention.' },
  ];

  tinySliderConfig: NgxTinySliderSettingsInterface;

  // @ViewChildren('slideList') slideList: QueryList<any>;
  // @ViewChild('ngxSlider')
  // private ngxSlider: ElementRef<NgxTinySliderComponent>;



  constructor() { }

  // ngAfterViewInit() {
  //   this.ngxSlider.nativeElement.domReady.next()
  //   //this.slideList.changes.subscribe(() => this.ngxSlider.nativeElement.domReady.next());
  // }

  ngOnInit() {
    this.tinySliderConfig = {
      items: 3,
      nav: false,
      //waitForDom: true, 
      arrowKeys: true,
      autoWidth: false,
      gutter: 10,
      controlsContainer: '#controls',
      prevButton: '.prev-button',
      nextButton: '.next-button',
      responsive: {
        300: {
          items: 1
        },
        500: {
          items: 2
        },
        600: {
          items: 3
        },
        768: {
          items: 3
        },
        992: {
          items: 3
        }
      }
    };
  }

}
