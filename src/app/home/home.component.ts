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
    new LinkButton('LinkedIn', '#0077b5', 'linkedin-custom.png'),
    new LinkButton('GitHub', '#0d1117', 'github-custom.png'),
    new LinkButton('Resume', this.primaryColor, 'file-document-custom.png'),
  ]

  protected readonly Object = Object;
}
