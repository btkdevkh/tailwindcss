const hamburgerBtn = document.getElementById('menu-hamburger-btn')
const mobileMenu = document.getElementById('mobile-menu')

hamburgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden')
})
