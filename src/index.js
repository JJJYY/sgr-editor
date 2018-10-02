// @flow

import { exec } from './utils'

class SgrEditor {
  constructor (el: string) {
    const $el = document.querySelector(el)

    $el ? this._createElm($el) : console.log('err')
    this._modifyDefault()
  }

  _createElm (el: HTMLElement) {
    const body = document.createElement('div')
    body.contentEditable = 'true'

    body.setAttribute('data-sgr-editor', '')
    body.style.outline = 'none'
    el.appendChild(body)
  }

  _modifyDefault () {
    exec('defaultParagraphSeparator', 'p')
  }

  bold () {
    exec('bold')
  }

  backColor () {
    exec('backColor')
  }

  createLink (link: string) {
    // verify
    exec('createLink', link)
  }

  orderedList () {
    exec('insertOrderedList')
  }

  unorderedList () {
    exec('insertUnorderedList')
  }
}

export default SgrEditor
