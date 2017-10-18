import $ from 'jquery'

export class Component {
  constructor (ns, id) {
    this.ns = ns
    if (!id) {
      console.error(`ID is required for '${ns}' component.`)
      return false
    }
    this.id = id
    this.$self = $(`#${this.id}.${this.ns}`)
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
