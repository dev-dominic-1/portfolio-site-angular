import LinkButton from "../app/models/LinkButton";
import {COMMON_COLORS} from "./CommonColors";
import Status, {CurrentProgress} from "../app/models/Status";

export const PROJECTS: {
  title: string,
  imageNames: string[],
  imageDirectory: string,
  disableSeeMore?: boolean,
  frontendLinks?: LinkButton[][],
  backendLinks?: LinkButton[][],
}[] = [
  {
    title: 'Study Together',
    imageDirectory: 'study-together',
    imageNames: [
      'study-together/study-together-img-1.png',
      'study-together/study-together-img-1-tablet.png',
      'study-together/study-together-img-1-mobile.png',
      'study-together/study-together-img-2.png',
    ],
    frontendLinks: [
      [
        new LinkButton(
          'Angular',
          COMMON_COLORS['ANGULAR'],
          'study-together-angular.netlify.app',
          'angular-custom.png',
          false,
          new Status(
            'Study Together (Angular)',
            true,
            CurrentProgress.COMPLETED,
            CurrentProgress.COMPLETED,
            CurrentProgress.COMPLETED
          )
        ),
        new LinkButton('Repository', COMMON_COLORS['GITHUB'], 'www.github.com/dev-dominic-1/study-together-angular', 'github-custom.png'),
      ],
      [
        new LinkButton(
          'React',
          COMMON_COLORS['REACT'],
          'study-together-react.netlify.app',
          'react-custom.png',
          false,
          new Status(
            'Study Together (React)',
            true,
            CurrentProgress.COMPLETED,
            CurrentProgress.WORK_IN_PROGRESS,
            CurrentProgress.WORK_IN_PROGRESS
          )
        ),
        new LinkButton('Repository', COMMON_COLORS['GITHUB'], 'github.com/dev-dominic-1/study-together-react', 'github-custom.png'),
      ],
      [
        new LinkButton(
          'Vue',
          COMMON_COLORS['VUE'],
          'study-together-vue.netlify.app',
          'vuejs-custom.png',
          false,
          new Status(
            'Study Together (Vue)',
            true,
            CurrentProgress.REVISIONS,
            CurrentProgress.NOT_STARTED,
            CurrentProgress.NOT_STARTED
          )
        ),
        new LinkButton('Repository', COMMON_COLORS['GITHUB'], 'www.github.com/dev-dominic-1/study-together-vue', 'github-custom.png'),
      ],
    ],
    backendLinks: [
      [
        new LinkButton('.NET', COMMON_COLORS['.NET'], 'www.github.com/dev-dominic-1/study_together_api', 'dot-net-custom.png')
      ]
    ]
  },
  {
    title: 'The Expert App',
    imageDirectory: 'the-expert-app',
    imageNames: [
      'the-expert-app/The_Expert_App_1.jpg',
      'the-expert-app/The_Expert_App_2.jpg',
      'the-expert-app/The_Expert_App_3.jpg',
    ],
    disableSeeMore: true,
    frontendLinks: [
      [
        new LinkButton(
          'Web Viewer',
          COMMON_COLORS['REACT'],
          'the-expert-app.netlify.app/',
          'react-custom.png',
          false,
          new Status(
            'The Expert App',
            true,
            CurrentProgress.NOT_STARTED,
            CurrentProgress.WORK_IN_PROGRESS,
            CurrentProgress.WORK_IN_PROGRESS
          )
        ),
        new LinkButton('Repository', COMMON_COLORS['GITHUB'], 'github.com/dev-dominic-1/expert-app-react-native', 'github-custom.png')
      ]
    ],
    backendLinks: [
      [
        new LinkButton(
          '.NET',
          COMMON_COLORS['.NET'],
          'www.google.com',
          'dot-net-custom.png',
          true,
          new Status(
            'The Expert App (Web API)',
            false,
            CurrentProgress.NOT_STARTED,
            CurrentProgress.NOT_STARTED,
            CurrentProgress.NOT_STARTED,
          )
        )
      ]
    ]
  }
]
