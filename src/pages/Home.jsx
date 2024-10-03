import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { useEffect, useState } from "react";

function Home() {
    const [word, setWord] = useState('');

    async function fetchWords() {
        const response = await fetch();
        const data = await response.json();
        console.log(data);

        const randomIndex = Math.floor(Math.random() * data.length);
        console.log(data[randomIndex]);
        
        setWord(data[randomIndex].wordValue);
    }

    useEffect(() => {
        fetchWords();
    }, []);

    return (
        <>
          <Link to='/play' state={{ wordSelected: word }}>  
          </Link>
          <br />
          <Link to="/start">
             <div className="mt-4">
                <Button text="Multi player" styleType="secondary" />
             </div>
          </Link>
        </>
    )

}

export default Home;