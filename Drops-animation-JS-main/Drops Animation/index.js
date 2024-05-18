const container = document.querySelector(".container");


function dropped(){
    const drop = document.createElement("span");
    
    drop.classList.add("drop"); // to put drop class from css

    
    drop.style.top = Math.random() * innerHeight + "px";
    drop.style.left = Math.random() * innerWidth + "px";
    
    setTimeout(()=> {
        drop.remove();
    }, 6500);
    
    container.appendChild(drop);

}


setInterval(dropped, 500);