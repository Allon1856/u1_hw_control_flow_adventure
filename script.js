let userName = prompt("FINALLY!! THEY SENT SOMEONE! What do they call you back at the agency?!")

alert(`A Name for sure fit for a HERO! lets save the world ${userName}!`)

const startGame = () => {
    let userPlay = confirm("If you're not prepared for this mission you need to tell me right now!? Because The WORLD IS ON THE LINE YOU SQUID!!")
    playGame(userPlay)
}

const playGame = (choice) => {
    if (choice) {
        alert("I KNEW I COULD COUNT ON YOU, THE WORLD THANKS YOU!")
        choosePath()
    } else {
        alert("....No time for scary cats, get out of here kid.")
    }
}

const choosePath = ( => {
    let path = prompt(`Where should we start the mission? On Mars? Ocean? or Volcano `)
})

if (let path === "Mars"); {
    alert("You're BRAVE! The Martians are extremely hostile! Be prepared, also preserve your suit Life depends on it!")
    if (Mars =)
        startGame()
} else if (let path === "Ocean") {
    alert("We have been hearing reports about a massive Sea monster down there! You need to be cautious down there!")
    startGame()
} else if (let path === "Volcano") {
    alert("The Lava isnt the only bothersome there, Make sure you take out the evil Dr. Villian")
    alert("You sure you want to go to the Volcano? Y/N")
    startGame()
} else {
    alert(There is nothing to save here!)

}










