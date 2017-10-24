/**
 * <%= PROJECT_NAME =%>
 * Styleguide main entry point.
 */

import $ from 'jquery'
import Prism from 'prismjs'
import Clipboard from 'clipboard'
import { SG_Card } from '../components/Styleguide/SG_Card/SG_Card'

new SG_Card('headings') // eslint-disable-line
new SG_Card('body-copy') // eslint-disable-line
new SG_Card('links') // eslint-disable-line
new SG_Card('inline-text-elements') // eslint-disable-line
new SG_Card('address') // eslint-disable-line
new SG_Card('blockquote') // eslint-disable-line
new SG_Card('unordered-list') // eslint-disable-line
new SG_Card('ordered-list') // eslint-disable-line
new SG_Card('default-divider') // eslint-disable-line
new SG_Card('default-button') // eslint-disable-line
new SG_Card('code-elements') // eslint-disable-line
new SG_Card('basic-table') // eslint-disable-line
new SG_Card('striped-table') // eslint-disable-line
new SG_Card('bordered-table') // eslint-disable-line
new SG_Card('hover-table') // eslint-disable-line
new SG_Card('condensed-table') // eslint-disable-line

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
