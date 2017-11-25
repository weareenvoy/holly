/**
 * Component: Modal
 */

import { Component } from '../Component'
import $ from 'jquery'

export class Modal extends Component {
  constructor (id) {
    super('modal', id)
    this.$overlay = this.getElement('overlay')

    // Bind click event to trigger modal selector
    if (this.options) {
      const modalOpenSelector = this.options.triggerModalOpenSelector
      if (modalOpenSelector) {
        $(modalOpenSelector).on('click', () => {
          this.addMod('opened')
        })
      }
    }

    // Close the modal if overlay is clicked
    this.$overlay.on('click', () => {
      this.removeMod('opened')
    })
  }
}
