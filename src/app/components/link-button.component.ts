import {Component, Input, OnInit} from "@angular/core";
import {MatButton} from "@angular/material/button";
import {NgStyle} from "@angular/common";

@Component({
  standalone: true,
  selector: 'link-button',
  imports: [
    MatButton,
    NgStyle
  ],
  templateUrl: './link-button.component.html',
  styleUrl: './link-button.component.scss'
})
export class LinkButtonComponent {

  @Input({required: true}) text!: string
  @Input({required: true}) color!: string
  @Input() textColor: string = 'white'
  @Input() iconName?: string

  readonly _iconSourceBase: string = 'assets/'

}
