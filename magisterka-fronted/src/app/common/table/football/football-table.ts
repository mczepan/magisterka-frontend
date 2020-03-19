import {Team} from "../../types/team/team";

export class FootballTable {
  "name": string;
  "teamid": string;
  "played": number;
  "goalsfor": number;
  "goalsagainst": number;
  "goalsdifference": number;
  "win": number;
  "draw": number;
  "loss": number;
  "total": number;
  "team": Team;
}
