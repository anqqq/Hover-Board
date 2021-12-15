const board = document.querySelector('#board')
const colors = ['#ADFF2F', '#8B0000', '#FF1493', '#FF4500', '#FF00FF', '#4B0082', '#6A5ACD', '#00BFFF', '#7FFFD4', '#00FFFF', '#DAA520']
const squareNumbers = 1200

for (let i = 0; i < squareNumbers; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => remColor(square))

    board.append(square)
}

function setColor(elem) {
    const color = getRandomColor()
    elem.style.backgroundColor = color
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function remColor(elem) {
    elem.style.backgroundColor = '#1d1d1d'
    elem.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const indexColor = Math.floor(Math.random() * colors.length)
    return colors[indexColor]
}