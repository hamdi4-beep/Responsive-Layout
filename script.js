const list = document.querySelectorAll('li:not(li:first-child)')
const ul = list[0].parentElement

ul.addEventListener('click', e => {
    list.forEach(li => {
        if (li.style.display != 'block') {
            li.style.display = 'block'
        } else {
            li.style.display = 'none'
        }
    })
})