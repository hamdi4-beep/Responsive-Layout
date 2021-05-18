const range = document.querySelector('#range')
const img = document.querySelector('img')
const label = document.querySelector('label')

update()

range.addEventListener('change', e => {
    const elem = e.target
    const value = elem.value
    update()
})

function update() {
    img.style.opacity = range.value / 100
    label.textContent = `${range.value}%`
}