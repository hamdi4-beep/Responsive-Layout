const title = document.querySelector('.title')
const container = title.parentElement
const str = title.textContent
let char = 0
title.textContent = ''

for (const letter of str) {
    const span = document.createElement('span')
    span.textContent = letter
    title.append(span)
}

const spans = document.querySelectorAll('span')

const setup = () => {
    const timer = setInterval(
        () => {
            if (char < spans.length) {
                spans[char == 5 ? char += 1 : char++].classList.add('fade-in')
            } else {
                clearInterval(timer)
            }
        }
    , 100)
}

window.onload = setup