import Status from "./Status";

export default class LinkButton {

  text: string = 'Link'
  color: string = 'primary'
  link!: string
  iconName?: string
  disabled: boolean = false
  status?: Status


  constructor(text: string, color: string, link: string, iconName?: string, disabled?: boolean, status?: Status) {
    this.text = text
    this.color = color
    this.link = link
    this.iconName = iconName
    this.disabled = !!disabled
    this.status = status
  }

}
