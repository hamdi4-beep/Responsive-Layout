const header = document.querySelector('h1')
const str = header.textContent
let char = 0
header.textContent = ''

for (let x=0; x<str.length; x++) header.innerHTML += `<span>${str[x]}</span>`

const letters = document.querySelectorAll('span')

const timer = setInterval(function() {
    if (char < str.length) {
        letters[char++].classList.add('fade-effect')
    } else {
        header.textContent = 'Thanks for watching!'
        clearInterval(timer)
    }
}, 200)