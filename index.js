// let h1=document.getElementById('H1');
// let h2=document.getElementById('H2');
// let h3=document.getElementById('H3');
// let g1=document.getElementById('G1');
// let g2=document.getElementById('G2');
// let g3=document.getElementById('G3');
let homeScoreBox=document.getElementById('home-score');
let guestScoreBox=document.getElementById('guest-score');
let homeScore=0;
let guestScore=0;
 homeScoreBox.textContent=homeScore;
  guestScoreBox.textContent=guestScore;

function increment(value,player){
    if(player=='home'){
        homeScore+=value;
        homeScoreBox.textContent=homeScore;
    }
    else{
        guestScore+=value;
        guestScoreBox.textContent=guestScore;
    }
}