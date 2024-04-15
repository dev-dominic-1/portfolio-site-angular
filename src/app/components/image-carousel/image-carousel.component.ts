import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {NgStyle} from "@angular/common";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  standalone: true,
  selector: 'image-carousel',
  imports: [
    MatTabGroup,
    MatTab,
    MatIcon,
    MatIconButton,
    NgStyle,
    MatTooltip
  ],
  templateUrl: 'image-carousel.component.html',
  styleUrl: 'image-carousel.component.scss',
})
export class ImageCarouselComponent implements OnInit, OnDestroy {

  @Input() fixedHeight?: string
  @Input({required: true}) imageNames!: string[]
  @Input({ required: true }) imageDirectory!: string
  imageSources!: string[]

  imageIconsMap: {[key: string]: {icon: string, tooltip: string}} = {
    'study-together/study-together-img-1.png': {
      icon: 'angular-custom.png',
      tooltip: 'The `Angular` app was used to make this screenshot'
    },
    'study-together/study-together-img-1-tablet.png': {
      icon: 'angular-custom.png',
      tooltip: 'The `Angular` app was used to make this screenshot'
    },
    'study-together/study-together-img-1-mobile.png': {
      icon: 'angular-custom.png',
      tooltip: 'The `Angular` app was used to make this screenshot'
    },
    'study-together/study-together-img-2.png': {
      icon: 'vuejs-custom.png',
      tooltip: 'The `Vue` app was used to make this screenshot'
    }
  }

  carouselInterval: any = undefined
  carouselIndex: number = 0

  ngOnInit(): void {
    this.imageSources = this.imageNames.reduce((acc: string[], r) => [...acc, `assets/${r}`], [])
    this.startInterval()
  }

  ngOnDestroy(): void {
    this.stopInterval()
  }

  startInterval() {
    this.carouselInterval = setInterval(() => {
      this.setCarouselIndex(this.carouselIndex + 1)
    }, 5000)
  }

  stopInterval() {
    clearInterval(this.carouselInterval)
  }

  setCarouselIndex(index: number, reset?: boolean) {
    if (index < 0) index = this.imageSources.length - 1 // Keep the carousel circular
    if (reset) this.stopInterval()
    this.carouselIndex = index % this.imageSources.length
    if (reset) this.startInterval()
  }

}
