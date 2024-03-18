import LinkButton from "../app/models/LinkButton";
import {COMMON_COLORS} from "./CommonColors";

export const PROJECTS: {
  title: string,
  frontendLinks?: LinkButton[][],
  backendLinks?: LinkButton[][],
}[] = [
  {
    title: 'Study Together',
    frontendLinks: [
      [
        new LinkButton('Angular', COMMON_COLORS['ANGULAR'], 'study-together-angular.netlify.app', 'angular-custom.png'),
        new LinkButton('Repository', COMMON_COLORS['GITHUB'], 'www.github.com/dev-dominic-1/study-together-angular', 'github-custom.png'),
      ],
      [
        new LinkButton('Vue', COMMON_COLORS['VUE'], 'study-together-vue.netlify.app', 'vuejs-custom.png'),
        new LinkButton('Repository', COMMON_COLORS['GITHUB'], 'www.github.com/dev-dominic-1/study-together-vue', 'github-custom.png'),
      ],
      [
        new LinkButton('React', COMMON_COLORS['REACT'], 'www.google.com', 'react-custom.png', true),
        new LinkButton('Repository', COMMON_COLORS['GITHUB'], 'www.google.com', 'github-custom.png', true),
      ]
    ],
    backendLinks: [
      [
        new LinkButton('.NET', COMMON_COLORS['.NET'], 'www.github.com/dev-dominic-1/study_together_api', 'dot-net-custom.png')
      ]
    ]
  }
]
