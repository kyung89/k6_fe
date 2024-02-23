const rollDice = () => {
    const num = Math.floor(Math.random()* 5 + 1);
    document
        .querySelector("section > div > img").setAttribute("src", `./img/${num}.png`);
};