import isEven from './is-even.js';

const num = document.getElementById('numberInput');
const butt = document.getElementById('butt');
const img = document.getElementById('imgDiv')
// const oddImage = document.getElementById('odd');
// const evenImage = document.getElementById('even');

butt.onclick = function() {
    const result = isEven(Number(num.value));
    if(result){
        img.classList.remove('odd');
        img.classList.add('even');
        console.log('even');
        
    } else {
        img.classList.remove('even');
        img.classList.add('odd');
        console.log('odd');
    }
};

