const title = document.querySelector('.title') // the username element
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const checkbox = document.querySelector('input') // the checkbox element
const properties = getComputedStyle(left)
const bg = properties.getPropertyValue('background-image')
const container = title.parentElement // the left container
const str = title.textContent // the username's string
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

checkbox.addEventListener('change', e => {
    const elem = e.target // the check box
    if (elem.checked) {
        left.style.background = '#000'
        left.style.boxShadow = 'none'
    } else {
        left.style.backgroundImage = bg
        left.style.boxShadow = properties.getPropertyValue('box-shadow')
    }
})

window.onload = setup