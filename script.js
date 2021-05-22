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

const timer = setInterval(
    () => {
        if (char < spans.length) {
            spans[char == 5 ? char += 1 : char++].classList.add('fade-in')
        } else {
            clearInterval(timer)
        }
    }
, 200)

fetch('https://api.github.com/users/hamdi4-beep').then(res => {
    if (res.ok) {
        const body = res.json();
        body.then(data => {
            const imgWrapper = document.createElement('div')
            const img = document.createElement('img')
            imgWrapper.classList.add('avatar-wrapper')
            img.src = data.avatar_url
            imgWrapper.append(img)
            container.prepend(imgWrapper)
            container
        })
    } else {
        throw new Error('Could not fetch data from this server')
    }
})