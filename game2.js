
    const choicesArray = ["rock", "paper", "scissors"];

    function computerPlay() {
    
        return choicesArray[Math.floor(Math.random() * choicesArray.length)];
    }

    function userPlay() {

        do {
            playerSelection = prompt(`Enter Rock, Paper, or Scissors`);

            if (playerSelection === null) {

            if (confirm("Game canceled ❌ You exit the game, are you sure?")) {
                return null;
            }
                continue; 
            }

            playerSelection = playerSelection.trim().toLowerCase();


            if (choicesArray.includes(playerSelection)) {
                return playerSelection;

            } else {
                alert("⚠️ Invalid choice! Please select Rock, Paper, or Scissors.");
                continue;
            }

        } while (true)
    }

    function playRound(playerChoice, computerChoice) {
    

        if (playerChoice === computerChoice) {
            return `🤝 It's a draw! You both chose ${playerChoice}.`;
        }

        if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            return `🎉 You Win 👏 ! ${playerChoice} beats ${computerChoice}.`;
        } else {
            return `💀 You Lose 👎 ! ${computerChoice} beats ${playerChoice}.`;
        }
    }

    function game() {

        alert("🔥 Welcome to the Ultimate Rock, Paper, Scissors Battle! 🔥​");
        alert("To enter the game, you have to open the console in your browser. Press F12 to start 🎮​");
        console.log(" Defeat the evil AI 🤖 in a best-of-5 battle!");
        console.log(`ROCK 🪨 PAPER 🧻 SCISSORS ✂️`);

        let score = {
            draw: 0,
            you: 0,
            ai: 0
        };

        for (let i = 1; i <= 5; i++) {
            console.group(`🌀 Round ${i} of 5 🌀`); 
            //alert(`🌀 Round ${i} of 5 🌀`); 

            let playerSelection = userPlay();
            if(playerSelection === null) {
                console.log("🤖 Need a break? (A)I'm getting stronger by the minute!");
                return;
            }
            console.log(`🌞 You chose: ${playerSelection.toUpperCase()}`);

            let computerSelection = computerPlay();
            console.log(`🤖 AI chose: ${computerSelection.toUpperCase()}`);

            let thisRound = playRound(playerSelection, computerSelection);

            if (thisRound.includes("You Win 👏")) {
                score["you"]++;

            } else if (thisRound.includes("You Lose 👎 ")) {
            score["ai"]++;

            } else if (thisRound.includes("draw")) {
                score["draw"]++;
            }

            console.group(thisRound)
            console.log(`You: ${score["you"]}\nAI: ${score["ai"]}\nDraw: ${score["draw"]} `);
            console.groupEnd();
            console.groupEnd();
        }

        if (score["you"] > score["ai"]) {
            console.log("🎉 Congratulations! You defeated the evil AI! 🎉");

        } else if (score["you"] < score["ai"]) {
            console.log("💀 Game Over! The AI has taken over the world! 💀");

        } else {
            console.log("🤝 It's a draw! Humanity lives to fight another day.");
        }
    }

    game();