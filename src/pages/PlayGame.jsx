import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function PlayGame() {

    const { state } = useLocation();

    const [guessedLetters, setGuessedLetters] = useState([]);

    const [step, setStep] = useState(0);

    function handleLetterClick(letter) {
        if(state.wordSelected.toUpperCase().inlcudes(letter)) {
            console.log('Correct');
        } else {
            console.log('Wrong');
            setStep(step + 1);
        }

        setGuessedLetters([...guessedLetters, letter]);
    }

    return (
        <>
          <h1>Play Game</h1>
          <Link to='/start' className="text-blue-400">Start Game Link</Link>
        </>
    );
}

export default PlayGame;