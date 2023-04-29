window.addEventListener("keydown",(e)=>{
    console.log(e);
    // console.log(e.keyCode);
    let selector = ".key[data-ascii='"+e.keyCode+"']";
    let A = document.querySelector(selector);
    console.log(A);
    let soundName = A.querySelector("span").innerText;
    console.log(soundName);
    let sound = document.createElement("audio");
    sound.setAttribute("src","./sounds/"+soundName+".wav");
    sound.play();
})