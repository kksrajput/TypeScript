import { CricketCoach } from "./CricketCoach";
import { FootballCoach } from "./FootballCoach"
import { Coach } from "./Coach"

let myCricketCoach = new CricketCoach();
let myFootballCoach = new FootballCoach();

let myCoach: Coach[] = [];
myCoach.push(myCricketCoach);
myCoach.push(myFootballCoach);
for(let temp of myCoach){
    console.log(temp.getDailyWorkout());
}
