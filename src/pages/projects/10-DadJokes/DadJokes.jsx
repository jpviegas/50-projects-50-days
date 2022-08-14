import { useEffect, useRef, useState } from "react";
import "./DadJokes.css";

function DadJokes() {
  document.title = "Dad Jokes";
  const [joke, setJoke] = useState("");
  const jokeRef = useRef(null);

  const getJoke = async () => {
    const config = { headers: { Accept: "application/json" } };
    const res = await fetch("https://icanhazdadjoke.com", config);
    const data = await res.json();
    setJoke(data.joke);
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <main className="dad-jokes">
      <div className="dad-jokes-container">
        <h1>Don&apos;t Laugh Challenge</h1>
        <div className="joke" id="joke" ref={jokeRef}>
          {joke}
        </div>
        <button type="button" onClick={getJoke}>
          Get Another Joke
        </button>
      </div>
    </main>
  );
}

export default DadJokes;
