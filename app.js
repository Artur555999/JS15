let btn = document.querySelector('.btn'),
element = document.querySelector('.element');

btn.addEventListener('click', () => {
    if (btn.innerHTML == 'Создать фигуру') {
        createFigure()
        btn.innerHTML = 'Поменять фигуру'
    }else if (btn.innerHTML == 'Поменять фигуру') {
        element.innerHTML = ''
        createFigure() 
    }
})

function createFigure() {
    let el = document.createElement('div');
    let width = random(20,100);
    let height = width;
    el.style.width = width + 'px'
    el.style.height = height + 'px'
    el.style.background = randomColor()
    let randomBorder = ['100', 'circle()', 'polygon(50% 0%, 0% 100%, 100% 100%)'];
    let index = Math.round(Math.random() * randomBorder.length);
    el.style.clipPath =  randomBorder[index]
    element.append(el)
}

function random(min,max) {
    return Math.round(Math.random() * (max - min + 1) + min)
}

function randomColor() {
    let x = Math.round(Math.random() * 255);
    let y = Math.round(Math.random() * 255);
    let z = Math.round(Math.random() * 255);
    return `rgb(${x}, ${y}, ${z})`
}