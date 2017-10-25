/**
 * <%= PROJECT_NAME =%>
 * Styleguide main entry point.
 */

import $ from 'jquery'
import Prism from 'prismjs' // eslint-disable-line
import Clipboard from 'clipboard'
import { SGCard } from '../components/Styleguide/SGCard/SGCard'

new SGCard('headings') // eslint-disable-line
new SGCard('body-copy') // eslint-disable-line
new SGCard('links') // eslint-disable-line
new SGCard('inline-text-elements') // eslint-disable-line
new SGCard('address') // eslint-disable-line
new SGCard('blockquote') // eslint-disable-line
new SGCard('unordered-list') // eslint-disable-line
new SGCard('ordered-list') // eslint-disable-line
new SGCard('default-divider') // eslint-disable-line
new SGCard('default-button') // eslint-disable-line
new SGCard('code-elements') // eslint-disable-line
new SGCard('basic-table') // eslint-disable-line
new SGCard('striped-table') // eslint-disable-line
new SGCard('bordered-table') // eslint-disable-line
new SGCard('hover-table') // eslint-disable-line
new SGCard('condensed-table') // eslint-disable-line
new SGCard('text-input') // eslint-disable-line
new SGCard('password-input') // eslint-disable-line
new SGCard('number-input') // eslint-disable-line
new SGCard('textarea') // eslint-disable-line
new SGCard('label') // eslint-disable-line
new SGCard('checkbox') // eslint-disable-line
new SGCard('radios') // eslint-disable-line
new SGCard('select') // eslint-disable-line
new SGCard('select-multiple') // eslint-disable-line

/**
  Handle copy to clipboard for code.
 */
const clipboard = new Clipboard('.sg-btn-copy')
clipboard.on('success', function (e) {
  const $btn = $(e.trigger)
  $btn.text('Copied!').prop('disabled', true)
  setTimeout(function () {
    $btn.text('Copy').prop('disabled', false)
  }, 2000)
})
