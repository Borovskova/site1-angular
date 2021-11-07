import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgxTinySliderComponent, NgxTinySliderInstanceInterface, NgxTinySliderService, NgxTinySliderSettingsInterface } from 'ngx-tiny-slider';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';



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
  imageLoadingProcess: BehaviorSubject<number> = new BehaviorSubject(0);

  @ViewChildren('slideList') slideList: QueryList<any>;
  @ViewChild('ngxSlider', { static: false }) sliderLazy: NgxTinySliderInstanceInterface;
  private ngxSlider: ElementRef<NgxTinySliderComponent>;



  constructor(private ngxTinySliderService: NgxTinySliderService) { }


  ngOnInit() {
    this.tinySliderConfig = {
      waitForDom: true,
      items: 3,
      nav: false,
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
    this.trackImageLoading();
  }

  trackImageLoading() {
    this.imageLoadingProcess
      .pipe(
        filter((count: number) => count === this.cards.length)
      )
      .subscribe(next => {
        this.sliderLazy.domReady.next();
        console.log('image loaded', next);
      });
  }
  onImgLoadSuccess() {
    const incLoadedCount = this.imageLoadingProcess.getValue() + 1;
    this.imageLoadingProcess.next(incLoadedCount);
  }
}
