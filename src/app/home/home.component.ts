import {AfterViewChecked, AfterViewInit, Component, OnInit} from "@angular/core";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {LinkButtonComponent} from "../components/link-button/link-button.component";
import LinkButton from "../models/LinkButton";
import {ProjectWrapperComponent} from "../components/project-wrapper/project-wrapper.component";
import {PROJECTS} from "../../data/ProjectStore";
import {COMMON_COLORS} from "../../data/CommonColors";
import {NgClass} from "@angular/common";
import {ProfileContentComponent} from "./profile-content/profile-content.component";

@Component({
  standalone: true,
  selector: 'home',
  templateUrl: './home.component.html',
  imports: [
    MatCard,
    MatCardContent,
    MatButton,
    LinkButtonComponent,
    ProjectWrapperComponent,
    MatCardTitle,
    NgClass,
    ProfileContentComponent
  ],
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  primaryColor: string = window.getComputedStyle(document.body).getPropertyValue('--palette-primary')

  buttons: LinkButton[] = [
    new LinkButton('LinkedIn', '#0077b5', 'www.linkedin.com/in/dominic-hiland-19211a192', 'linkedin-custom.png'),
    new LinkButton('GitHub', COMMON_COLORS['GITHUB'], 'www.github.com/dev-dominic-1', 'github-custom.png'),
    new LinkButton('Resume', this.primaryColor, 'www.dropbox.com/scl/fi/0im7df2z1c59wmeghfnjb/Resume-02-16-2024.pdf?rlkey=6s1etfrz11neihwrj0vorpt8w&dl=0', 'file-document-custom.png'),
  ]

  protected readonly PROJECTS = PROJECTS;
  protected readonly COMMON_COLORS = COMMON_COLORS;
}
