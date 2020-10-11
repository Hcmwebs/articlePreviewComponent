function myAlert(){
 alert ("Hi there\n Welcome js functional!!")
}


const shareBtn = document.querySelector(".shareBtn");
const profile = document.getElementById("profile");
const media = document.getElementById("media");
const screen = window.matchMedia("(max-width: 760px)");
shareBtn.addEventListener("click", open);
shareBtn.addEventListener("dblclick", close);

function open(){
    if(screen.matches){
    profile.style.display ="none";
    media.style.display = "flex";

  }
  else{
    profile.style.display = "flex" ;
    media.style.display = "flex";
  };
}

function close(){
  if(screen.matches){
  profile.style.display = "flex";
  media.style.display ="none";
  }
  else{

    media.style.display ="none";
  }
}

