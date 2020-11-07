function play(yourChoice){
    var you = yourChoice.id;
    var images = ["rock.jpg", "papers.jpg", "scissor.png"];
    
    var bot = Math.floor(Math.random() * 3);
    
    var y = document.getElementById("you");
    var b = document.getElementById("bot");
    
    y.src = images[you];
    b.src = images[bot];
    
    var before = document.getElementById("before");
    before.style.display="none";
    var after = document.getElementById("after");
    after.style.display="block";
    
    var h2 = document.getElementById("h2");
    
    if(you == 0){
        if(bot == 0) h2.innerHTML = "its a draw!";
        else if(bot == 1) h2.innerHTML = "Better Luck Next Time....You Lose.";
        else h2.innerHTML = "Congratulations, you win!"; 
    }
    
    else if(you == 1){
        if(bot == 0) h2.innerHTML = "Congratulations, you win!";
        else if(bot == 1) h2.innerHTML = "its a draw!";
        else h2.innerHTML = "Better Luck Next Time....You Lose."; 
    }
    
    else if(you == 2){
        if(bot == 0) h2.innerHTML = "Better Luck Next Time....You Lose.";
        else if(bot == 1) h2.innerHTML = "Congratulations, you win!";
        else h2.innerHTML = "its a draw!"; 
    }
    
}

function playAgain(){
    var before = document.getElementById("before");
    before.style.display="block";
    var after = document.getElementById("after");
    after.style.display="none";
    document.getElementById("h2").innerHTML="Choose your rock or paper or scissors.";
}