export default class LinkButton {

  text: string = 'Link'
  color: string = 'primary'
  link!: string
  iconName?: string
  disabled: boolean = false


  constructor(text: string, color: string, link: string, iconName?: string, disabled?: boolean) {
    this.text = text
    this.color = color
    this.link = link
    this.iconName = iconName
    this.disabled = !!disabled
  }

}
