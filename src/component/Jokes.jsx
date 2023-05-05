import React from "react";

const Jokes = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
      });
  }, []);

  return (
    <div>
      <ul>
        <li><b>{items.setup}</b></li>
        <li>{items.delivery}</li>
      </ul>
    </div>
  );
};

export default Jokes;