import {Component} from "@angular/core";
import {LinkButtonComponent} from "../../components/link-button/link-button.component";
import {MatCard, MatCardContent} from "@angular/material/card";
import LinkButton from "../../models/LinkButton";
import {COMMON_COLORS} from "../../../data/CommonColors";

@Component({
  standalone: true,
  selector: 'profile-content',
  templateUrl: 'profile-content.component.html',
  styleUrl: 'profile-content.component.scss',
  imports: [
    LinkButtonComponent,
    MatCard,
    MatCardContent
  ]
})
export class ProfileContentComponent {

  // @ts-ignore
  primaryColor: string = window.getComputedStyle(document.body).getPropertyValue('--palette-primary')

  buttons: LinkButton[] = [
    new LinkButton('LinkedIn', '#0077b5', 'www.linkedin.com/in/dominic-hiland-19211a192', 'linkedin-custom.png'),
    new LinkButton('GitHub', COMMON_COLORS['GITHUB'], 'www.github.com/dev-dominic-1', 'github-custom.png'),
    new LinkButton('Resume', this.primaryColor, 'www.dropbox.com/scl/fi/tlue2oma42n8dpzfvn1gu/Hiland-Dominic-Resume.docx?rlkey=vmsixt5367d9q0h3brjdtvk7x&dl=0', 'file-document-custom.png'),
  ]

}
