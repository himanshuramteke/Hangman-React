import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { useEffect } from "react";
import useWordStore from "../stores/WordStore";

function Home() {
    
    const { setWordList, setWord } = useWordStore();

    async function fetchWords() {
        const response = await fetch('http://localhost:3000/words');
        const data = await response.json();
        console.log(data);

        setWordList([...data])

        const randomIndex = Math.floor(Math.random() * data.length);
        console.log(data[randomIndex]);
        
        setWord(data[randomIndex].wordValue);
    }

    useEffect(() => {
        fetchWords();
    }, []);

    return (
        <>
          <h1 className="bg-green-400 text-2xl text-center p-4">Hangman Game</h1>
          <div className="flex flex-col items-center mt-4">
          <Link to='/play'>  
            <Button text="Single player"/>
          </Link>
          <br />
          <Link to="/start">
                <Button text="Multi player" styleType="secondary" />
          </Link>
          </div>
        </>
    )

}

export default Home;