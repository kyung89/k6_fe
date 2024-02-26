const handleClick = (num) => {
    let computerNum = Math.floor(Math.random()* 5 + 1);
    document.querySelector("#computer").setAttribute("src", `./img/${computerNum}.png`);

    document.querySelector("#me").setAttribute("src", `./img/${num}.png`);
    if(computerNum == num) 
        document.querySelector("#result").innerHTML = "맞음";
    else 
        document.querySelector("#result").innerHTML = "틀림";
}