

const button=document.getElementById("mybtn");
const image=document.getElementById("myimg");
button.addEventListener("click",event=>{
    if(image.style.display==="none"){
        image.style.display="block";
        button.textContent="HIDE";
    }
    else{
        image.style.display="none";
    
        button.textContent="SHOW";
    }
});