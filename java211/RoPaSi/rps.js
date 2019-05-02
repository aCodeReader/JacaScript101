function rps(h1, h2) {
    if (h1 === h2)
    return "It is a tie."
    else if (h1 === "rock" && h2 === "scissors")
    return "h1 wins!"
    else if (h1 === "rock" && h2 === "paper")
    return "h2 wins!"
    else if (h1 === "paper" && h2 === "scissors")
    return "h1 wins!"
    else if (h1 === "paper" && h2 === "rock")
    return "h2 wins!"
    else if (h1 === "scissors" && h2 === "paper")
    return "h1 wins!"
    else if (h1 === "scissors" && h2 === "rock")
    return "h2 wins!"
   
   
    else 
    return "Select : rock paper or sciccors"
    }
console.log(rps("scissors", "paper"))