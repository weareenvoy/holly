import $ from 'jquery'

export class Component {
  constructor (ns) {
    this.ns = ns
    this.$self = $('.' + this.ns)
    this.options = this.getData('options')
  }

  getElement (elementName) {
    return this.$self.find(`.${this.ns}__${elementName}`)
  }

  addMod (modName) {
    this.$self.addClass(`${this.ns}--${modName}`)
  }

  removeMod (modName) {
    this.$self.removeClass(`${this.ns}--${modName}`)
  }

  getData (dataAttr) {
    return this.$self.data(dataAttr)
  }
}
