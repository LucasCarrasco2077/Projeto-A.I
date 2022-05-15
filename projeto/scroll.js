const scroll = document.querySelector('.scrollButton')

scroll.addEventListener('click', () => {
  scroll.window,
    scrollTo({
      top: 0,
      behavior: 'smooth'
    })
})

function scrollButton() {
  if (window.scrollY === 0) {
    scroll.style.display = 'none'
  } else {
    scroll.style.display = 'block'
  }
}

window.addEventListener('scroll', scrollButton)
