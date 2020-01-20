// get modal elements

let modal = document.getElementById('simpleModal');
let closeBtn = document.getElementById('closeBtn');
let modalImg = document.getElementById('modalImg');
let message = document.getElementById('message');
let youScore = document.getElementById('you');
let pcScore = document.getElementById('pcs');

let i = 0;
let j = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");


function pcchoice() {
    let x = Math.random();
    return x*3;
}
rock.onclick = function() {
    modal.style.display = 'block';
    let pc = pcchoice();
    if(pc<1) {
        modalImg.src = 'images/lame.png'
        modalImg.style.width = '40%';
        message.innerHTML = 'Computer also chose rock, lame...';
    } else if(1<pc && pc<2) {
        message.innerHTML = 'Computer chose paper, oh noooooooo';
        modalImg.src = 'images/destroyed-rock.png'
        modalImg.style.width = '60%';
        j = j + 1;
    } else {
        modalImg.src = 'images/win.png'
        modalImg.style.width = '30%';
        message.innerHTML = 'You won!!! Uhuuuuuuuuuulllll';
        i = i + 1;
    }   
}

paper.onclick = function() {
    modal.style.display = 'block';
    let pc = pcchoice();
    if(pc<1) {
        modalImg.src = 'images/win.png'
        modalImg.style.width = '30%';
        message.innerHTML = 'You won!!! Uhuuuuuuuuuulllll';
        i = i + 1;
    } else if(1<pc && pc<2) {
        modalImg.src = 'images/lame.png'
        modalImg.style.width = '25%';
        message.innerHTML = 'Computer also chose paper, lame...';
    } else {
        message.innerHTML = 'Computer chose scissors, oh noooooooo';
        modalImg.style.width = '60%';
        modalImg.src = 'images/destroyed-paper.png'
        j = j + 1;
    }   
}
scissors.onclick = function() {
    modal.style.display = 'block';
    let pc = pcchoice();
    if(pc<1) {
        message.innerHTML = 'Computer chose rock, oh noooooooo';
        modalImg.style.width = '17%';
        modalImg.src = 'images/destroyed-scissors.png'
        j = j + 1;
    } else if(1<pc && pc<2) {
        modalImg.src = 'images/win.png'
        modalImg.style.width = '30%';
        message.innerHTML = 'You won!!! Uhuuuuuuuuuulllll';
        i = i + 1;
    } else {
        modalImg.src = 'images/lame.png'
        modalImg.style.width = '25%';
        message.innerHTML = 'Computer also chose scissors, lame...';
        
    }   
}
closeBtn.onclick = function(){
    modal.style.display = 'none';
    pcScore.innerHTML = 'PC: ' + j;
    youScore.innerHTML = 'You: ' + i;
    checkScore();
}
window.onclick = function outsideClick(e){
    if(e.target == modal){
        modal.style.display = 'none';
        pcScore.innerHTML = 'PC: ' + j;
        youScore.innerHTML = 'You: ' + i;
        checkScore();

    }    
}

function checkScore() {
if(i==5) {
    window.location.href = 'https://www.youtube.com/watch?v=aRlk72bQK90';
} else if(j==5) {
    window.location.href = 'https://www.youtube.com/watch?v=mRyv_oe9-Ys';
}
}
