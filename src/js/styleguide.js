/**
 * <%= PROJECT_NAME =%>
 * Styleguide main entry point.
 */

import $ from 'jquery'
import Prism from 'prismjs'
import Clipboard from 'clipboard'
import { SG_Card } from '../components/Styleguide/SG_Card/SG_Card'

new SG_Card('headings') // eslint-disable-line
const clipboard = new Clipboard('.btn-copy')

clipboard.on('success', function (e) {
  const $btn = $(e.trigger)
  $btn.text('Copied!').prop('disabled', true)
  setTimeout(function () {
    $btn.text('Copy').prop('disabled', false)
  }, 2000)
})
