// steps:
// select modal-btn, modal-overlay, close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', function(){
    // console.log(modalBtn.classList); // DOMTokenList(2) ['btn', 'modal-btn', value: 'btn modal-btn']
    // console.log(modalOverlay.classList); // DOMTokenList ['modal-overlay', value: 'modal-overlay']
    
    if(modalOverlay.classList.contains('open-modal')){
        modalOverlay.classList.remove('open-modal');
    }
    else{
        modalOverlay.classList.add('open-modal');
    }
});

closeBtn.addEventListener('click', function(){
    modalOverlay.classList.remove('open-modal')
});