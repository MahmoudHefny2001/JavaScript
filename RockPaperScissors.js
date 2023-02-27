function whoWin(Player_1_choice, Player_2_choice){
    if (Player_1_choice === Player_2_choice){
        return "Draw!";
    }

    if(Player_1_choice === 'scissors' && Player_2_choice === 'paper'){
        return 'Player 1 won!'
    }

    if(Player_1_choice === 'scissors' && Player_2_choice === 'rock'){
        return 'Player 2 won!'
    }


    if(Player_1_choice === 'paper' && Player_2_choice === 'scissors'){
        return 'Player 2 won!'
    }

    if(Player_1_choice === 'paper' && Player_2_choice === 'rock'){
        return 'Player 1 won!'
    }

    if(Player_1_choice === 'rock' && Player_2_choice === 'scissors'){
        return 'Player 1 won!'
    }

    if(Player_1_choice === 'rock' && Player_2_choice === 'paper'){
        return 'Player 2 won!'
    }
    
}