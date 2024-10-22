const mybox=document.getElementById("mybox");
document.addEventListener("keydown",event=>{
    mybox.style.background="tomato";
    mybox.textContent="😵‍💫";
});
document.addEventListener("keyup",event=>{
    mybox.style.background="aqua";
    mybox.textContent="😊";
});
const move=10;
let x=0;
let y=0;
document.addEventListener("keydown",event=>{
    if(event.key.startsWith("Arrow")){
        event.preventDefault();
        switch(event.key){
            case "ArrowUp":
                y-=move;
                break;
            case "ArrowDown":
                y+=move;
                break;
            case "ArrowLeft":
                x-=move;
                break;
            case "ArrowRight":
                x+=move;
                break;
        }
        mybox.style.top=`${y}px`;
        mybox.style.left=`${x}px`;
    }
})