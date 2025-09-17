const menu = document.querySelector('#header-menu')
const btn = document.querySelector('#hamburger')
const header = document.querySelector('header')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  menu.classList.toggle('open')
  if(menu.classList.contains("open")){
    menu.style.height = menu.scrollHeight + 'px'
    header.style.height = '220px'
    header.style.backgroundColor = '#ccc'
  }else{
    menu.style.height = "0"
    header.style.height = '50px'
    header.style.backgroundColor = '#FBEEC9'
  }
})
