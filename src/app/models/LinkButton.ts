export default class LinkButton {

  text: string = 'Link'
  color: string = 'primary'
  iconName?: string


  constructor(text: string, color: string, iconName?: string) {
    this.text = text
    this.color = color
    this.iconName = iconName
  }

}
