import {Component, Input, OnInit} from "@angular/core";
import LinkButton from "../../../models/LinkButton";
import {LinkButtonComponent} from "../../link-button/link-button.component";
import {NgClass} from "@angular/common";

@Component({
  standalone: true,
  selector: 'project-link-wrapper',
  templateUrl: 'project-link-wrapper.component.html',
  styleUrl: 'project-link-wrapper.component.scss',
  imports: [
    LinkButtonComponent,
    NgClass
  ]
})
export class ProjectLinkWrapperComponent {

  @Input({required: true}) links!: LinkButton[][]

  private imageSourceBase: string = 'assets/'

  getSourceImage(link: LinkButton) {
    return `${this.imageSourceBase}${link.iconName}`
  }

}
