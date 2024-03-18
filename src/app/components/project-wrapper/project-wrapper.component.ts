import {Component, Input} from "@angular/core";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import LinkButton from "../../models/LinkButton";
import {LinkButtonComponent} from "../link-button/link-button.component";
import {ProjectLinkWrapperComponent} from "./project-link-wrapper/project-link-wrapper.component";

@Component({
  standalone: true,
  selector: 'project-wrapper',
  imports: [
    MatCard,
    MatCardContent,
    MatCardTitle,
    LinkButtonComponent,
    ProjectLinkWrapperComponent
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
