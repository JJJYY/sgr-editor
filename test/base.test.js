describe('create editor', function () {
  const children = []
  afterEach(function () {
    children.forEach(elm => elm.parentNode && elm.parentNode.removeChild(elm))
  })

  it('element should be create', function () {
    var oldElm = createElement('div', 'editor')
    const editor = new SgrEditor('.editor')

    var editorElm = $('[data-sgr-editor]')
    children.push(editorElm)

    expect(editorElm).toBeDefined()
    expect(editorElm.contentEditable).toBe('true')
    expect(editorElm.parentNode).toBe(oldElm)
  })
})
