export default class LinkButton {

  text: string = 'Link'
  color: string = 'primary'
  link!: string
  iconName?: string


  constructor(text: string, color: string, link: string, iconName?: string) {
    this.text = text
    this.color = color
    this.link = link
    this.iconName = iconName
  }

}
