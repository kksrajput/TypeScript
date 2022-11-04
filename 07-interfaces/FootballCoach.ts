import { Coach } from "./Coach";
export class FootballCoach implements Coach{
    getDailyWorkout(): string {
       return "Practice 100 shots per day";
    }
}