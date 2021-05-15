const blocks = document.querySelectorAll('.block')
const wrapper = blocks[0].parentElement
const imgs = [
    'https://images2.alphacoders.com/987/987245.png',
    'https://cdn.awwni.me/179n9.png',
    'https://pbs.twimg.com/media/DkaJlCeU0AA2Wry.jpg'
]
let x = 0

// Loop through the imgs array and create a div with blurred effect

for (const img of imgs) {
    const div = document.createElement('div')
    div.classList.add('blur')
    div.style.backgroundImage = `url(${img})`
    blocks[x++].append(div)
}

wrapper.addEventListener('click', e => {
    if (e.target.classList[0] == 'block') {
        const block = e.target
        display(block)
    }
})

// Hide all blocks except the one that triggered the click event

function display(elem) {
    blocks.forEach(block => {
        if (block == elem) {
            elem.style.display = 'flex'
        } else {
            block.style.display = 'none'
        }
    })
}