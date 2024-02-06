const RPS = require('../RPS.js');

describe("RPS", function() {

    test("returns 'TIE!' when player1 === player2", function() {
        let output = RPS.whoWon('rock', 'rock');
        expect(output).toEqual("TIE!");
    });

    test("returns 'Player 2 wins!' when player1 === 'rock' && player2 === 'paper'", function() {
        let output = RPS.whoWon('rock', 'paper');
        expect(output).toEqual("Player 2 wins!");
    });
    
    test("returns 'Player 2 wins!' when player1 === 'paper' && player2 === 'scissors'", function() {
        let output = RPS.whoWon('paper', 'scissors');
        expect(output).toEqual("Player 2 wins!");
    });

    test("returns 'Player 2 wins!' when player1 === 'scissors' && player2 === 'rock'", function() {
        let output = RPS.whoWon('scissors', 'rock');
        expect(output).toEqual("Player 2 wins!");
    });

    test("returns 'Not valid entry!' when player1 !== 'rock' || player1 !== 'scissors' || player1 !== 'paper' || player2 !== 'rock' || player2 !== 'paper' || player2 !== 'scissors'", function (){
        let output = RPS.whoWon('car', 'scissors');
        expect(output).toEqual("Not valid entry!");
    });

});

