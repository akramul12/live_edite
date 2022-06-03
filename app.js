// get elements

const heading = document.getElementById('heading');
const font_size = document.getElementById('font_size');
const color= document.getElementById('color');
const ff= document.getElementById('ff');
const h1= document.querySelector('h1');
const align= document.querySelectorAll('.align');




heading.onkeyup =( ) =>{
    h1.innerHTML = heading.value;
    h1.style.fontSize = '20px'
}

align.forEach(item => {
    item.onchange = () => {
         h1.style.textAlign=item.value;
    }
});

font_size.oninput=() =>{
    h1.style.fontSize = font_size.value + 'px';
}

color.oninput=() =>{
    h1.style.color = color.value;
}

ff.onchange =() => {
    h1.style.fontFamily = ff.value;
}
