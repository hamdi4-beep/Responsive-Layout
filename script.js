const range = document.querySelector('#range')
const img = document.querySelector('img')
const label = document.querySelector('label')

update(range)

range.addEventListener('input', e => {
    update(e.target)
})

function update(elem) {
    img.style.opacity = (label.textContent = `${elem.value}%`).replace(/%/, '') / 100
}