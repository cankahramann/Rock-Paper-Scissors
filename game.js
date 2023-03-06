function getComputerChoice(){
    let num = Math.floor(Math.random()*3+1)
    if (num==1) {
        return "Rock"
    } else if (num==2){
        return "Paper"
    }else{
        return "Scissors"
    }
}


function playSingleRound(player_choice,computer_choice){
    player = player_choice.toUpperCase();
    computer = computer_choice.toUpperCase();

    if (player === "ROCK"){
        if (computer === "ROCK"){
            gameflow.innerHTML = "Tie Game!";
            return 0 
        } else if (computer === "PAPER" ){
            gameflow.innerHTML = "Paper wraps Rock! You lost!";
            return 2
        } else {
            gameflow.innerHTML = "Rock crushes Scissors! You win!";
            return 1
        }

    } else if (player ==="PAPER") {
        if (computer === "ROCK") {
            gameflow.innerHTML = "Paper wraps Rock! You win!";
            return 1
        } else if (computer="SCISSORS") {
            gameflow.innerHTML = "Scissors cuts Paper! You lost!";
            return 2
        } else {
            gameflow.innerHTML = "Tie Game!"
            return  0 
        }
    } else {
        if(computer === "SCISSORS"){
            gameflow.innerHTML = "Tie Game!";
            return 0
        } else if (computer === "ROCK"){
            gameflow.innerHTML = "Rock beats Scissors! Computer wins!";
            return 2
        } else {
            gameflow.innerHTML = "Scissors cuts Paper! You win!";
            return 1
        }
    }
}


function game(p,c){

    let game_value = playSingleRound(p,c);

    if (game_value === 1){
        user_score += 1;
    } else if (game_value === 2){
        computer_score += 1;
    }
    let text = `You ${user_score}:${computer_score} Computer`;
    game_score.innerHTML = text;

}

let computer_score = 0;
let user_score = 0;

let rockbut = document.getElementById("rock");
let paperbut = document.getElementById("paper");
let scibut = document.getElementById("scissors");
let gameflow = document.getElementById("flow");
let game_score = document.getElementById("score");
let best_five = false;
let user_choice = "";



rockbut.addEventListener("click",function(){
    if (best_five){
        gameflow.innerHTML ="GAME HAS FINISHED. TO PLAY AGAIN RELOAD THE PAGE!"
    }else {
        user_choice = "ROCK";
        computer = getComputerChoice();
        game(user_choice,computer);
        if (computer_score === 5){
            best_five = true;
            gameflow.innerHTML ="COMPUTER CRUSHED YOU!!";
        }else if (user_score === 5){
            best_five = true;
            gameflow.innerHTML = "YOU SLAYED THE COMPUTER!!";
        }
    }
    
});


paperbut.addEventListener("click",function(){
    if (best_five){
        gameflow.innerHTML ="GAME HAS FINISHED. TO PLAY AGAIN RELOAD THE PAGE!"
    }else {
           
        user_choice = "PAPER";
        computer = getComputerChoice();
        game(user_choice,computer);
        if (computer_score === 5){
            best_five = true;
            gameflow.innerHTML ="COMPUTER CRUSHED YOU!!";
        }else if (user_score === 5){
            best_five = true;
            gameflow.innerHTML = "YOU SLAYED THE COMPUTER!!";
        }

    }
 
});

scibut.addEventListener("click",function(){
    if (best_five){
        gameflow.innerHTML ="GAME HAS FINISHED. TO PLAY AGAIN RELOAD THE PAGE!"
    }else {
        user_choice = "SCISSORS";
        computer = getComputerChoice();
        game(user_choice,computer);
        if (computer_score === 5){
            best_five=false;
            gameflow.innerHTML ="COMPUTER CRUSHED YOU!!";
        }else if (user_score === 5){
            best_five =false;
            gameflow.innerHTML = "YOU SLAYED THE COMPUTER!!";
        }
    }
    
  
});
