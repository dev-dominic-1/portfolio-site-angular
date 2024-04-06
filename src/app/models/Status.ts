export default class Status {

  name!: string
  live!: boolean
  desktop: CurrentProgress
  tablet: CurrentProgress
  mobile: CurrentProgress

  constructor(name: string, live: boolean, desktop?: CurrentProgress, tablet?: CurrentProgress, mobile?: CurrentProgress) {
    this.name = name
    this.live = live
    this.desktop = desktop ?? CurrentProgress.NOT_STARTED
    this.tablet = tablet ?? CurrentProgress.NOT_STARTED
    this.mobile = mobile ?? CurrentProgress.NOT_STARTED
  }

}

export enum CurrentProgress {
  REVISIONS = 'R',
  NOT_STARTED = 'NS',
  WORK_IN_PROGRESS = 'WIP',
  COMPLETED = 'C'
}
