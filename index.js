
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