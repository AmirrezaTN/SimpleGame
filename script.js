(() => {
    'use strct'
const starGameBtn = document.querySelector('.start-game')
const gameContainer = document.querySelector('.game-container')
const scoreValueElement = document.querySelector('.score-value')
const boxArr = document.querySelectorAll('.box')
const collorArr = ['#ef9a9a', '#F48FB1', '#CE93D8', '#FFAB91', '#9FA8DA', '#90CAF9', '#81D4FA', '#80DEEA', '#80CBC4', '#FFF59D', '#', ]



const startGame = () => {
  console.log('startGame');
  starGameBtn.classList.add('hide');
 gameContainer.classList.remove('hide');

 for(const box of boxArr) {
     box.addEventListener('click',boxClick);
 }

moveNextBox();
}; 

const boxClick = function() {
    console.log('boxClick');

    updateScore(1);
    moveBox(this);
};

const rand = max => Math.floor( Math.random() * max );


const moveBox = (box) => {
    box.classList.add('hide');
    setTimeout(() => {
        console.log('moveBox');
        box.style.left = rand(90) + '%';
        box.style.top = rand(90) + '%';
        box.style.backgroundColor = collorArr[rand(collorArr.length)];
        box.classList.remove('hide');
}, 150);
}; 


let boxIndex = -1;
const moveNextBox = () => {
    console.log('moveNextBox');
  
    boxIndex++;
    if (boxIndex >= boxArr.length) {
        boxIndex = 0;
    }
    moveBox(boxArr[boxIndex]);

    setTimeout(moveNextBox, rand(300) + 350 );
   };
    
   
   
   let score = 0;
const updateScore = (addScore) => {
    console.log('updateScore');

score += addScore;
scoreValueElement.innerHTML = score;
};  



starGameBtn.addEventListener('click',startGame);
})();