console.log("test the script is active")

// functions 

function computerPlay(){

}

function computerSelection(){

    var cplay=(math.random() * 3)

    if (cplay == 1)
    return "rock"
    
    else if (cplay == 2)
    return "paper"
    
    else (cplay == 3)
    return "scissors"

}

function playerSelection(){

    var pchoice = prompt("Choose rock, paper, or scissors.")
}

function playRound(){

    if (playerSelection == computerSelection)
    return "it is a draw"
    
}

function game(){

}