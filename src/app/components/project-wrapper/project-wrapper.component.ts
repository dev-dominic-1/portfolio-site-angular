import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import LinkButton from "../../models/LinkButton";
import {LinkButtonComponent} from "../link-button/link-button.component";
import {ProjectLinkWrapperComponent} from "./project-link-wrapper/project-link-wrapper.component";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatRipple} from "@angular/material/core";
import {NgStyle} from "@angular/common";
import {ImageCarouselComponent} from "../image-carousel/image-carousel.component";

@Component({
  standalone: true,
  selector: 'project-wrapper',
  imports: [
    MatCard,
    MatCardContent,
    MatCardTitle,
    LinkButtonComponent,
    ProjectLinkWrapperComponent,
    MatTabGroup,
    MatTab,
    MatIconButton,
    MatIcon,
    MatRipple,
    NgStyle,
    ImageCarouselComponent
  ],
  templateUrl: 'project-wrapper.component.html',
  styleUrl: 'project-wrapper.component.scss',
})
export class ProjectWrapperComponent {

  @Input({required: true}) headerText!: string
  @Input() imageNames?: string[] | undefined
  @Input() frontendLinks?: LinkButton[][] | undefined
  @Input() backendLinks?: LinkButton[][] | undefined

  readonly primaryColor: string = window.getComputedStyle(document.body).getPropertyValue('--palette-primary')

}
