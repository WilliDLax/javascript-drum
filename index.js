function playSound(e){
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!sound) return;

    key.classList.add("playing");

    sound.currentTime = 0;
    sound.play();
}

const keys = document.querySelectorAll(".key");
keys.forEach(key=>key.addEventListener("transitionend", function(e){
    this.classList.remove("playing");
}));

window.addEventListener("keydown", playSound);