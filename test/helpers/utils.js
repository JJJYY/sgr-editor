function $ (selector) {
  return document.querySelector(selector)
}

function createElement (tag, className) {
  const elm = document.createElement(tag)
  elm.className = className

  document.body.appendChild(elm)

  return elm
}
