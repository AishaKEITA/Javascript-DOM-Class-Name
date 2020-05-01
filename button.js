let modalBtn = document.getElementById("modal-btn")

let closebtn = document.getElementById("close-btn")


let modal = document.querySelector(".modal")

let closeBtn = document.querySelector(".close-btn")

modalBtn.onclick = function(){
  modal.style.display = "block"
}
closebtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display ="none"
  }
}



  

