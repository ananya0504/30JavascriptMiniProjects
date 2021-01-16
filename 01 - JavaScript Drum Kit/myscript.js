const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown',playSound);

function playSound(e){
    //console.log(e.key);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;//to stop running for a null value
    audio.currentTime=0; //to play from the start
    audio.play();
    key.classList.add('playing'); //for transition
};

function removeTransition(e)
{
    if(e.propertyName !== 'transform') return; //the element has not transitioned
    this.classList.remove('playing'); //remove transition
};