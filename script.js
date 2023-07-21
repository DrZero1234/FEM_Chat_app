window.addEventListener('load', () => {
  if (document.querySelector('.phone-content') !== null) {
    window.sessionStorage.setItem('PhoneContent', 'displayed');
  }
})

if (window.sessionStorage.getItem('PhoneContent')) {
  document.querySelector('.phone-content').classList.remove('animated')
}