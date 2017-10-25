import { Component } from '../../Component'

export class SGCard extends Component {
  constructor (id) {
    super('sg-card', id)
    this.$toggleCodeLink = this.getElement('toggle-code')
    this.$toggleCodeLink.on('click', () => {
      this.toggleMod('code-is-expanded')
    })
  }
}
