const mybox=document.getElementById("mybox");
mybox.addEventListener("click",function(event){
    event.target.style.backgroundColor="red";
    event.target.textContent="OUTCH! 🤕";
});
mybox.addEventListener("mouseover",function(event){
    event.target.style.backgroundColor="yellow";
    event.target.textContent="SEE WHAT'S INSIDE! 😍";
});
mybox.addEventListener("mouseout",function(event){
    event.target.style.backgroundColor="lightgreen";
    event.target.textContent="CLICK ME! 😊";
});