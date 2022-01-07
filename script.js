'use strict';
// selecting elements
const scorepl0 = document.querySelector('#score--0') ; 
const scorepl1 = document.querySelector('#score--1') ;
const currentscore0 = document.querySelector('#current--0') ; 
const currentscore1 = document.querySelector('#current--1') ; 
const diceel = document.querySelector('.dice') ; 
const btnnew = document.querySelector('.btn--new') ; 
const btnroll = document.querySelector('.btn--roll') ; 
const btnhold = document.querySelector('.btn--hold') ; 
let currentscore = 0 ; 
const player1 = document.querySelector('.player--0') ; 
const player2 = document.querySelector('.player--1') ; 
const switchplayer = function () {
        currentscore = 0 ;
        document.querySelector(`#current--${activeplayer}`).textContent = currentscore; 
        activeplayer = activeplayer === 0 ? 1 : 0 ;  
        player1.classList.toggle('player--active') ; 
        player2.classList.toggle('player--active') ; 
} 
const winname = ["eng Avami" , 
"helma Avami" 
]
// strating consitions
scorepl0.textContent = 0 ; 
scorepl1.textContent = 0 ; 
diceel.classList.add('hide') ; 
diceel.classList.remove('dice') ; 
let activeplayer = 0 ; 
const scores = [0, 0] ; 
let playing = true ; 
// rool th dice
btnroll.addEventListener('click' , function(){
    // 1. generating roll dice
    if(playing){
        const dice = Math.trunc(Math.random() * 6) + 1 ;
    console.log(dice);

    // 2. display rool
    diceel.classList.remove('hide') ; 
    diceel.classList.add('dice') ; 
    diceel.src = `dice-${dice}.png` ; 
    // 3. check roll if its !==1 
    if (dice !==1 ){
        currentscore += dice ; 
        document.querySelector(`#current--${activeplayer}`).textContent = currentscore; 
        // 4. check roll if its === 1 switch the player
    }else{
        switchplayer() ; 
    }
    }
})
btnhold.addEventListener('click' , function() {
    // 1. hold score
    scores[activeplayer] += currentscore ;
    document.querySelector(`#score--${activeplayer}`).textContent =  scores[activeplayer]; 
    
    // 2. check if score is >= 100
    if (scores[activeplayer] >= 50) {
        console.log(scores[activeplayer]);
        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner') ; 
        playing = false ; 
        if (scores[activeplayer] >= 50) {
            document.querySelector('.pop').classList.toggle('hi') ;
            document.querySelector('.winimg').src = `${activeplayer}.jpg` ;  
            let winnername = winname[activeplayer] ; 
            document.querySelector('.winname').textContent = `${winnername} :    i'am winner horay and you are a loooooser`;
        }
    }
    // 3. switch the user
    switchplayer() ;  
    
})
document.addEventListener('keydown' , function(e) {
    if(e.key === 'Escape') {
        document.querySelector('.pop').classList.add('hi') ;
    }   
})
document.querySelector('.btn--new').addEventListener('click' , function(){
    let currentscore = 0 ;  
    scorepl0.textContent = 0 ; 
    scorepl1.textContent = 0 ; 
    diceel.classList.add('hide') ; 
    diceel.classList.remove('dice') ; 
    let activeplayer = 0 ; 
    scores[0] = 0 ; 
    scores[1] = 0 ;  
    let playing = true ; 
    currentscore0.textContent = 0 ; 
    currentscore1.textContent = 0 ; 
    document.querySelector(`.player--${activeplayer}`).classList.remove('player--winner') ;
    switchplayer() ; 
})
///////////
document.querySelector('.close0').addEventListener('click' , function(){
    document.querySelector('.hint').classList.add('hi') ; 
})
document.querySelector('.close1').addEventListener('click' , function(){
    document.querySelector('.hint').classList.add('hi') ; 
})
