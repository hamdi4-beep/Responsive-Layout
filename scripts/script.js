const title = document.querySelector('.title') // the username element
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const checkbox = document.querySelector('input') // the checkbox element
const str = title.textContent // the username's string
let char = 0
title.textContent = ''

// a toggle switch functionality for the checkbox

checkbox.addEventListener('change', e => {
    const elem = e.target // the check box
    if (elem.checked) {
        left.classList.add('dark-mode')
    } else {
        left.classList.remove('dark-mode')
    }
})

for (const letter of str) {
    const span = document.createElement('span')
    span.textContent = letter
    title.append(span)
}

const spans = document.querySelectorAll('span')

const timer = setInterval(
    () => {
        if (char < spans.length) {
            spans[char == 5 ? char += 1 : char++].classList.add('fade-in')
        } else {
            clearInterval(timer)
        }
    }
, 100)