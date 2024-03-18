import {Component, Input, OnInit} from "@angular/core";
import {MatButton} from "@angular/material/button";
import {NgClass, NgStyle} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  standalone: true,
  selector: 'link-button',
  imports: [
    MatButton,
    NgStyle,
    NgClass
  ],
  templateUrl: './link-button.component.html',
  styleUrl: './link-button.component.scss'
})
export class LinkButtonComponent {

  @Input({required: true}) color!: string
  @Input() textColor: string = 'white'
  @Input() iconName?: string
  @Input({required: true}) link!: string
  @Input() disabled: boolean = false

  readonly _iconSourceBase: string = 'assets/'

  goTo() {
    console.log('LINK', this.link)
    let a = document.createElement('a')
    a.href = `https://${this.link}`
    a.target = '_blank'
    a.click()
  }

}
