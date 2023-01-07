const left = document.querySelector('.left')
const right = document.querySelector('.right')
const con = document.querySelector('.container')

left.addEventListener('mouseenter',() => con.classList.add('hover-left'))
left.addEventListener('mouseleave',() => con.classList.remove('hover-left'))

right.addEventListener('mouseenter',() => con.classList.add('hover-right'))
right.addEventListener('mouseleave',() => con.classList.remove('hover-right'))