import {Component} from "@angular/core";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {LinkButtonComponent} from "../components/link-button.component";
import LinkButton from "../models/LinkButton";

@Component({
  standalone: true,
  selector: 'home',
  templateUrl: './home.component.html',
  imports: [
    MatCard,
    MatCardContent,
    MatButton,
    LinkButtonComponent
  ],
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  primaryColor: string = window.getComputedStyle(document.body).getPropertyValue('--palette-primary')

  buttons: LinkButton[] = [
    new LinkButton('LinkedIn', '#0077b5', 'www.linkedin.com/in/dominic-hiland-19211a192', 'linkedin-custom.png'),
    new LinkButton('GitHub', '#0d1117', 'www.github.com/dev-dominic-1', 'github-custom.png'),
    new LinkButton('Resume', this.primaryColor, 'www.dropbox.com/scl/fi/0im7df2z1c59wmeghfnjb/Resume-02-16-2024.pdf?rlkey=6s1etfrz11neihwrj0vorpt8w&dl=0', 'file-document-custom.png'),
  ]

  protected readonly Object = Object;
}
