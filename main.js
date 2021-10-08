hi=0;
ji=0;
function submit(){
hi=document.getElementById("username");
ji=document.getElementById("password"); 
localStorage.setItem("player1",username);
localStorage.setItem("player2",password);
winodow.location="game.html";
}