function myFunction(){
    var arr = [ "","dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
    // for (var i =0;i<10;i++){
        var r1 = Math.floor(((Math.random())*6)+1);
        var r2 = Math.floor(((Math.random())*6)+1);
        document.getElementById("p1").src = arr[r1];
        document.getElementById("p2").src = arr[r2];
    // }
    if(r1==r2){
        document.getElementById("result").innerHTML="&#9757 Draw!! &#9757";
    }
    else if(r1>r2){
        document.getElementById("result").innerHTML="&#9757 Player 1 Won !";
    }
    else if(r2>r1){
        document.getElementById("result").innerHTML="Player 2 Won ! &#9757";

    }
    document.querySelector("button").innerHTML="Let's Play Again";
}