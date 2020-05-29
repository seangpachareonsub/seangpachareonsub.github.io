function main() {
  const cursor = document.querySelector('.cursor')

  document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top: ' + (e.pageY - 18) + 'px; left: ' + (e.pageX - 18) + 'px')
  })
}

export default main