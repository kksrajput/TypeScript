let sportsOne: string[] = ["Golf", "Football", "Cricket", "Tennis"]

for(let sports of sportsOne){
    if(sports == "Football"){
        console.log(`Favourite ${sports}`)
    }
    // console.log(sports);
}

for(let i = 0;i < sportsOne.length; i++){
    console.log(` Sports - ${sportsOne[i]}`)
}