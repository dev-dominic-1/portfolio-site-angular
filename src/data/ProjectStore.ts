import LinkButton from "../app/models/LinkButton";
import {COMMON_COLORS} from "./CommonColors";
import Status, {CurrentProgress} from "../app/models/Status";

export const PROJECTS: {
  title: string,
  frontendLinks?: LinkButton[][],
  backendLinks?: LinkButton[][],
}[] = [
  {
    title: 'Study Together',
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
            CurrentProgress.WORK_IN_PROGRESS,
            CurrentProgress.NOT_STARTED,
            CurrentProgress.NOT_STARTED
          )
        ),
        new LinkButton('Repository', COMMON_COLORS['GITHUB'], 'github.com/dev-dominic-1/study-together-react', 'github-custom.png'),
      ]
    ],
    backendLinks: [
      [
        new LinkButton('.NET', COMMON_COLORS['.NET'], 'www.github.com/dev-dominic-1/study_together_api', 'dot-net-custom.png')
      ]
    ]
  }
]
