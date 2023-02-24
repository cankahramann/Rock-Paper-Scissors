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
            console.log("Tie Game!")
            return 0 
        } else if (computer === "PAPER" ){
            console.log("Paper wraps Rock! You lost!")
            return 2
        } else {
            console.log("Rock crushes Scissors! You win!")
            return 1
        }

    } else if (player ==="PAPER") {
        if (computer === "ROCK") {
            console.log("Paper wraps Rock! You win!")
            return 1
        } else if (computer="SCISSORS") {
            console.log("Scissors cuts Paper! You lost!") 
            return 2
        } else {
            console.log("Tie Game!")
            return  0 
        }
    } else {
        if(computer === "SCISSORS"){
            console.log("Tie Game!")
            return 0
        } else if (computer === "ROCK"){
            console.log("Rock beats Scissors! Computer wins!")
            return 2
        } else {
            console.log("Scissors cuts Paper! You win!")
            return 1
        }
    }


}


function game(){
    let p_score = 0;
    let c_score = 0;

    for (let i = 1; i <=5; i++){
        let p = prompt("Type ROCK-PAPER-SCISSORS");
        let c = getComputerChoice();

        if (playSingleRound(p,c)==1){
            p_score += 1;
        } else if (playSingleRound(p,c)==2){
            c_score += 1;
        }

        console.log(`Player Score:${p_score} Computer Score:${c_score}`)
        
    }

    

    if (p_score>c_score){
        console.log("Congrats! You Won!")
    } else{
        console.log("Motherfucker Won..")    }

}


game();