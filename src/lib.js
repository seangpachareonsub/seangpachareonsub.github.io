function main() {
  const cursor = document.querySelector('.cursor')

  document.addEventListener('mousemove', e => {
    // 18 Y AND 17X
    cursor.setAttribute('style', 'top: ' + (e.pageY - 300) + 'px; left: ' + (e.pageX - 600) + 'px')
  })
}

export default main


