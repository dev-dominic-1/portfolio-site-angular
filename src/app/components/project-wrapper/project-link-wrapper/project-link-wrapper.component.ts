import {Component, Input} from "@angular/core";
import LinkButton from "../../../models/LinkButton";
import {LinkButtonComponent} from "../../link-button/link-button.component";

@Component({
  standalone: true,
  selector: 'project-link-wrapper',
  templateUrl: 'project-link-wrapper.component.html',
  styleUrl: 'project-link-wrapper.component.scss',
  imports: [
    LinkButtonComponent
  ]
})
export class ProjectLinkWrapperComponent {

  @Input({required: true}) links!: LinkButton[][]

}
