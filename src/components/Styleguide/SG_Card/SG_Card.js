import { Component } from '../../Component'
import $ from 'jquery'

export class SG_Card extends Component {
  constructor (id) {
    super('sg-card', id)
    this.$toggleCodeLink = this.getElement('toggle-code')
    this.$toggleCodeLink.on('click', () => {
      this.addMod('code-is-expanded')
    })
  }
}
